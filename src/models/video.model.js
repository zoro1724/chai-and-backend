import mongoose, {Schema} from "mongoose";//here now we create video model.

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; //by this we can use pagination in our video model. as we have to show the videos in the home page and also in the search page. so by this we can show the videos in the paginated form.
// by using this we can now use agregate pipeline in our model.

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, //it also will extarct from (cloudinary) if we use it and return in form of number.
            required: true
        },
        views: {
            type: Number,
            default: 0 //as by default it will zero.
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    }, 
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate) //by this we can use pagination in our video model. as we have to show the videos in the home page and also in the search page. so by this we can show the videos in the paginated form.

export const Video = mongoose.model("Video", videoSchema)