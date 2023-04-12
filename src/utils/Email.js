import emailjs from "@emailjs/browser";

export const sendEmail = (user_email, user_message, subject) => {
  var templateParams = {
    user_email,
    subject,
    user_message
  };

  emailjs
    .send(
      "service_vd8pw2a",
      "template_ro9ntr8",
      templateParams,
      "zpuE0UkCi1W220WpE"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
