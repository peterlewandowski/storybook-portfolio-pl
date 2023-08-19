import Image from "next/image";

export const Projects = () => {
    return (
        <section id="projects">
            <div className="flex [&>*]:flex-1">
                <div>
                    <Image
                        src={require("../images/desktop/image-gallery-milkbottles.jpg")}
                        alt="milk bottles"
                    />
                </div>
                <div>
                    <Image
                        src={require("../images/desktop/image-gallery-orange.jpg")}
                        alt="orange"
                    />
                </div>
                <div>
                    <Image src={require("../images/desktop/image-gallery-cone.jpg")} alt="cone" />
                </div>
                <div>
                    <Image
                        src={require("../images/desktop/image-gallery-sugarcubes.jpg")}
                        alt="sugar cubes"
                    />
                </div>
            </div>
        </section>
    );
};
