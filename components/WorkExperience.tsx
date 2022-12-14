import { motion } from 'framer-motion';
import { Experience } from '../typings';
import ExperienceCard from './ExperienceCard';

type Props = {
    experiences: Experience[]
};

export default function WorkExperience({ experiences }: Props) {
    return(
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Experience
            </h3>

            <h3 className='absolute top-32 md:top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                Scroll right for next experience
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 mt-28 md:mt-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {experiences?.map(experience => (
                    <ExperienceCard
                        key={experience._id}
                        experience={experience}
                    />
                ))}
            </div>
        </motion.div>
    )
}