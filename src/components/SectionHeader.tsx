import type { ReactNode } from "react";

type SectionHeaderProps = {
    children: ReactNode;
};

export default function SectionHeader({ children }: Readonly<SectionHeaderProps>) {
    return (
        <h2 className="section-header">
            {children}
        </h2>
    );
}
