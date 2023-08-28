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
            {/* Navigation */}
            <nav className="relative flex justify-between">
                {/* Logo */}
                <LogoSvg className="mt-1" />

                {/* Mobile Menu Button */}
                <div onClick={handleToggleMobileNav} className="block md:hidden">
                    <HamburgerIcon
                        className={cn("mt-1", { "[&>*]:fill-white/50": toggleMobileNav })}
                    />
                </div>

                {/* Mobile Drawer */}
                {/* {toggleMobileNav ? (
                    <div className="mt-7">
                        <div className="flex flex-row-reverse">
                            <div className="h-0 w-0 border-x-[12px] border-y-[12px] border-b-[12px] border-r-[12px] border-solid border-x-transparent border-y-transparent border-b-white border-r-white"></div>
                        </div>
                    </div>
                ) : null} */}

                <ul
                    className={cn([
                        "md:flex-row md:items-stretch md:gap-12 md:bg-transparent md:p-0 md:font-barlow md:text-lg md:font-semibold md:text-white",
                        !toggleMobileNav && "hidden [&>li]:hidden",
                        toggleMobileNav &&
                            "absolute top-20 z-10 flex flex-col items-center gap-8 bg-white p-10 text-xl font-semibold text-slate-500 md:static",

                        toggleMobileNav &&
                            "after:border-[transparent_transparent_white_transparent]after:absolute after:-top-[20px] after:right-0 after:border-[0_0_20px_20px]",
                        // "after:-top-[20px] after:right-0 after:h-0 after:w-0 after:border-x-[12px] after:border-y-[12px] after:border-b-[12px] after:border-r-[12px] after:border-solid after:border-x-transparent after:border-y-transparent after:border-b-white after:border-r-white ",
                    ])}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a
                            className="rounded-full bg-yellow-400 px-8 py-4 font-fraunces font-bold uppercase text-black md:rounded-3xl md:bg-white md:px-7 md:py-3  md:hover:bg-white/25 md:hover:text-white"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
