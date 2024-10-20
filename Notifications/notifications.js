const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // user: "opencommunitytest@gmail.com",
    // pass: "opencommunity123",

    user: "color6wrld@gmail.com",
    pass: "gyva yaxg ddia ouns",
  },
});
const notifyCommunityOfEventChange = (users, communityName) => {
  users.forEach((email) => {
    //const { name, email } = person;

    // Customize the email message for each person with HTML content
    const mailOptions = {
      from: "color6wrld@gmail.com",
      to: email,
      subject: `Notification: ${communityName} Edited `,
      html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                  <h2 style="color: #bcd727;">Hey there, </h2>
                  <p> A change was made to an event in ${communityName}.</p>
               
                  <p style="margin-top: 20px;">
                    <a href="https://localhost:3000/Home/community/sfjNQtaUvxfoDNCFacvn" 
                       style="
                         background-color: #bcd727;
                         color: white;
                         padding: 10px 20px;
                         text-decoration: none;
                         border-radius: 5px;
                         display: inline-block;
                         font-weight: bold;
                       ">
                       Visit the Community Page
                    </a>
                  </p>
                  <p>If you have any questions, feel free to reply to this email.</p>
                  <p>Best regards,<br>The Admin</p>
                </div>
              `,
    };

    // Assuming 'transporter' is already configured and available in your scope
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error(`Error sending email to ${email}:`, error);
      }
      console.log(`Email sent to ${email}: ${info.response}`);
    });
  });
};

const notifyMembersOfInactiveCommunity = (users, communityName) => {
  users.forEach((email) => {
    //const { name, email } = person;

    // Customize the email message for each person with HTML content
    const mailOptions = {
      from: "color6wrld@gmail.com",
      to: email,
      subject: `Notification: ${communityName} Inactive `,
      html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                  <h2 style="color: #bcd727;">Hey there, </h2>
                  <p>  ${communityName} has been inactive for more than 28 days. Please try to engage with the community</p>
               
                  <p style="margin-top: 20px;">
                    <a href="https://localhost:3000/Home/community/sfjNQtaUvxfoDNCFacvn" 
                       style="
                         background-color: #bcd727;
                         color: white;
                         padding: 10px 20px;
                         text-decoration: none;
                         border-radius: 5px;
                         display: inline-block;
                         font-weight: bold;
                       ">
                       Visit the Community Page
                    </a>
                  </p>
                  <p>If you have any questions, feel free to reply to this email.</p>
                  <p>Best regards,<br>The Admin</p>
                </div>
              `,
    };

    // Assuming 'transporter' is already configured and available in your scope
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error(`Error sending email to ${email}:`, error);
      }
      console.log(`Email sent to ${email}: ${info.response}`);
    });
  });
};

const notifyRsvpdUsersOfEventChange = (rsvpd_users, eventName, communityID) => {
  rsvpd_users.forEach((person) => {
    const { name, email } = person;

    // Customize the email message for each person with HTML content
    const mailOptions = {
      from: "color6wrld@gmail.com",
      to: email,
      subject: `Notification: Event - ${eventName} Edited`,
      html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
              <h2 style="color: #bcd727;">Hey ${name},</h2>
          
                <p> A change was made to ${eventName}.</p>
               
              <p>For more information about the event, please click the button below.</p>
              <p style="margin-top: 20px;">
                <a href="https://localhost:3000/Home/community/${communityID}" 
                   style="
                     background-color: #bcd727;
                     color: white;
                     padding: 10px 20px;
                     text-decoration: none;
                     border-radius: 5px;
                     display: inline-block;
                     font-weight: bold;
                   ">
                   Visit Community Page.
                </a>
              </p>
              <p>If you have any questions, feel free to post on the community chat.</p>
                  <p style="margin-top: 20px;">
                <a href="https://localhost:3000/Home/community/sfjNQtaUvxfoDNCFacvn" 
                   style="
                     background-color: #0000FF;
                     color: white;
                     padding: 10px 20px;
                     text-decoration: none;
                     border-radius: 5px;
                     display: inline-block;
                     font-weight: bold;
                   ">
                   Commmunity Chat.
                </a>
              </p>
              <p>Best regards,<br>The Admin</p>
            </div>
          `,
    };

    // Assuming 'transporter' is already configured and available in your scope
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error(`Error sending email to ${email}:`, error);
      }
      console.log(`Email sent to ${email}: ${info.response}`);
    });
  });
};

module.exports = {
  notifyCommunityOfEventChange,
  notifyRsvpdUsersOfEventChange,
  notifyMembersOfInactiveCommunity,
};
