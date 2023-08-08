const sgMail = require("@sendgrid/mail");
require('dotenv').config();

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    async function sendEmail(req, res) {

        try {
            await sgMail.sendMultiple({
            to: [`${req.body.email}`, 'sales@spiesscarpet.com'], // Your email where you'll receive emails
            from: "sales@spiesscarpet.com", // your website email address here
            subject: `${req.body.subject}`,
            html: `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
            <html lang="en">
                <head>
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
                  <!--[if !mso]><!-->
                  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
                  <!--<![endif]-->
                  <!--[if (gte mso 9)|(IE)]>
                  <xml>
                    <o:OfficeDocumentSettings>
                      <o:AllowPNG/>
                      <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                  </xml>
                  <![endif]-->
                  <!--[if (gte mso 9)|(IE)]>
              <style type="text/css">
                body {width: 620px;margin: 0 auto;}
                table {border-collapse: collapse;}
                table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
                img {-ms-interpolation-mode: bicubic;}
              </style>
            <![endif]-->
                  <style type="text/css">
                body, p, div {
                  font-family: arial,helvetica,sans-serif;
                  font-size: 14px;
                }
                body {
                  color: #000000;
                }
                body a {
                  color: #2F93BF;
                  text-decoration: none;
                }
                p { margin: 0; padding: 0; }
                table.wrapper {
                  width:100% !important;
                  table-layout: fixed;
                  -webkit-font-smoothing: antialiased;
                  -webkit-text-size-adjust: 100%;
                  -moz-text-size-adjust: 100%;
                  -ms-text-size-adjust: 100%;
                }
                img.max-width {
                  max-width: 100% !important;
                }
                .column.of-2 {
                  width: 50%;
                }
                .column.of-3 {
                  width: 33.333%;
                }
                .column.of-4 {
                  width: 25%;
                }
                ul ul ul ul  {
                  list-style-type: disc !important;
                }
                ol ol {
                  list-style-type: lower-roman !important;
                }
                ol ol ol {
                  list-style-type: lower-latin !important;
                }
                ol ol ol ol {
                  list-style-type: decimal !important;
                }
                @media screen and (max-width:480px) {
                  .preheader .rightColumnContent,
                  .footer .rightColumnContent {
                    text-align: left !important;
                  }
                  .preheader .rightColumnContent div,
                  .preheader .rightColumnContent span,
                  .footer .rightColumnContent div,
                  .footer .rightColumnContent span {
                    text-align: left !important;
                  }
                  .preheader .rightColumnContent,
                  .preheader .leftColumnContent {
                    font-size: 80% !important;
                    padding: 5px 0;
                  }
                  table.wrapper-mobile {
                    width: 100% !important;
                    table-layout: fixed;
                  }
                  img.max-width {
                    height: auto !important;
                    max-width: 100% !important;
                  }
                  a.bulletproof-button {
                    display: block !important;
                    width: auto !important;
                    font-size: 80%;
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                  }
                  .columns {
                    width: 100% !important;
                  }
                  .column {
                    display: block !important;
                    width: 100% !important;
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                    margin-left: 0 !important;
                    margin-right: 0 !important;
                  }
                  .social-icon-column {
                    display: inline-block !important;
                  }
                }
              </style>
                <style>
                  @media screen and (max-width:480px) {
                    table {
                      width: 480px !important;
                      }
                  }
                </style>
                  <!--user entered Head Start--><!--End Head user entered-->
                </head>
                <body>
                  <center class="wrapper" data-link-color="#2F93BF" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#f0f0f0;">
                    <div class="webkit">
                      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f0f0f0">
                        <tr>
                          <td valign="top" bgcolor="#f0f0f0" width="100%">
                            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td width="100%">
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                      <td>
                                        <!--[if mso]>
                <center>
                <table><tr><td width="620">
              <![endif]-->
                                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:620px;" align="center">
                                                  <tr>
                                                    <td role="modules-container" style="padding:0px 10px 0px 10px; color:#000000; text-align:left;" bgcolor="#F0F0F0" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                <tr>
                  <td role="module-content">
                    <p></p>
                  </td>
                </tr>
              </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="806c535f-a48e-47c3-84e1-e42f460fcd8b" data-mc-module-version="2019-10-22">
                <tbody>
                  <tr>
                    <td style="padding:5px 0px 5px 120px; line-height:12px; text-align:inherit; background-color:#f0f0f0;" height="100%" valign="top" bgcolor="#f0f0f0" role="module-content"><div><div style="font-family: inherit; text-align: right"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #9d9d9d; font-size: 10px">Email not displaying correctly? </span><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 10px; color: #c31c4c"><strong>VIEW IT</strong></span><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #9d9d9d; font-size: 10px"> in your browser.</span></div><div></div></div></td>
                  </tr>
                </tbody>
              </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:30px 0px 10px 0px;" bgcolor="#f6f6f6" data-distribution="1">
                <tbody>
                  <tr role="module-content">
                    <td height="100%" valign="top"><table width="600" style="width:600px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                  <tbody>
                    <tr>
                      <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b61e00de-19e5-4f73-9ecc-b8ea4f872e5c">
                <tbody>
                  <tr>
                    <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center"><img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:50% !important; width:50%; height:auto !important;" width="300" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/dcc09f98af33cf36/cf796185-99c7-4733-bdc0-9a72385e32b2/3266x1726.png"></td>
                  </tr>
                </tbody>
              </table></td>
                    </tr>
                  </tbody>
                </table></td>
                  </tr>
                </tbody>
              </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:50px 20px 50px 20px;" bgcolor="#3172a3" data-distribution="1">
                <tbody>
                  <tr role="module-content">
                    <td height="100%" valign="top"><table width="460" style="width:460px; border-spacing:0; border-collapse:collapse; margin:0px 50px 0px 50px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                  <tbody>
                    <tr>
                      <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63" data-mc-module-version="2019-10-22">
                <tbody>
                  <tr>
                    <td style="padding:40px 0px 30px 0px; line-height:36px; text-align:inherit; background-color:#c31c4c;" height="100%" valign="top" bgcolor="#c31c4c" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 46px; color: #ffffff; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif"><strong>Your Free Quote</strong></span></div><div></div></div></td>
                  </tr>
                </tbody>
              </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.2" data-mc-module-version="2019-10-22">
                <tbody>
                  <tr>
                    <td style="padding:50px 20px 30px 20px; line-height:25px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Hi ${req.body.firstName} ${req.body.lastName},</span></div>
            <div style="font-family: inherit; text-align: inherit"><br></div>
            <div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Here is your free quote #${req.body.quoteNumber}.</span></div>
            <div style="font-family: inherit; text-align: inherit"><br></div>
            <div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">For ${req.body.roomCount} rooms, ${req.body.stepCount} steps, ${req.body.chairCount} chairs, ${req.body.loveseatCount} loveseats, and ${req.body.couchCount} couches, your price is looking to be no more than $${req.body.totalPrice}.</span></div>
            <div style="font-family: inherit; text-align: inherit"><br></div>
            <div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Feel free to reach out to us at </span><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #2f93bf">651-472-2736</span><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565"> or </span><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #2f93bf">sales@spiesscarpet.com</span><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565"> with any questions or to schedule an appointment.</span></div>
            <div style="font-family: inherit; text-align: inherit"><br></div>
            <div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">We will be reaching out to you shortly!</span></div>
            <div style="font-family: inherit; text-align: inherit"><br></div>
            <div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565; font-size: 14px">*This price is subject to change in the case of inaccurate information or changed circumstances.</span></div><div></div></div></td>
                  </tr>
                </tbody>
              </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.1" data-mc-module-version="2019-10-22">
                <tbody>
                  <tr>
                    <td style="padding:40px 100px 50px 30px; line-height:26px; text-align:inherit; background-color:#FFFFFF;" height="100%" valign="top" bgcolor="#FFFFFF" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565; font-size: 20px">Thanks!</span></div>
            <div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565; font-size: 20px">Spiess Carpet Cleaning</span></div><div></div></div></td>
                  </tr>
                </tbody>
              </table></td>
                    </tr>
                  </tbody>
                </table></td>
                  </tr>
                </tbody>
              </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:20px 0px 1px 0px;" bgcolor="#F0F0F0" data-distribution="1">
                <tbody>
                  <tr role="module-content">
                    <td height="100%" valign="top"><table width="580" style="width:580px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                  <tbody>
                    <tr>
                      <td style="padding:0px;margin:0px;border-spacing:0;"><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#932A89; font-size:12px; line-height:22px; padding:16px 16px 5px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"><div class="Unsubscribe--addressLine"></div><p style="font-family:trebuchet ms,helvetica,sans-serif; font-size:12px; line-height:22px;"><a target="_blank" class="Unsubscribe--unsubscribeLink zzzzzzz" href="{{{unsubscribe}}}" style="color:#9D9D9D;">Unsubscribe</a></p></div><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="63b00288-52a6-4caa-9337-9e7da43b1a6f">
                  <tbody>
                    <tr>
                      <td align="center" bgcolor="" class="outer-td" style="padding:20px 0px 20px 0px;">
                        <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                          <tbody>
                            <tr>
                            <td align="center" bgcolor="#F5F8FD" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                              <a href="https://sendgrid.com/" style="background-color:#F5F8FD; border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#A8B9D5; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank">♥ POWERED BY TWILIO SENDGRID</a>
                            </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table></td>
                    </tr>
                  </tbody>
                </table></td>
                  </tr>
                </tbody>
              </table>
              </td>
                                          </tr>
                                        </table>
                                        <!--[if mso]>
                                      </td>
                                    </tr>
                                  </table>
                                </center>
                                <![endif]-->
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </center>
        </body>
      </html>`,
        });
        } catch (error) {

            console.log(error);
            return res.status(error.statusCode || 500).json({ error: error.message.body });
        }

        return res.status(200).json({ error: "" });
    }
    
    export default sendEmail;
