import Image from "next/image";

const background = require("../images/figma/mae-mu-1-a-pt-yqz-naj-a-unsplash.png").default.src;
const logo = require("../images/logo.svg");

export const Header = () => {
    console.log(background);
    return (
        <header id="header" className="relative">
            <nav className="flex flex-row justify-between">
                <Image src={logo} alt="sunnyside" width={124} height={24} />
                <div className="space-x-12 font-barlow text-white text-lg font-semibold">
                    <a href="#about">About</a>
                    <a href="#Services">Services</a>
                    <a href="#projects">Projects</a>
                    <a
                        className="rounded-3xl bg-white px-7 py-3 font-fraunces text-black hover:bg-white/25 hover:text-white"
                        href="#contact"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
};
