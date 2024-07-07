import locationPic from '../../../assets/location.png';
import phonePic from '../../../assets/telephone.png';
import mailPic from '../../../assets/mail.png';
import ContactForm from './ContactForm/ContactForm';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const ContactInformation = () => {
    return (
        <Element className="mb-32 flex justify-between items-center" name='contact' data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">

            <div className='w-1/2'>
                <ContactForm />
            </div>

            <div>

                <div className='flex gap-x-7 items-center my-8'>

                    <img className='w-12 h-12' src={locationPic} alt="...Loading" />

                    <div>

                        <h4 className='text-lg font-semibold'>House/Holding:</h4>

                        <h4 className=''> 1779-04; YMCA Bhaban; P.O: 70; Bhai Pagla Mazar Lane; <br />Sherpur Road; Malotinagar; Bogura Sadar; Bogura-5800.</h4>

                    </div>

                </div>

                <div className='flex gap-x-7 items-center my-8'>

                    <img className='w-12 h-12' src={mailPic} alt="...Loading" />

                    <div>

                        <h4 className='text-lg font-semibold'>Email Address:</h4>

                        <h4 className=''> vivianrionmarandi@gmail.com</h4>

                    </div>

                </div>

                <div className='flex gap-x-7 items-center my-8'>

                    <img className='w-12 h-12' src={phonePic} alt="...Loading" />

                    <div>

                        <h4 className='text-lg font-semibold'>Phone Number:</h4>

                        <h4 className=''> +880-1717-626888</h4>

                    </div>

                </div>

            </div>

        </Element>
    );
};

export default ContactInformation;