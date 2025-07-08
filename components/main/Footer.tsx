import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import Link from "next/link";
import { resume } from "@/constants";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-start justify-around flex-wrap">

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </p> */}
                        <Link href={"https://github.com/samarthsharma5166"} target="_blank" className="flex flex-row items-center z-50 my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </Link>
                        <Link target="_blank" href={"http://discordapp.com/users/732066191757279293"} className="z-50 flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <Link href={"https://www.instagram.com/samarth_sharma__5166?igsh=YXppdnFlNmVpZjhs"} target="_blank" className="flex flex-row z-50 items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </Link>
                        <Link target="_blank" href={"https://x.com/Samarth47114217?t=z7Kj2LciOM98x0rJt_1jXQ&s=09"} className="z-50 flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/samarth-sharma-5166/"} target="_blank" className="flex z-50 flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <Link href="/about-me" className="flex z-50 flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">About Me</span>
                        </Link>

                        <Link href={resume} target="_blank" className="flex flex-row items-center z-50 my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Resume / CV</span>
                        </Link>

                        <Link href="/#projects" className="flex flex-row z-50 items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Projects</span>
                        </Link>

                        <p className="flex flex-row items-center my-[15px] z-50 cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Freelance</span>
                        </p>

                        <a href="mailto:samarths716@gmail.com" className="flex flex-row items-center my-[15px] z-50 cursor-pointer">
                            <span className="text-[15px] ml-[6px]">samarths716@gmail.com</span>
                        </a>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Samarth Sharma
                </div>
            </div>
        </div>
    )
}

export default Footer

// WebChain Dev 2023 Inc. All rights reserved