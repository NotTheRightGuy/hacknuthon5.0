export default function SendArrow({ onClick }: { onClick?: () => void }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            onClick={onClick}
        >
            <g clipPath="url(#clip0_21_649)">
                <path
                    d="M16.5 1.5L8.25 9.75"
                    stroke="#F8FAFC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16.5 1.5L11.25 16.5L8.25 9.75L1.5 6.75L16.5 1.5Z"
                    stroke="#F8FAFC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_21_649">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
