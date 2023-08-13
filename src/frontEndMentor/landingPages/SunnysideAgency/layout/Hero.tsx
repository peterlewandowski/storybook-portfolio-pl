import Image from "next/image";

const arrowDown = require("../images/icon-arrow-down.svg");

export const Hero = () => {
    return (
        <section id="hero" className="relative">
            <div className="flex flex-col items-center gap-24 pb-60 pt-12 ">
                <h1 className="font-fraunces text-5xl font-bold uppercase text-white">
                    We are creatives
                </h1>
                <a href="#about">
                    <Image src={arrowDown} alt="arrow" width={30} height={0} />
                </a>
            </div>
        </section>
    );
};
