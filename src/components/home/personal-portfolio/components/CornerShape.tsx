type CornerShapeProps = {
    position: "left" | "right";
    color?: string;
    className?: string;
    speed?: string;
};

const CornerShape = ({
    position,
    color = "#000",
    className = "",
    speed,
}: CornerShapeProps) => {
    const isLeft = position === "left";

    return (
        <span
            className={`shape-1 d-inline-block ${isLeft ? "mr-10" : ""} ${className}`}
            {...(speed ? { "data-speed": speed } : {})}
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {isLeft ? (
                    <path
                        d="M0 40C0 17.9086 17.9086 0 40 0V40H0Z"
                        fill={color}
                    />
                ) : (
                    <path
                        d="M40 40C40 17.9086 22.0914 0 0 0V40H40Z"
                        fill={color}
                    />
                )}
            </svg>
        </span>
    );
};

export default CornerShape;