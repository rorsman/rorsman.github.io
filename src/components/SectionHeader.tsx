type SectionHeaderProps = {
    children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeaderProps) {
    return (
        <h2 className="text-xl font-bold text-green-500 border-b border-green-700 mb-4 uppercase tracking-wide">
            {children}
        </h2>
    );
}