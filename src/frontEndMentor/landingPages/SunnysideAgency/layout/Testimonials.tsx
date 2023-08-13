import Image from "next/image";

export const Testimonials = () => {
    return (
        <section id="testimonials">
            <div>
                <Image
                    src={require("../images/image-emily.jpg")}
                    alt="emily"
                    width={100}
                    height={100}
                />
                <p>
                    We put our trust in Sunnyside and they delivered, making sure our needs were met
                    and deadlines were always hit.
                </p>
                <h3>Emily R.</h3>
                <h4>Marketing Director</h4>
            </div>
        </section>
    );
};
