import { Element } from 'react-scroll';
import pictureofMine from '../../../assets/gitProfilePic.png';
const Banner = () => {
    return (
        <Element name='resume' className="w-full h-auto bg-sky-950 text-white mb-40 p-20">

            <div className="container mx-auto flex justify-center items-center">

                <div className='w-2/5 flex flex-col justify-center items-center'>

                    <div className='border-8 border-orange-800 p-2 rounded-full'>

                        <img className='w-80 h-auto' src={pictureofMine} alt="...Loading" />


                    </div>


                    <div className='mt-6 text-center'>
                        <h4 className='text-3xl font-semibold '>Vivian Rion Marandi</h4>
                        <h4 className='text-xl font-light mt-2 italic'>Junior Web Developer</h4>
                    </div>

                </div>

                <div className='w-3/5 text-sky-50 text-base font-extralight  text-justify'>

                    <div>
                        <p>
                            Hello! I’m Vivian Rion Marandi, expert for crafting highly engaging web interfaces and scalable applications that stand out in today’s fast-paced digital era.
                            As a passionate web developer, I specialize in creating dynamic and visually appealing websites and applications. My journey in web development began with a strong foundation in HTML, CSS, and JavaScript, and has since evolved to encompass a wide array of modern technologies and frameworks.
                        </p>
                        <br />
                        <p>
                            Teams are the backbone of any project, and I thrive when collaborating. Each project in my portfolio highlights a journey from conceptualization to a visually and functionally robust web application. These ventures into the digital space consistently reflect my commitment to quality and my relentless drive to improve and adapt to the evolving tech landscape.
                        </p>
                        <br />
                        <p>
                            Innovation is at the heart of all I do. I am constantly updating my skills and tools to stay ahead of industry trends ensuring that every project is not just current but leading edge. My work ethic revolves around meticulous attention to detail and an unwavering commitment to delivering superior results.
                        </p>
                        <br />
                        <p>
                            I take great delight in turning ideas into reality, transforming complex challenges into user-friendly solutions. If you’re on the lookout for someone who can translate your needs into impactful digital experiences, let’s connect and explore the digital possibilities together!
                        </p>
                    </div>

                </div>

            </div>

        </Element>
    );
};

export default Banner;