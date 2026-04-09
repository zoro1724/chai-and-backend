import express from 'express';

//////////////////////////////// this codebase important for purpose of security and performance of our application
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//cors helps to It allows your backend to accept requests from a different domain or port.
//cross origin resource sharing.

app.use(cors({ //(use) is used to allow the use of middleware.

    origin: process.env.CORS_ORIGIN, //this is the url of frontend which is allowed to access backend and we declare it in env file. for development we can use * but for production we have to write url of frontend
    //example: http://localhost:3000 or https://myfrontend.com

    credentials: true //this is used to allow cookies to be sent in cross-origin requests. if we set it to true then we can send cookies in cross-origin requests otherwise we can't send cookies in cross-origin requests.
}))

app.use(express.json({limit: "16kb"})) //for json data and we also set the limit to avoid large payloads that can cause performance issues or security vulnerabilities. the limit is set to 16kb but you can adjust it according to your needs.
app.use(express.urlencoded({extended: true, limit: "16kb"})) //as sometime url in the format of some values like name=ritesh&age=24&city=delhi so we use urlencoded.
app.use(express.static("public"))// this is used to serve static files like images, css, js etc. from the public folder. so we can access these files from the url like http://localhost:8000/images/logo.png if we have logo.png in the public/images folder.
app.use(cookieParser())// this is used to parse cookies from the request headers and make them available in the req.cookies object. so we can access cookies from the url like http://localhost:8000 and we can see the cookies in the browser's developer tools.

////////////////////////////////////

export {app}