import emailjs from '@emailjs/browser';


const SendEmail = (nominnee_email, contract_creator_email) => {    
    var templateParams = {
        user_email:nominnee_email,
        contract_creator:contract_creator_email,
        subject:"addition of Nominnee",
        name: 'James',
        notes: 'Check this out!'
    };
    
    emailjs.send('service_vd8pw2a', 'template_ro9ntr8', templateParams, 'zpuE0UkCi1W220WpE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};
        

export { SendEmail };