import mongoose, {Schema} from "mongoose"; //1st we create the (user scema/model).
//for creating the user model 1st we draw the user model manually and define all field.


import jwt from "jsonwebtoken"//this is used to generate access token and refresh token for the user. as we use jwt for authentication and authorization purpose. 
//so by using this we can generate access token and refresh token for the user.

import bcrypt from "bcrypt" //this is used to hash the password before saving it to the database and also to compare the password during login.
// as we do not want to save passward directly in database for security purpose. so we use bcrypt to hash the password before saving it to the database and also to compare the password during login.

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, // this will remove any leading or trailing whitespace from the username.
            index: true // gernerally we use it when we search it by username, it will make the search faster. but heaivier to execute so use ony when needed.
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // (cloudinary url) as we take it from the cloudinary and save the url in the database.and it return in form of string.
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId, //we connect two model (video.model and user.model).
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required'] // by this we can show user custom message when the password is not provided. and also we can set the minimum length of the password by using minlength property.
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true //two field (createdAt and updatedAt) will be automatically added to the schema and will be updated whenever a document is created or updated.
    }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema) //to export this model.