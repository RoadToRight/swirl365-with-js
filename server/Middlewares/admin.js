import ErrorHandler from "./error.js"

export const adminCheck = () => {
    if(req.user.admin !== "admin") return next(new ErrorHandler("Unauthorized Access",403))
       
    next();    

}