//here we use promise but we can also use the async await method but we have to use try catch method to handle error in async await method.
//but in promise we can directly use catch method to handle error and also we can use then method to handle success response in promise.
//but in async await we have to use try catch method to handle both success and error response.


//we are writing this becuse sometime if any eror occur while handling the request then we always have to write try catch block in every request handler to handle the error. 
//and it is not a good practice to write try catch block in every request handler so we are writing this asyncHandler function to handle the error.
//in a better way and we can use this asyncHandler function in every request handler to handle the error in a better way.

const asyncHandler = (requestHandler) => {
    return (req, res, next) => { //next is used to pass the error to the error handling middleware in express
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

//async await method 

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }