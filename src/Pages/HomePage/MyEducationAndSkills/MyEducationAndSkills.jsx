import educationPic from '../../../assets/education.png';
import experiencePic from '../../../assets/experience.png';


const MyEducationAndSkills = () => {
    return (
        <div className='flex justify-center gap-x-48 mb-40' >

            <div>
                <div className='flex justify-center gap-x-10 items-center mb-20'>
                    <img className='w-16 h-16' src={experiencePic} alt="...Loading" />

                    <h6 className='text-5xl normal-case font-bold'>My Certificate</h6>

                </div>

                <div className='ml-20'>

                    <div className='mb-16'>
                        <h6 className='text-2xl text-sky-500 font-medium'>2024 (06 months)</h6>
                        <h6 className='text-3xl font-bold my-4'>Complete Web Development</h6>
                        <h6 className='text-xl font-medium'>Programming Hero</h6>
                    </div>

                </div>


            </div>

            <div className=''>
                <div className='flex justify-center gap-x-10 items-center mb-20'>
                    <img className='w-16 h-16' src={educationPic} alt="...Loading" />

                    <h6 className='text-5xl normal-case font-bold'>My Education</h6>

                </div>

                <div className='ml-20'>

                    <div className='mb-12'>
                        <h6 className='text-2xl text-sky-500 font-medium'>2016-2018</h6>
                        <h6 className='text-3xl font-bold my-4'>Master of Business <br /> Administration - MBA</h6>
                        <h6 className='text-xl font-medium'>Pundra University of Science and Technology</h6>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default MyEducationAndSkills;