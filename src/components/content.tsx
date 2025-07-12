import Image from "next/image";

export default function Content() {
    return <div className="content">
        <Image
            className="mx-auto block h-48 rounded-full sm:mx-0 sm:shrink-0"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/profile.jpg`}
            alt=""
        />
        <h1>I MAKE STUFF</h1>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
        <p>More can be done in <code>pages/index.tsx</code>.</p>
    </div>
};