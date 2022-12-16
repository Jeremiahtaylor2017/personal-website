import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
    projects: Project[]
};

export default function Projects({ projects }: Props) {
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
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <h3 className='absolute top-32 md:top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                Scroll right for next project
            </h3>

            <div className="relative -mb-20 md:mb-0 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects.map((project, i) => (
                    <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 xl:p-[30rem]">
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
                            src={urlFor(project?.image).url()}
                            alt="chatApp" 
                            className='max-w-40 max-h-40 md:max-w-auto md:max-h-64'
                        />
                        <div className="space-y-3 md:space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]">
                                    Project {i + 1} of {projects.length}:
                                </span> {project?.title}
                            </h4>
                            
                            <div className='flex items-center space-x-2 justify-center'>
                                {project?.technologies.map(technology => (
                                    <img
                                    className='h-10 w-10'
                                    key={technology._id}
                                    src={urlFor(technology.image).url()} 
                                    alt="" />
                                    ))}
                            </div>

                            <div className='flex justify-center space-x-2 md:space-x-10'>
                                <a href={project?.linkToBuild} target="_blank" rel="noopener noreferrer">
                                    <button className="heroButton">Link to code</button>
                                </a>
                                <a href={project?.linkToSite} target="_blank" rel="noopener noreferrer">
                                    <button className="heroButton">Deployed site</button>
                                </a>
                            </div>

                            <p className="text-sm md:text-lg text-center md:text-left overflow-y-auto">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12">

            </div>
        </motion.div>
    )
}