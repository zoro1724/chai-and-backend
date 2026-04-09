//as we create apierror class to handle errors, we can also create apiresponse class to handle success responses
//this is professional way to handle the response and error in the application and send a response to the client with the message, data and status code.

class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }