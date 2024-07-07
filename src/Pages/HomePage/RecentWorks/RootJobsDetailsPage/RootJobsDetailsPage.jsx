import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import rootJobsPic1 from '../../../../assets/rootJobs1.jpg';
import rootJobsPic2 from '../../../../assets/rootJobs02.jpg';
import rootJobsPic3 from '../../../../assets/rootJobs3.jpg';
import { register } from 'swiper/element/bundle';
register();


const RootJobsDetailsPage = () => {
    return (
        <div className='container mx-auto mb-40 mt-16'>
            <Helmet>
                <title>RootJobs | Details Page</title>
            </Helmet>

            <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true" space-between="30"
                centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
                <swiper-slide>
                    <div className='h-[400px]'>
                        <img src={rootJobsPic1} alt="...Loading" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='h-[400px]'>
                        <img src={rootJobsPic2} alt="...Loading" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='h-[400px]'>
                        <img src={rootJobsPic3} alt="...Loading" />
                    </div>
                </swiper-slide>

            </swiper-container>

            <div className='mt-20 max-w-7xl mx-auto border border-neutral-200 p-12 rounded-xl'>
                <div>

                    <h2 className='text-2xl font-semibold'>Website Name: Root Jobs</h2>

                    <p className='text-justify text-base mt-4 text-neutral-500'>
                        Welcome to Root Jobs! – your gateway to a world of opportunities!

                        Embark on your career journey with us as we connect you to a plethora of exciting job openings tailored to your skills, interests, and aspirations. Whether you are a seasoned professional seeking new horizons or a fresh graduate ready to make your mark, our platform is designed to empower you at every step of your job search.

                        Browse through our curated listings, explore diverse industries, and discover positions that align with your career goals. With intuitive search features and personalized recommendations, finding your dream job has never been easier.

                        But we are more than just a job board – we are your trusted companion on the path to success. From expert career advice and interview tips to resume optimization tools, we are here to equip you with the resources you need to stand out in todays competitive market.

                        So, what are you waiting for? Dive in, explore, and lets embark on this journey together. Your next career milestone awaits – seize it with Root Jobs!
                    </p>

                </div>

                <div className='mt-6'>

                    <h4 className='text-lg font-semibold mt-4 underline'>Features and Characteristics:</h4>

                    <ul className='list-disc ml-8 mt-2 text-justify text-neutral-500'>
                        <li>
                            <b>User Profiles:</b> Allow users to create profiles where they can upload their resumes, set job preferences, and track their job application history.
                        </li>
                        <li>
                            <b>Job Search and Filters:</b> Provide robust search functionality with filters such as location, industry, experience level, and job type to help users find relevant job listings efficiently.
                        </li>
                        <li>
                            <b>Application Tracking:</b> Enable users to track the status of their job applications, including which applications they have submitted, their interview schedule, and any follow-up actions required.
                        </li>
                        <li>
                            <b>Feedback and Reviews:</b> Allow users to leave feedback and reviews on their job application experiences, helping to inform other users and improve the overall quality of job listings on your platform.
                        </li>
                        <li>
                            <b>Responsive Design:</b> Our website is optimized for various devices including laptops, desktops, mobiles and tablets, providing a seamless user experience across all platforms.
                        </li>
                    </ul>

                </div>

                <div className='mt-6'>
                    <Link className='btn-link' to='https://github.com/rion247/batch-09-assignment-11?tab=readme-ov-file' target='_blank'>GitHub Code Link</Link>
                </div>

            </div>
        </div>
    );
};

export default RootJobsDetailsPage;