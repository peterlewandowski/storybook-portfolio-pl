import Image from "next/image";

export const Projects = () => {
    return (
        <section id="projects">
            <div>
                <Image
                    src={require("../images/desktop/image-gallery-milkbottles.jpg")}
                    alt=""
                    width={100}
                    height={100}
                />
                <Image
                    src={require("../images/desktop/image-gallery-orange.jpg")}
                    alt=""
                    width={100}
                    height={100}
                />
                <Image
                    src={require("../images/desktop/image-gallery-cone.jpg")}
                    alt=""
                    width={100}
                    height={100}
                />
                <Image
                    src={require("../images/desktop/image-gallery-sugarcubes.jpg")}
                    alt=""
                    width={100}
                    height={100}
                />
            </div>
        </section>
    );
};
