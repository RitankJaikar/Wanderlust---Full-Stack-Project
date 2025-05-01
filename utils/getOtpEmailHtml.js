// otpTemplate.js

exports.getOtpEmailHtml = function(otp) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wanderlust Email Verification</title>
      </head>
      <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 40px 0;">
          <tr>
            <td align="center">
              <table width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 20px; text-align: center;">
                    <img src="https://cdn.prod.website-files.com/6731eb232fcc314baee41b00/680eeaf3a6e2215a3a5c7fc1_ChatGPT%20Image%20Apr%2028%2C%202025%2C%2007_49_00%20AM%201.png" alt="Wanderlust Logo" width="120" style="margin-bottom: 16px;" />
                    <h2 style="margin: 0; color: #333;">Welcome to <span style="color: #fe424d;">Wanderlust!</span></h2>
                  </td>
                </tr>
  
                <tr>
                  <td style="padding: 0 32px 20px 32px; text-align: center;">
                    <p style="font-size: 16px; color: #555;">
                      Use the OTP below to verify your email address and start your travel journey with us.
                    </p>
                    <div style="font-size: 28px; font-weight: bold; color: #fe424d; margin: 20px 0;">
                        ${otp}
                    </div>
                    <p style="font-size: 14px; color: #888;">
                      This OTP is valid for the next 10 minutes. Do not share it with anyone.
                    </p>
                  </td>
                </tr>
  
                <tr>
                  <td style="padding: 20px 32px; text-align: center;">
                    <a href="https://explore-wanderlust.vercel.app/listings" target="_blank" style="background-color: #fe424d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 16px;">
                        Visit Wanderlust
                    </a>                     
                  </td>
                </tr>
  
                <tr>
                  <td style="padding: 20px 32px; text-align: center; font-size: 12px; color: #aaa;">
                    If you did not request this, please ignore this email.
                  </td>
                </tr>
  
                <tr>
                  <td style="padding: 12px 32px; text-align: center; font-size: 12px; color: #ccc;">
                    © ${new Date().getFullYear()} Wanderlust. All rights reserved.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `;
};

module.exports = getOtpEmailHtml;