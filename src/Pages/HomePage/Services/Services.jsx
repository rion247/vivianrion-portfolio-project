import uiUXPic from '../../../assets/ui.png';
import webDevelopmentPic from '../../../assets/programming.png'
import { Element } from 'react-scroll';


const Services = () => {
    return (
        <Element className="mb-24" name='services'>

            <h2 className="text-center text-5xl font-bold mb-8">My Quality Services</h2>

            <p className="text-center max-w-5xl text-neutral-500 mx-auto mb-8">
                Whether you are looking to build a dynamic website, a seamless user interface, or a robust web application, I am here to bring your vision to life. With a passion for clean code and an eye for design, I deliver solutions that not only meet your needs but exceed your expectations.
            </p>

            <div className='max-w-5xl mx-auto mt-20'>
                <div className='border border-neutral-200 p-12 rounded-2xl flex justify-between gap-x-12 items-center my-10 '>

                    <img className='w-32 h-32' src={uiUXPic} alt="...Loading" />

                    <div>
                        <h4 className='text-2xl font-bold mb-6'>UI/UX Design</h4>
                        <p className='text-justify text-neutral-500'>
                            In todays digital world, the user experience is everything. I specialize in creating intuitive, engaging, and aesthetically pleasing interfaces that not only look great but also provide a seamless experience for your users. By understanding your users needs and behaviors, I design solutions that drive engagement, increase satisfaction, and deliver real results.
                        </p>
                    </div>

                </div>

                <div className='border border-neutral-200 p-12 rounded-2xl flex justify-between gap-x-12 items-center my-10 '>

                    <img className='w-32 h-32' src={webDevelopmentPic} alt="...Loading" />

                    <div>
                        <h4 className='text-2xl font-bold mb-6'>Web Development</h4>
                        <p className='text-justify text-neutral-500'>
                            In the fast-paced world of technology, a robust and efficient web presence is essential. I specialize in developing high-quality, responsive, and scalable websites and web applications. With a focus on clean code and modern best practices, I ensure that your online platform is not only visually appealing but also performs seamlessly across all devices.
                        </p>
                    </div>

                </div>
            </div>

        </Element>
    );
};

export default Services;