import ErrorHandler from "../Middlewares/error.js";
import { userModel } from "../Models/userModel.js";
import { catchAsyncErrors } from "../utils/asyncHandler.js";
import { emailSender } from "../utils/email.js";
import { generateToken } from "../utils/jwtToken.js";

export const createUser = catchAsyncErrors(async (req, res, next) => {

    const { name, age, email, password, role } = req.body;
    if (!email || !age || !name || !role || !password) {
        return next(new ErrorHandler("Please Give Complete Details"))
    }

    let User = await userModel.findOne({ email });


    if (User) {
        return next(new ErrorHandler("Email is already registered!", 400))
    }
    User = await userModel.create({ name, age, email, password, role })
    generateToken("User Created Successfully!", 201, User, res)

})

export const deleteUser = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return next(new ErrorHandler("User ID is required", 400));
    }

    let User = await userModel.findByIdAndDelete(id)
    if (!User) return next(new ErrorHandler("User Not Found", 404));


    res.status(200).json({
        success: true,
        message: "User Deleted Successfully"
    })
})

export const updateUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, role, age } = req.body;

    if (!email || !age || !name || !role) return next(new ErrorHandler("Please Give Complete Details"));

    let updatedUser = await userModel.findOneAndUpdate({ email: email }, { name, email, role, age }, { new: true, runValidators: true });
    if (!updatedUser) return next(new ErrorHandler("User Not Found", 404))
    res.status(200).json({
        success: true,
        message: "User Updated Successfully!",
        user: updatedUser
    })

})

export const getUsers = catchAsyncErrors(async (req, res, next) => {
    let users = await userModel.find({});
    res.json({
        success: true,
        users: users
    })
})


export const loggedOut = catchAsyncErrors(async () => {
    res.cookie("token", "", {
        expire: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Logged Out Successfully"
    })
})

export const LoggedIn = catchAsyncErrors(async () => {
    const { email, password } = req.body;
    if (!email || !password) return next(new ErrorHandler("Please Give Complete Details", 400));

    let user = await userModel.findOne({ email });

    if (!user) return next(new ErrorHandler("Email or Password is incorrect", 401))

    let isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) return next(new ErrorHandler("Email or Password is incorrect", 401))

    generateToken("User Logged In", 200, user, res)
})

// export const OtpSender = catchAsyncErrors(async (req, res, next) => {
//     const { email } = req.body;

//     const user = await userModel.findOne({ email })

//     if (!user) {
//         return next(new ErrorHandler("User Not Found", 404))
//     }

//     const Otp = OtpGenerator();

//     try {
//         await emailSender(email, "Otp For Reset Password", `Your Otp is \n ${Otp} \n expire in 15 min`);
//         user.Otp = Otp;
//         user.OtpExpire = new Date(Date.now() * 15 * 60 * 1000)
//         user.save();
//         res.status(200).json({
//             success: true,
//             message: "Email Sent Successfully!"
//         })
//     } catch (error) {
//         user.Otp = undefined;
//         user.OtpExpire = undefined;
//         await user.save();
//     }

// })

export const forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const { email } = req.body;
    if (!email) return next(new ErrorHandler("Please Enter Your Email", 400));
    let user = await userModel.findOne({ email });
    if (!user) return next(new ErrorHandler("User Not Found", 404));
    const resetToken = await user.getResetPasswordToken();
    // await user.save({validateBeforeSave:false})
    const resetPasswordUrl = `${process.env.DASHBOARD_URL}/password/reset/${resetToken}`;


    try {
        await emailSender(email, "Reset Password Token", `click to reset password \n ${resetPasswordUrl}`);
        res.status(200).json({
            success: true,
            message: "Email Sent Successfully!"
        })
    } catch (error) {
        user.resetPasswordExpire = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();
    }

})

export const resetPassword = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.params;
    const { newPassword, confirmPassword } = req.body;
    const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex")
    const user = await userModel.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (newPassword !== confirmPassword) {
        return next(new ErrorHandler("Passwords Not Matched!"))
    }

    if (!user) {
        return next(new ErrorHandler("Token is Invalid", 401))
    }

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();


    res.status(200).json({
        success: true,
        message: "Password Changed Successfully!"
    })

})