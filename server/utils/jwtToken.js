import ErrorHandler from "../Middlewares/error.js";

export const generateToken = (message, statusCode, user, res) => {
    const token = user.generateToken();

    if(!token){
        return next(new ErrorHandler("Failed To registered",400))
    }

    res.status(statusCode).cookie("token", token, { expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
         httpOnly: true }).json({
        success: true,
        message: message,
        token,
        user
    })
}