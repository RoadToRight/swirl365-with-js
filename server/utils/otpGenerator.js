export const OtpGenerator = () => {

    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let OTP;
    for (let i = 0; i <= 5; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length)
        OTP = chars[randomIndex]
    }
    return OTP;
}