import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex justify-center gap-6 py-6">
            <Link href="https://github.com/rorsman" target="_blank" rel="noopener noreferrer">
                <Image
                    className="h-12 rounded-full"
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/public/github-mark-white.svg`}
                    alt="github logo"
                />
            </Link>
            <Link href="https://linkedin.com/in/albin-rorsman-6156abb0/" target="_blank" rel="noopener noreferrer">
                <Image
                    className="h-12 rounded-full"
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/public/linkedin-round-white.svg`}
                    alt="linkedin logo"
                />
            </Link>
        </div>
    );
}