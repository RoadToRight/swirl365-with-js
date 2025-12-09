import { userModel } from "../Models/userModel.js";
import { catchAsyncErrors } from "../utils/asyncHandler.js";
import ErrorHandler from "./error.js";

export const auth = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler("Please Login", 401))
    }

    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let user = await userModel.findById(decoded.id);
      if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
 
    req.user = user;
    next();
});


