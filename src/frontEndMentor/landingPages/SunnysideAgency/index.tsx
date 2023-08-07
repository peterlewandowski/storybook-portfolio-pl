import React from "react";
import { Barlow, Fraunces } from "next/font/google";
import Image from "next/image";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600"],
    variable: "--font-barlow",
});
const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["700", "900"],
    variable: "--font-fraunces",
});

export default function Home() {
    return (
        <main className={`${fraunces.variable} ${barlow.variable} font-barlow text-[18px]`}>
            <div
                className="w-screen bg-cover bg-center bg-no-repeat px-8 pb-12 pt-8"
                style={{
                    backgroundImage: "url('/images/figma/mae-mu-1-a-pt-yqz-naj-a-unsplash.png')",
                }}
            >
                <header id="header">
                    <nav className="flex flex-row justify-between">
                        <Image src="/images/logo.svg" alt="sunnyside" width={124} height={24} />
                        <div className="space-x-12 font-barlow text-white">
                            <a href="#about">About</a>
                            <a href="#Services">Services</a>
                            <a href="#projects">Projects</a>
                            <a
                                className="rounded-3xl bg-white px-7 py-3 font-fraunces text-black"
                                href="#contact"
                            >
                                Contact
                            </a>
                        </div>
                    </nav>
                </header>
                <section id="hero">
                    <div className="flex flex-col items-center gap-24 pb-60 pt-12 ">
                        <h1 className="font-fraunces text-5xl font-bold uppercase text-white">
                            We are creatives
                        </h1>
                        <a href="#about">
                            <Image
                                src="/images/icon-arrow-down.svg"
                                alt="arrow"
                                width={30}
                                height={0}
                            />
                        </a>
                    </div>
                </section>
            </div>
            <section id="about">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col overflow-hidden gap-10">
                        <h2 className="font-fraunces text-[2.5rem] font-black">
                            Transform your brand
                        </h2>
                        <p className="font-barlow font-thin">
                            We are a full-service creative agency specializing in helping brands
                            grow fast. Engage your clients through compelling visuals that do most
                            of the marketing for you.
                        </p>
                        <a className="p-2 font-fraunces text-lg font-black" href="#">
                            Learn more
                        </a>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(/images/desktop/image-transform.jpg)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundImage: `url(/images/desktop/image-stand-out.jpg)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="flex flex-col gap-10">
                        <h2 className="font-fraunces text-[2.5rem] font-black">
                            Stand out to the right audience
                        </h2>
                        <p className="font-barlow font-thin">
                            Using a collaborative formula of designers, researchers, photographers,
                            videographers, and copywriters, we’ll build and extend your brand in
                            digital places.
                        </p>
                        <a className="p-2 font-fraunces text-lg font-black" href="#">
                            Learn more
                        </a>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(/images/desktop/image-graphic-design.jpg)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div>
                            <h2>Graphic design</h2>
                            <p>
                                Great design makes you memorable. We deliver artwork that
                                underscores your brand message and captures potential clients’
                                attention.
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(/images/desktop/image-photography.jpg)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div>
                            <h2>Photography</h2>
                            <p>
                                Increase your credibility by getting the most stunning, high-quality
                                photos that improve your business image.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials">
                <div>
                    <Image src="/images/image-emily.jpg" alt="emily" width={100} height={100} />
                    <p>
                        We put our trust in Sunnyside and they delivered, making sure our needs were
                        met and deadlines were always hit.
                    </p>
                    <h3>Emily R.</h3>
                    <h4>Marketing Director</h4>
                </div>
            </section>
            <section id="projects">
                <div>
                    <Image
                        src="/images/desktop/image-gallery-milkbottles.jpg"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/images/desktop/image-gallery-orange.jpg"
                        width={100}
                        height={100}
                    />
                    <Image src="/images/desktop/image-gallery-cone.jpg" width={100} height={100} />
                    <Image
                        src="/images/desktop/image-gallery-sugarcubes.jpg"
                        width={100}
                        height={100}
                    />
                </div>
            </section>
            <footer>
                <div>
                    <Image src="/images/logo.svg" alt="sunnyside" width={124} height={24} />
                    <div>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Projects</a>
                    </div>
                    <div>
                        <Image
                            src="/images/icon-facebook.svg"
                            alt="facebook"
                            width={24}
                            height={24}
                        />
                        <Image
                            src="/images/icon-instagram.svg"
                            alt="instagram"
                            width={24}
                            height={24}
                        />
                        <Image
                            src="/images/icon-twitter.svg"
                            alt="twitter"
                            width={24}
                            height={24}
                        />
                        <Image
                            src="/images/icon-pinterest.svg"
                            alt="pinterest"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
            </footer>
        </main>
    );
}
