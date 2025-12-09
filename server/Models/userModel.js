import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import validator from "validator"

const userSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true,
        minLength:[2,"Minimum 2 Character Required in Name"]
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim:true,
        validate:[validator.isEmail,"Please Provide Valid Email"]
    },
    password:{
        type:String,
        required:true,
        select:false,
        minLength:[8,"Password mmust contain at least 8 characters!"]
    },
    role:{
        type:String,
        required:true,
        enum:["admin","manager","developer"]
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,

    createdAt:{
        type:Date,
        default:Date.now()
    }
})

userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
       return next();
    }
   this.password = await bcrypt.hash(this.password,10);
   next();
})

userSchema.methods.comparePassword = async function(enteredPassword){
 return await bcrypt.compare(enteredPassword,this.password);
}

userSchema.methods.generateToken = function(){
   return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES
    })
}

userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}

export const userModel = mongoose.model("Users",userSchema);
