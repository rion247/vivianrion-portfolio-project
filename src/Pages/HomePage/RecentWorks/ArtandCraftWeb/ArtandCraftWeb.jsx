import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { register } from 'swiper/element/bundle';
register();
import craftPlanetPic01 from '../../../../assets/craftplanet01.jpg';
import craftPlanetPic02 from '../../../../assets/craftplanet02.jpg';
import craftPlanetPic03 from '../../../../assets/craftplanet03.jpg';

const ArtandCraftWeb = () => {
    return (
        <div className='container mx-auto mb-40 mt-16'>
            <Helmet>
                <title>Craft Planet | Details Page</title>
            </Helmet>

            <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true" space-between="30"
                centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
                <swiper-slide>
                    <div className='h-[400px]'>
                        <img src={craftPlanetPic01} alt="...Loading" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='h-[400px]'>
                        <img src={craftPlanetPic02} alt="...Loading" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='h-[400px]'>
                        <img src={craftPlanetPic03} alt="...Loading" />
                    </div>
                </swiper-slide>

            </swiper-container>

            <div className='mt-20 max-w-7xl mx-auto border border-neutral-200 p-12 rounded-xl'>
                <div>

                    <h2 className='text-2xl font-semibold'>Website Name: Craft Planet</h2>

                    <p className='text-justify text-base mt-4 text-neutral-500'>
                        At Craft Planet, we believe that creativity knows no bounds. Whether you are a professional artist, a passionate crafter, or a DIY enthusiast, our platform is designed to inspire and equip you with everything you need to bring your artistic visions to life. We are thrilled to have you join our community of creatives and embark on a journey filled with endless possibilities.
                    </p>

                    <p className='text-justify text-base mt-2 text-neutral-500'>
                        Our extensive collection of art and craft supplies caters to a wide range of interests and skill levels. From painting and drawing materials to knitting, sewing, scrapbooking, and more, you will find high-quality products that meet your unique needs. Each item in our store is carefully curated to ensure that you have access to the best tools and materials available.
                    </p>

                    <p className='text-justify text-base mt-2 text-neutral-500'>
                        Craft Planet is built with you in mind. Our user-friendly interface, powered by React.js, ensures a seamless and enjoyable shopping experience. Easily navigate through our categories, filter by your favorite brands, and discover new products with just a few clicks. Our platform is designed to save you time, allowing you to spend more time doing what you love – creating.
                    </p>
                    <p className='text-justify text-base mt-2 text-neutral-500'>
                        Join our vibrant community of artists and crafters from around the world. Share your projects, seek advice, and connect with like-minded individuals who share your passion. Participate in our forums, attend virtual workshops, and showcase your work in our online gallery. Craft Planet is more than just a store; it is a place where creativity thrives and collaboration flourishes.
                    </p>

                </div>

                <div className='mt-6'>

                    <h4 className='text-lg font-semibold mt-4 underline'>Features and Characteristics:</h4>

                    <ul className='list-disc ml-8 mt-2 text-justify text-neutral-500'>
                        <li>
                            <b>Easy Navigation:</b> When our potential users seeking art and craft items with their potential needs, it is very simple for them to find the information. For that reason our website offers easy to navigate and accessible to everyone.
                        </li>
                        <li>
                            <b>Customizable Options:</b> Personalize clients orders with bespoke designs and tailored features, ensuring that each piece reflects our unique style and preferences.
                        </li>
                        <li>
                            <b>Inspiring Stories:</b> Discover the stories behind each creation, celebrating the passion, dedication, and inspiration that drive our artists to bring their visions to life.
                        </li>
                        <li>
                            <b>Responsive Design:</b> Our website is optimized for various devices including laptops, desktops, mobiles and tablets, providiing a seamless user experience across all platforms. User Accounts: Enable users to create accounts where they can save favorite listings, receive alerts base on their preferences, and tract their search history.
                        </li>
                    </ul>
                </div>

                <div className='mt-6'>
                    <Link className='btn-link' to='https://github.com/rion247/batch-09-assignment-10?tab=readme-ov-file' target='_blank'>GitHub Code Link</Link>
                </div>

            </div>
        </div>
    );
};

export default ArtandCraftWeb;