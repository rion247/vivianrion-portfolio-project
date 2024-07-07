import { FiDownload } from 'react-icons/fi';
import portfolioPic from '../../../assets/profile-pic (1).png'

const HeroBanner = () => {


    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1QpHKxxVEL8nyRY9wiRPiZqNo4OGk4qGk';
        link.download = 'Vivian_Rion_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-x-4">
                <img
                    src={portfolioPic}
                    className="" />

                <div className=''>
                    <h4 className="text-4xl mb-3 font-medium">I am Vivian Rion</h4>
                    <h1 className="text-5xl font-bold text-slate-950">Junior Web Developer</h1>
                    <p className="py-6">
                        Explore my journey, discover my projects, and witness the passion I pour into every pixel and every feature. Lets build something amazing together!
                    </p>
                    <button onClick={downloadCV} className="btn bg-sky-950 text-white hover:bg-sky-900">Download CV<FiDownload /></button>
                </div>

            </div>
        </div>
    );
};

export default HeroBanner;