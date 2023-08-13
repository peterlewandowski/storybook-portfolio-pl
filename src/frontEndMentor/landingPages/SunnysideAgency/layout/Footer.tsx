import Image from "next/image";

export const Footer = () => {
    return (
        <footer>
            <div>
                <Image
                    src={require("../images/logo.svg")}
                    alt="sunnyside"
                    width={124}
                    height={24}
                />
                <div>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                </div>
                <div>
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
