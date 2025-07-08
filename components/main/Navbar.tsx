import { Socials } from "@/constants"
import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
      <div className="w-full h-[60px] fixed top-0 shadow-lg shadow-[#2aoe61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
        <div className="flex flex-row w-full h-full items-center justify-between m-auto px-[10px]">
            <Link href={'/'} className="h-auto w-auto flex flex-row items-center">
                <Image src="/NavLogo.png" alt="logo" width={70} height={70} className="cursor-pointer hover:animate-slowspin"/>
                <span className="ml-[10px] hidden md:block text-gray-300 font-bold">Samarth Sharma</span>
            </Link>
            <div className="w-[500px] hidden sm:flex h-full flex-row items-center justify-between md:mr-20">
                <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                      <Link href="/about-me" className="cursor-pointer">About me</Link>
                      <Link href="/#skills" className="cursor-pointer">Skills</Link>
                      <Link href="/#projects" className="cursor-pointer">Projects</Link>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                {
                    Socials.map((social) => (
                        <Link target="_blank" href={social.link} key={social.name}>
                            <Image
                             src={social.src}
                             alt={social.name}
                             key={social.name}
                             width={24}
                             height={24}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar