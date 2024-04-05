
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { SiSkype } from "react-icons/si";

import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid items-start grid-cols-1 lg:grid-cols-1 lg:gap-12 gap-y-8">
        <div className="flex flex-col items-start justify-center order-2 p-2 pb-20 lg:order-1 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '} 
            <span className="text-pink-500 ">{personalData.name}.</span> <br />
            {`I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <div className="flex items-center gap-5 my-12">
            <Link
              href={personalData.github}
              target='_blank'
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.telegrame}
              target='_blank'
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <FaTelegramPlane size={30} />
            </Link>
            <Link
              href={personalData.skype}
              target='_blank'
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <SiSkype size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 px-3 py-3 text-xs font-medium tracking-wider text-center text-white no-underline uppercase transition-all duration-200 ease-out rounded-full hover:gap-3 bg-gradient-to-r from-pink-500 to-violet-600 md:px-8 md:py-4 md:text-sm hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        {/* <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 py-5 lg:px-8">
            <div className="flex flex-row space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-200 rounded-full"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Miloje Nikolic</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 mr-2 lg:ml-8">
                <span className="text-white ">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-green-400 lg:ml-8">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 mr-2 text-orange-400 lg:ml-16">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 mr-2 text-gray-400 lg:ml-16">{`);`}</span></div>
              <div><span className="ml-4 text-gray-400 lg:ml-8">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;