import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-[#90D4C6]">
            <div className="flex flex-col items-center py-16 ">
                <Image
                    src={require("../images/logo-green.svg")}
                    alt="sunnyside"
                    width={124}
                    height={24}
                />
                <div className="mt-10 grid grid-cols-3 gap-14 font-barlow text-lg font-semibold text-[#458D7E]">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                </div>
                <div className="mt-16 flex gap-10">
                    <Image
                        src={require("../images/icon-facebook.svg")}
                        alt="facebook"
                        width={24}
                        height={24}
                    />
                    <Image
                        src={require("../images/icon-instagram.svg")}
                        alt="instagram"
                        width={24}
                        height={24}
                    />
                    <Image
                        src={require("../images/icon-twitter.svg")}
                        alt="twitter"
                        width={24}
                        height={24}
                    />
                    <Image
                        src={require("../images/icon-pinterest.svg")}
                        alt="pinterest"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </footer>
    );
};
