export default function Tab({title, isActive, onClick}) {
    return (
        <button
            className={`text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-500"} `}
            onClick={onClick}
        >
            {title}
        </button>

    );
}


