import { register } from 'swiper/element/bundle';
import contestHubPic1 from '../../../../assets/contesthub01.jpg';
import contestHubPic2 from '../../../../assets/contesthub02.jpg';
import contestHubPic3 from '../../../../assets/contesthub03.jpg';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
register();
const ContestHubDetailsPage = () => {
    return (
        <div className='container mx-auto mb-40 mt-16'>
            <Helmet>
                <title>ContestHub | Details Page</title>
            </Helmet>

            <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true" space-between="30"
                centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
                <swiper-slide>
                    <div className='h-[400px]'>
                        <img src={contestHubPic1} alt="...Loading" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='h-[400px]'>
                        <img src={contestHubPic2} alt="...Loading" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='h-[400px]'>
                        <img src={contestHubPic3} alt="...Loading" />
                    </div>
                </swiper-slide>

            </swiper-container>

            <div className='mt-20 max-w-7xl mx-auto border border-neutral-200 p-12 rounded-xl'>
                <div>

                    <h2 className='text-2xl font-semibold'>Website Name: ContestHUB</h2>

                    <p className='text-justify text-base mt-4 text-neutral-500'>
                        Welcome to ContestHUB, where creativity meets competition! Our mission is to provide a vibrant and engaging platform for contests of all kinds, empowering individuals to showcase their talents, compete, and win.
                    </p>

                    <h4 className='text-lg font-semibold mt-4 underline'>Our Vision:</h4>
                    <p className='text-justify text-base mt-2 text-neutral-500'>
                        We believe in the power of healthy competition to inspire excellence, foster creativity, and build a community where everyone can shine. Our platform is designed to be the ultimate destination for contest enthusiasts, whether you’re an organizer, a participant, or an administrator ensuring everything runs smoothly.
                    </p>

                </div>

                <div className='mt-6'>

                    <h4 className='text-lg font-semibold mt-4 underline'>Why Choose Us?</h4>

                    <ul className='list-disc ml-8 mt-2 text-justify text-neutral-500'>
                        <li>
                            <b>Inspiration and Creativity:</b> Our platform is a hub of inspiration, where you can discover new ideas, challenge yourself, and push your boundaries.
                        </li>
                        <li>
                            <b>Fair and Transparent:</b> We are committed to ensuring that every contest is fair, transparent, and judged with the utmost integrity.
                        </li>
                        <li>
                            <b>Community and Support:</b> Join a community of like-minded individuals who share your passion for competition and creativity. Our support team is always here to help you along the way.
                        </li>
                        <li>
                            <b>Opportunities to Shine:</b> Whether you are a contest creator or a participant, our platform offers countless opportunities to showcase your talents and gain recognition.
                        </li>
                    </ul>

                </div>

                <div className='mt-6'>

                    <h4 className='text-lg font-semibold mt-4 underline'>Features and Characteristics:</h4>

                    <ul className='list-disc ml-8 mt-2 text-justify text-neutral-500'>
                        <li>
                            <b>User Roles and Access Levels:</b> Distinct roles for Admins, Contest Creators, and Users to ensure a tailored experience for each type of participant.
                        </li>
                        <li>
                            <b>Seamless Contest Creation:</b> Easy-to-use tools for contest creators to design, launch, and manage contests with custom rules, submission formats, and deadlines.
                        </li>
                        <li>
                            <b>Secure Payment Processing with Stripe:</b> Safe and reliable payment gateway through Stripe, allowing for smooth transactions and prize distributions.
                        </li>
                        <li>
                            <b>User-Friendly Interface:</b> Intuitive design and navigation make it easy for users to participate in contests, view submissions, and track their progress.
                        </li>
                        <li>
                            <b>Robust Admin Dashboard:</b> Comprehensive admin dashboard for monitoring site activity, managing user accounts, and ensuring the integrity and fairness of contests.
                        </li>
                        <li>
                            <b>Advanced Security Measures:</b> Ensures the protection of user data and transactions with top-notch security protocols.
                        </li>
                        <li>
                            <b>Mobile-Optimized Experience:</b> Fully responsive design, ensuring a seamless experience across all devices, so users can participate in contests from anywhere.
                        </li>
                        <li>
                            <b>Customizable Contest Templates:</b> Pre-designed templates that contest creators can customize to fit the theme and requirements of their specific contests.
                        </li>
                        <li>
                            <b>User Profile Customization:</b> Rich user profiles that can be personalized with avatars, bios, and links to social media accounts or personal websites.
                        </li>
                    </ul>

                </div>

                <div className='mt-6'>
                    <h4 className='text-lg font-semibold mt-4 underline'>Timeline Visualization Feature Overview:</h4>
                    <ul className='list-disc ml-8 mt-2 text-justify text-neutral-500'>
                        <li>
                            Provides a clear overview of active and past contests.
                        </li>
                        <li>
                            Helps users track contest timelines and deadlines.
                        </li>
                        <li>
                            Enhances user engagement and participation in contests.
                        </li>

                    </ul>
                </div>

                <div className='mt-6'>
                    <Link className='btn-link' to='https://github.com/rion247/contestHub' target='_blank'>GitHub Code Link</Link>
                </div>

            </div>
        </div>
    );
};

export default ContestHubDetailsPage;