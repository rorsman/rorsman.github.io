import Image from "next/image";
import { Sixtyfour } from "next/font/google";
import { withBasePath } from "@/config/site";

const sixtyFour = Sixtyfour({
    subsets: ["latin"],
    fallback: ["sans"]
});

export default function Title() {
    return <div className="title-container">
        <Image
            className="title-image"
            src={withBasePath("/terminal.svg")}
            alt=""
            width={192}
            height={192}
        />
        <h1 className={`${sixtyFour.className} title-heading`}>I WRITE CODE</h1>
    </div>
};
