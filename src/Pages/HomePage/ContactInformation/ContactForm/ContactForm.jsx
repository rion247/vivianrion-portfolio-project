import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_csddsxb', 'template_dfdhpwn', form.current, {
                publicKey: 'YjjssF_Hr1q75SP-X',
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    toast('Message sent successfully. Thank you!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>

            <h2 className="text-start text-5xl font-bold mb-8">Let’s work together!</h2>

            <p className="text-start text-neutral-500 mx-auto mb-10">
                Whether you have a project in mind, need some advice, or just want to say hello, do not hesitate to reach out. Your ideas and feedback are invaluable to me.
            </p>

            <form ref={form} onSubmit={sendEmail}>
                <label className="block text-sm md:text-base xl:text-lg">Your Name</label>
                <input type="text" name="user_name" placeholder="Enter Your Full Name" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" required
                /><br />
                <label className="block text-sm md:text-base xl:text-lg mt-4">Email</label>
                <input type="email" name="user_email" placeholder="Enter Your Full Name" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" required
                /><br />
                <label className="block text-sm md:text-base xl:text-lg mt-4">Message</label>
                <textarea name="message" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" required /><br />
                <input type="submit" value="Send" className='w-full mt-4 cursor-pointer px-8 py-3 font-medium rounded-md bg-sky-500 hover:bg-sky-400 text-white text-sm md:text-base lg:text-lg text-center flex justify-center ' />
            </form>

        </div>
    );
};

export default ContactForm;