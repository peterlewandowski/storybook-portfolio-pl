import { useCallback, useState } from "react";
import { cn } from "@/utils";
import HamburgerIcon from "../images/icon-hamburger.svg";
import LogoSvg from "../images/logo.svg";

export const Header = () => {
    const [toggleMobileNav, setToggleMobileNav] = useState(false);

    console.log("toggleMobileNav: ", toggleMobileNav);

    const handleToggleMobileNav = useCallback(() => {
        setToggleMobileNav(!toggleMobileNav);
    }, [toggleMobileNav]);

    return (
        <header id="header" className="relative">
            <div className="flex flex-row justify-between">
                <LogoSvg className="mt-1" />

                {/* Mobile */}
                <div onClick={handleToggleMobileNav} className="block md:hidden">
                    <HamburgerIcon
                        className={cn("mt-1", { "[&>*]:fill-white/50": toggleMobileNav })}
                    />
                </div>

                {/* Desktop */}
                <div className="hidden space-x-12 font-barlow text-lg font-semibold text-white md:block">
                    <nav>
                        <a href="#about">About</a>
                        <a href="#Services">Services</a>
                        <a href="#projects">Projects</a>
                        <a
                            className="rounded-3xl bg-white px-7 py-3 font-fraunces text-black hover:bg-white/25 hover:text-white"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
            {/* Mobile Drawer */}
            {toggleMobileNav ? (
                <div className="mt-7">
                    <div className="flex flex-row-reverse">
                        <div className="h-0 w-0 border-x-[12px] border-y-[12px] border-b-[12px] border-r-[12px] border-solid border-x-transparent border-y-transparent border-b-white border-r-white"></div>
                    </div>
                    <div className="flex flex-col items-center gap-8 bg-white p-10 text-xl font-semibold text-slate-500">
                        <a href="#about">About</a>
                        <a href="#Services">Services</a>
                        <a href="#projects">Projects</a>
                        <a
                            className="rounded-3xl bg-yellow-400 px-7 py-3 font-fraunces text-black "
                            href="#contact"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            ) : null}
        </header>
    );
};
