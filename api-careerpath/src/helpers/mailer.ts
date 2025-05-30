import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_HOST || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendPasswordResetEmail = async (
  email: string,
  resetToken: string
) => {
  const resetUrl = `${
    process.env.EMAIL_FROM_NAME || "careerpath.com"
  }/reset?token=${resetToken}`;

  return transporter.sendMail({
    from: `"${process.env.EMAIL_FROM_NAME || "Career Path"}" <${
      process.env.EMAIL_FROM_ADDRESS || "noreply@careerpath.com"
    }>`,
    to: email,
    subject: "Password Reset for Career Path",
    text: "",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Reset Your Password</h2>
            <p>Hello,</p>
            <p>You requested to reset your password. Please click on the button below to reset your password:</p>
            <p style="text-align: center;">
            <a href="${resetUrl}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Reset Password</a>
            </p>
            <p>Or copy and paste this link in your browser:</p>
            <p>${resetUrl}</p>
            <p>This link is valid for 15 minutes.</p>
            <p>If you didn't request this, please ignore this email.</p>
            <p>Regards,<br>The Career Path Team</p>
        </div>
    `,
  });
};

export const sendNotificationEmail = async () => {};

export const sendWelcomeEmail = async (
  email: string,
  validationToken: string
) => {
  const verifyURL = `http://localhost:5173/auth/verify?token=${validationToken}`;

  return transporter.sendMail({
    from: `"${process.env.EMAIL_FROM_NAME || "Career Path"}" <${
      process.env.EMAIL_FROM_ADDRESS || "noreply@careerpath.com"
    }>`,
    to: email,
    subject: "Account Email Verification for Career Path",
    text: `Verify your Email Address

          Hello,

          You have signed up for an account on Careerpath.com. Please follow the link below to verify your email address and access the site.

          ${verifyURL}

          This link is valid for 15 minutes.

          If you didn't request this, please ignore this email.

          Regards,
          The Career Path Team`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Verify your Email Address</h2>
          <p>Hello,</p>
          <p>You have signed up for an account on Careerpath.com. Please follow the link to verify your email address and access the site.</p>
          <p style="text-align: center;">
          <a href="${verifyURL}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Verify Email</a>
          </p>
          <p>Or copy and paste this link in your browser:</p>
          <p>${verifyURL}</p>
          <p>This link is valid for 15 minutes.</p>
          <p>If you didn't request this, please ignore this email.</p>
          <p>Regards,<br>The Career Path Team</p>
      </div>
  `,
  });
};
