import Image from "next/image";

export const About = () => {
    return (
        <section id="about">
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-10 overflow-hidden">
                    <h2 className="font-fraunces text-[2.5rem] font-black">Transform your brand</h2>
                    <p className="font-barlow font-thin">
                        We are a full-service creative agency specializing in helping brands grow
                        fast. Engage your clients through compelling visuals that do most of the
                        marketing for you.
                    </p>
                    <a className="p-2 font-fraunces text-lg font-black" href="#">
                        Learn more
                    </a>
                </div>
                <div className="relative">
                    <Image
                        src={require("../images/desktop/image-transform.jpg")}
                        alt="transform"
                        fill
                        objectFit="cover"
                    />
                </div>
                <div className="relative">
                    <Image
                        src={require("../images/desktop/image-stand-out.jpg")}
                        alt="transform"
                        fill
                        objectFit="cover"
                    />
                </div>
                <div className="flex flex-col gap-10">
                    <h2 className="font-fraunces text-[2.5rem] font-black">
                        Stand out to the right audience
                    </h2>
                    <p className="font-barlow font-thin">
                        Using a collaborative formula of designers, researchers, photographers,
                        videographers, and copywriters, we’ll build and extend your brand in digital
                        places.
                    </p>
                    <a className="p-2 font-fraunces text-lg font-black" href="#">
                        Learn more
                    </a>
                </div>
                <div className="relative">
                    <Image
                        src={require("../images/desktop/image-graphic-design.jpg")}
                        alt="transform"
                        fill
                        objectFit="cover"
                        objectPosition="center"
                    />

                    <div className="relative">
                        <h2>Graphic design</h2>
                        <p>
                            Great design makes you memorable. We deliver artwork that underscores
                            your brand message and captures potential clients’ attention.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src={require("../images/desktop/image-photography.jpg")}
                        alt="photography"
                        fill
                        objectFit="cover"
                    />
                    <div className="relative">
                        <h2>Photography</h2>
                        <p>
                            Increase your credibility by getting the most stunning, high-quality
                            photos that improve your business image.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
