import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = {
    experience: Experience
};

export default function ExperienceCard({ experience }: Props) {
    return(
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-screen md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                className="w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src={urlFor(experience?.companyImage).url()}
                // src="https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/000/170/original/GALogoForGreenhouse.png?1448035888" 
                alt="Five Star Bank" 
            />

            <div className='px-0 md:px-10 text-center md:text-left'>
                <h4 className='text-2xl md:text-4xl font-light'>{experience?.jobTitle}</h4>
                <p className='font-bold text-xl md:text-2xl mt-1'>{experience?.company}</p>
                {/* Use below in projects cards */}
                {/* <div className='flex space-x-2 my-2'>
                    <img 
                        className='h-10 w-10 rounded-full'
                        src="" 
                        alt="" 
                    />
                </div> */}
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} - {" "}
                    {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
                </p>

                <ul className='text-sm sm:h-[250px] list-disc space-y-4 ml-5 md:text-lg max-h-80 overflow-y-auto pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}