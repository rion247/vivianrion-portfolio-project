import { Helmet } from "react-helmet";
import HeroBanner from "./HeroBanner/HeroBanner";
import Services from "./Services/Services";
import RecentWorks from "./RecentWorks/RecentWorks";
import Banner from "./Banner/Banner";
import SkillsSet from "./SkillsSet/SkillsSet"; 
import MyEducationAndSkills from "./MyEducationAndSkills/MyEducationAndSkills";
import ContactInformation from "./ContactInformation/ContactInformation";


const HomePage = () => {
    return (
        <div >
            <Helmet>
                <title>Vivian Rion | Personal Portfolio Site</title>
            </Helmet>

            <div className="container mx-auto">

                <HeroBanner />

                <Services />

                <RecentWorks />

            </div>

            <Banner />

            <div className="container mx-auto">
                <MyEducationAndSkills />
            </div>

            <div className="flex justify-center mb-32">
                <SkillsSet />
            </div>

            <div className="container mx-auto">
                <ContactInformation />
            </div>

        </div>
    );
};

export default HomePage;