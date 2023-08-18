import Image from "next/image";
import { Header, Hero } from "../components";

export const TopSection = () => {
    return (
        <div className="relative px-8 pb-12 pt-8">
            <Image
                src={require("../images/figma/mae-mu-1-a-pt-yqz-naj-a-unsplash.png")}
                alt="background"
                fill
                objectFit="cover"
            />
            <Header />
            <Hero />
        </div>
    );
};
