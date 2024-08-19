// asyncHandler.js
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        const err = error || new Error('Unknown error');
        res.status(err.status || 500).json({
            success: false,
            message: err.message,
        });
    }
};

export default asyncHandler;


//same above code but using promisess
/*

const asyncHandler = (requestHandler) =>{
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}

*/