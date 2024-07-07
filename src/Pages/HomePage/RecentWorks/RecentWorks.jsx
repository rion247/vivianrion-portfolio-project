import { Link } from "react-router-dom";
import contestHubPicture from '../../../assets/thumblinecontest.jpg';
import rootJobsPicture from '../../../assets/rootJobs.jpg';
import artAndCraftPicture from '../../../assets/artcraftsotre.jpg';
import { Element } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const RecentWorks = () => {
    return (
        <Element className="my-32" name="works" >

            <h2 className="text-center text-5xl font-bold mb-8">My Recent Works</h2>

            <p className="text-center max-w-5xl text-neutral-500 mx-auto mb-20">
                Each project I undertake is a testament to my commitment to quality and creativity. My recent work reflects my passion for solving problems, pushing boundaries, and delivering solutions that make a difference. From sleek and responsive web applications to user-centric designs.
            </p>

            <div className="grid grid-cols-3">
                {/* contestHub */}
                <div className="max-w-md p-6 rounded-md shadow-md text-gray-900" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="relative">

                        <img src={contestHubPicture} alt="...Loading" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />

                        <div className="absolute top-12 left-20 rounded-md p-16 bg-sky-100 bg-opacity-20 border border-white">

                            <div className="text-base  text-center text-white">

                                <h6 >Website Name:</h6>
                                <h6>ContestHUB</h6>

                            </div>

                        </div>

                    </div>


                    <div className="mt-6 mb-2">
                        <h2 className="text-xl font-semibold tracking-wide">Contest Platform</h2>
                    </div>

                    <p className="text-neutral-500 text-sm text-justify ">Welcome to ContestHUB, where creativity meets competition! Our mission is to provide a vibrant and engaging platform for contests of all kinds, empowering individuals to showcase their talents, compete, and win.</p>

                    <Link className="bg-sky-950 hover:bg-sky-900 text-white btn w-full mt-4" to='contestHUB/detailsPage'>Learn More</Link>
                    <Link target="_blank" className="text-center btn-link mt-6 block" to='https://contesthub-3c08f.web.app'>Visit Live Site</Link>
                </div>
                {/* rootJobs */}
                <div className="max-w-md p-6 rounded-md shadow-md text-gray-900" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div>
                        <img src={rootJobsPicture} alt="...Loading" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    </div>

                    <div className="mt-6 mb-2">
                        <h2 className="text-xl font-semibold tracking-wide">Job Seeking Platform</h2>
                    </div>

                    <p className="text-neutral-500 text-sm text-justify ">Browse through our curated listings, explore diverse industries, and discover positions that align with your career goals. With intuitive search features and personalized recommendations.</p>

                    <Link className="bg-sky-950 hover:bg-sky-900 text-white btn w-full mt-4" to='contestHUB/detailsPage'>Learn More</Link>
                    <Link target="_blank" className="text-center btn-link mt-6 block" to='https://rootjobs-944e5.web.app'>Visit Live Site</Link>
                </div>
                {/* art and craft store */}
                <div className="max-w-md p-6 rounded-md shadow-md text-gray-900" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div>
                        <img src={artAndCraftPicture} alt="...Loading" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    </div>

                    <div className="mt-6 mb-2">
                        <h2 className="text-xl font-semibold tracking-wide">Art and Craft Store</h2>
                    </div>

                    <p className="text-neutral-500 text-sm text-justify ">Our mission is to empower and inspire creativity in everyone. We believe that art and craft have the power to bring joy, reduce stress, and connect people. We are dedicated to providing you with the resources.</p>

                    <Link className="bg-sky-950 hover:bg-sky-900 text-white btn w-full mt-4" to='contestHUB/detailsPage'>Learn More</Link>
                    <Link target="_blank" className="text-center btn-link mt-6 block" to='https://art-and-craft-store-c95fe.web.app'>Visit Live Site</Link>
                </div>
            </div>

        </Element>
    );
};

export default RecentWorks;