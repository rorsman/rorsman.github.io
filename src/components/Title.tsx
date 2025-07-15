import Image from "next/image";
import { Sixtyfour } from "next/font/google";

const sixtyFour = Sixtyfour({
    subsets: ["latin"],
    fallback: ["sans"]
});

export default function Title() {
    return <div className="title-container">
        <Image
            className="title-image"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/terminal.svg`}
            alt=""
        />
        <h1 className={`${sixtyFour.className} title-heading`}>I WRITE CODE</h1>
    </div>
};