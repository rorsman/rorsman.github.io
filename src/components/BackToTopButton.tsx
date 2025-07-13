export default function BackToTopButton({ scrolled }: { scrolled: boolean }) {
    if (!scrolled) return null;
    return (<button
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        aria-label="Back to top"
    >
        ↑ Top
    </button>);
}