import Image from "next/image";
import { Sixtyfour } from "next/font/google";

const sixtyFour = Sixtyfour({
    subsets: ["latin"],
    fallback: ["sans"]
});

export default function Title() {
    return <div className="mb-14">
        <Image
            className="mx-auto h-48 rounded-full"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/sentiment_extremely_dissatisfied.svg`}
            alt=""
        />
        <h1 className={sixtyFour.className}>I WRITE CODE</h1>
    </div>
};