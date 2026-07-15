import {BiArrowToTop} from "react-icons/bi";

export default function BackToTopButton({ scrolled }: Readonly<{ scrolled: boolean }>) {
    if (!scrolled) return null;
    return (
        <button
            type="button"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="back-to-top-button"
            aria-label="Back to top"
        >
            <span className="back-to-top-button-label">
                <BiArrowToTop size={24}/>
                Top
            </span>
        </button>
    );
}
