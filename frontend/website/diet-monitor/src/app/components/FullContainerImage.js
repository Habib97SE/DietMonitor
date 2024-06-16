import Image from "next/image";

export default function FullContainerImage({src, alt}) {
    return (
        <div>
            <header>
                <Image
                    src={src}
                    alt={alt}
                    layout={"fill"}
                    objectFit={"cover"}
                />
            </header>
        </div>
    );
}