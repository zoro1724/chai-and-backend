//to handle all the errors in the application and send a response to the client with the error message and status code

class ApiError extends Error { //using extends keyword to inherit the properties and methods of the Error class in JavaScript

    constructor( //constructor is a special method that is called when an instance of the class is created
        statusCode, //status code is the HTTP status code that we want to send in the response
        message= "Something went wrong", //message is the error message that we want to send in the response
        errors = [], //errors is an array of error objects that we want to send in the response
        stack = "" //stack is the stack trace of the error that we want to send in the response, it is optional and if it is not provided then we will capture the stack trace using Error.captureStackTrace method
    ){
        super(message) //super keyword is used to call the constructor of the parent class, in this case it is the Error class, and we are passing the message parameter to the constructor of the Error class to set the message property of the error object
        this.statusCode = statusCode //setting the statusCode property of the error object to the statusCode parameter that we are passing in the constructor
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}