import Image from "next/image";
import { Header, Hero } from "../components";
import bg from "../images/figma/mae-mu-1-a-pt-yqz-naj-a-unsplash.png"

export const TopSection = () => {
    return (
        <div className="relative px-8 pb-12 pt-8">
            <Image
                src={bg.src}
                alt="background"
                fill
                objectFit="cover"
            />
            <Header />
            <Hero />
        </div>
    );
};
