import Image from "next/image";

const heroArrow = require("../images/figma/hero-arrow.svg");

export const Hero = () => {
    return (
        <section id="hero" className="relative">
            <div className="flex flex-col items-center gap-24 pb-60 pt-[7.5rem]">
                <h1 className="font-fraunces text-5xl font-bold uppercase text-white">
                    We are creatives
                </h1>
                <a href="#about">
                    <Image src={heroArrow} alt="arrow"/>
                </a>
            </div>
        </section>
    );
};
