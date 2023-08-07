import Image from "next/image";

export const Header = () => {
    return (
        <div
            className="w-screen bg-cover bg-center bg-no-repeat px-8 pb-12 pt-8"
            style={{
                backgroundImage: "url('/images/figma/mae-mu-1-a-pt-yqz-naj-a-unsplash.png')",
            }}
        >
            <header id="header">
                <nav className="flex flex-row justify-between">
                    <Image src="/images/logo.svg" alt="sunnyside" width={124} height={24} />
                    <div className="font-barlow space-x-12 text-white">
                        <a href="#about">About</a>
                        <a href="#Services">Services</a>
                        <a href="#projects">Projects</a>
                        <a
                            className="font-fraunces rounded-3xl bg-white px-7 py-3 text-black"
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
                    <a href="#about"></a>
                </div>
            </section>
        </div>
    );
};
