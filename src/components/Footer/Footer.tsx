import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--c3)] text-white">
      <div className="max-w-[1280px] w-[100%] mx-auto py-4 md:py-8 px-4 md:px-8 flex flex-col md:items-center">
        <p className="text-xl font-semibold mb-2 text-[var(--c2)]">
          Kedar Babaleshwar
        </p>
        <div className="flex flex-col md:flex-row md:items-center">
          <Link href="#" className="flex items-center mb-2 md:mb-0 md:mr-4">
            <span className="inline-block mr-2">
              <IoMailSharp />
            </span>
            <span>babaleshwarkedar@gmail.com</span>
          </Link>
          <span className="hidden md:flex">|</span>
          <Link href="#" className="flex items-center mb-2 md:mb-0 md:mx-4">
            <span className="inline-block mr-2">
              <BsGithub />
            </span>
            <span>GitHub</span>
          </Link>
          <span className="hidden md:flex">|</span>
          <p className="flex items-center mb-2 md:mb-0 md:mx-4">
            <span className="inline-block mr-2">
              <FaGlobeAmericas />
            </span>
            <span>Portfolio</span>
          </p>
          <span className="hidden md:flex">|</span>
          <p className="flex items-center md:ml-4">
            <span className="inline-block mr-2 text-[0.9rem]">
              <FaPhone />
            </span>
            <span>+91-6361579289</span>
          </p>
        </div>
      </div>
    </footer>
    // <footer className="bg-[var(--c3)] text-white flex items-start justify-center w-full">
    //   <div className="w-[1280px] max-w-[1280px] px-4 lg:px-8 py-4 lg:py-8 flex flex-col lg:flex-row justify-between lg:h-[250px]">
    //     <Link
    //       href="/"
    //       className="mb-4 lg:mb-0 lg:w-[32%] w-[100%] bg-[#07192b] h-[172px] lg:h-[100%]  flex flex-col items-center justify-center rounded py-4 lg:py-8"
    //     >
    //       <div className="flex">
    //         <p className="gradient text-2xl lg:text-4xl font-bold">THE</p>
    //         <p className="w-[37px] lg:w-[45px] h-5 lg:h-7 ml-1 lg:ml-2 mt-[0.35rem] lg:mt-1 rounded-[50px] bg-[var(--c2)]"></p>
    //       </div>
    //       <div className="gradient flex items-center text-2xl lg:text-4xl font-bold">
    //         <p>M</p>
    //         <p className="w-5 lg:w-7 h-5 lg:h-7 lg:mt-2 mx-[0.1rem] lg:mx-0 rounded-[50%] bg-[var(--c2)]"></p>
    //         <p>VIE</p>
    //       </div>
    //       <div className="flex items-center">
    //         <p className="w-[48px] lg:w-[58px] h-5 lg:h-7 mr-1 lg:mr-2 mt-1 lg:mt-2 rounded-[50px] bg-[var(--c2)]"></p>
    //         <p className="gradient text-2xl lg:text-4xl font-bold">DB</p>
    //       </div>
    //     </Link>

    //     <div className="mb-4 lg:mb-0 lg:w-[32%] w-[100%] bg-[#07192b] h-[172px] lg:h-[100%] flex flex-col items-center justify-center rounded py-4 lg:py-8">
    //       <div className="flex flex-col items-center">
    //         <p className="text-xl lg:text-2xl font-semibold">Tech Stack</p>
    //         <div className="flex items-start mt-4">
    //           <Link
    //             href="https://nextjs.org/"
    //             className="flex items-center mb-2"
    //             //passHref={true}
    //             target="_blank"
    //             aria-label="Next.js icon"
    //           >
    //             <span className="bg-white text-black rounded-full mr-2 p-1 lg:p-2 text-2xl lg:text-3xl">
    //               <SiNextdotjs />
    //             </span>
    //           </Link>
    //           <Link
    //             href="https://www.typescriptlang.org/"
    //             className="flex items-center mb-2"
    //             target="_blank"
    //             aria-label="Typescript icon"
    //           >
    //             <span className="bg-white text-[#3178c6] rounded-[50%] mr-2 p-1 lg:p-2 text-2xl lg:text-3xl">
    //               <SiTypescript />
    //             </span>
    //           </Link>
    //           <Link
    //             href="https://tailwindcss.com/"
    //             className="flex items-center mb-2"
    //             target="_blank"
    //             aria-label="Tailwind icon"
    //           >
    //             <span className="bg-white text-[#3178c6] rounded-[50%] mr-2 p-1 lg:p-2 text-2xl lg:text-3xl">
    //               <SiTailwindcss />
    //             </span>
    //           </Link>
    //           <Link
    //             href="https://www.prisma.io/"
    //             className="flex items-center mb-2"
    //             target="_blank"
    //             aria-label="Prisma icon"
    //           >
    //             <span className="bg-white text-[#1a202c] rounded-[50%] mr-2 p-1 lg:p-2 text-2xl lg:text-3xl">
    //               <SiPrisma />
    //             </span>
    //           </Link>
    //           <Link
    //             href="/https://www.mongodb.com/"
    //             className="flex items-center mb-2"
    //             target="_blank"
    //             aria-label="MongoDB icon"
    //           >
    //             <span className="bg-white text-[#116149] rounded-[50%] p-1 lg:p-2 text-2xl lg:text-3xl">
    //               <SiMongodb />
    //             </span>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="lg:w-[32%] w-[100%] bg-[#07192b] h-[172px] lg:h-[100%] flex flex-col items-center justify-center rounded py-4 lg:py-8">
    //       <p className="text-xl lg:text-2xl font-semibold">Contact</p>
    //       <p>Name: Kedar Babaleshwar</p>
    //       <p>Email : babaleshwarkedar@gmail.com</p>
    //       <p>Mobile : +91-6361579289</p>
    //       <Link
    //         href="https://github.com/"
    //         className="flex items-center text-md lg:text-xl mt-4 rounded-[50px] font-semibold"
    //         target="_blank"
    //       >
    //         GitHub Profile
    //         <span className="ml-2">
    //           <BsGithub />
    //         </span>
    //       </Link>
    //     </div>
    //   </div>
    // </footer>
  );
}
