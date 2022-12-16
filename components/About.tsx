import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
    pageInfo: PageInfo
};

export default function About({ pageInfo }: Props) {
    return (
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
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                src={urlFor(pageInfo?.profilePic).url()}
                className='-mb-6 mt-20 md:mt-36 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] xl:mt-5 overflow-y-auto'
            />

            <div className='space-y-4 px-0 -mt-5 md:-mt-10 md:px-10'>
                <h4 className='text-3xl md:text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
                <p className='text-base overflow-y-auto'>
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    )
}