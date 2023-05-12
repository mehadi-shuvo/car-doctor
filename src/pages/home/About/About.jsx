import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="w-4/5 mx-auto my-20 bg-white">
            <div className="grid md:grid-cols-2 gap-8">
               <div className='relative'>
                    <img src={person} className='w-4/5 rounded-lg' />
                    <img src={parts} className='w-1/2 absolute right-3 -bottom-7 md:bottom-20 rounded-lg border-8 border-white'/>
               </div>
                <div className='space-y-5'>
                    <h2 className='font-bold text-xl text-[#FF3811]'>About Us</h2>
                    <h3 className="text-5xl font-bold text-[#151515] lg:pr-28">We are qualified & of experience in this field</h3>
                    <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="mt-2 text-white font-semibold text-lg bg-[#FF3811] py-4 px-7 rounded-lg">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;