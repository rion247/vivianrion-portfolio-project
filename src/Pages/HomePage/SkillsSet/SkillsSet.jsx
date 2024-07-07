import htmlPic from '../../../assets/html.png';
import cssPic from '../../../assets/css.png';
import jsPic from '../../../assets/js.png';
import reactPic from '../../../assets/react.png';
import nodePic from '../../../assets/node-js.png';
import vsCodePic from '../../../assets/vs code.png';
import photoShopPic from '../../../assets/photoshop.png';
import illustratorPic from '../../../assets/illustrator.png';
import xdPic from '../../../assets/xd.png';
import figmaPic from '../../../assets/figma.png';
import { Element } from 'react-scroll';

const SkillsSet = () => {
    return (

        <Element className='mb-32' name='skills'>
            <h2 className="text-center text-5xl font-bold mb-8">My Skills</h2>

            <p className="text-center max-w-5xl text-neutral-500 mx-auto mb-24">
                Combining creativity with technical expertise, I aim to build websites and applications that are not only functional but also captivating. Every line of code I write is a step towards excellence, as I continuously strive to push the boundaries of what’s possible in the digital world.
            </p>

            <div className='flex gap-16'>
                <div className='w-16 h-16'><img src={htmlPic} alt="...Loading" /></div>
                <div className='w-16 h-16'><img src={cssPic} alt="...Loading" /></div>
                <div className='w-16 h-16'><img src={jsPic} alt="...Loading" /></div>
                <div className='w-16 h-16'><img src={reactPic} alt="...Loading" /></div>
                <div className='w-16 h-16'><img src={nodePic} alt="...Loading" /></div>
                <div className='w-16 h-16'><img src={vsCodePic} alt="...Loading" /></div>
                <div className='w-16 h-16'><img src={photoShopPic} alt="...Loading" /></div>
                <div className='w-16 h-16'><img src={illustratorPic} alt="...Loading" /></div>
                <div className='w-16 h-16'><img src={xdPic} alt="...Loading" /></div>
                <div className='w-16 h-16'><img src={figmaPic} alt="...Loading" /></div>

            </div>
        </Element>
    );
};

export default SkillsSet;