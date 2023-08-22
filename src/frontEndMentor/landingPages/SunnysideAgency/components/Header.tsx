import LogoSvg from "../images/logo.svg";

export const Header = () => {
    return (
        <header id="header" className="relative">
            <nav className="flex flex-row justify-between">
                <LogoSvg />
                <div className="space-x-12 font-barlow text-lg font-semibold text-white">
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
