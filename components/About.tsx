import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
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
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
                src='https://i.imgur.com/bIhFdEr.jpeg'
                className='-mb-20 md:mb-0 flex-shink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] xl:mt-5'
            />

            <div className='space-y-10 px-0 sm:-mt-10 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
                <p className='text-base'>
                    I'm Jeremiah! 👋🏽 I've recently grauated from General Assembly's Software Engineering Immersive Coding Bootcamp and have a background in IT and security.
                    I attended the United States Air Force Academy and Graduated from CSU, Sacramento in 2017 with a degree in Economics. I'm passionate about building something from nothing 
                    and a special interest in what's going on behind the scenes of applications we use every day. Building full stack applications with creative solutions fuels my desire to learn
                    and I bring my background of networking, infrastructure, and application management into every application I write.
                </p>
            </div>
        </motion.div>
    )
}