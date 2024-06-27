import Image from "next/image";

export default function HomePageBlogSection() {

    const BlogCard = ({image, title, description}) => {
        return (
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Image src={image} alt={title}
                           width={500}
                           height={300}
                    />
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                        <p className="leading RELIAC-RELAXED">{description}</p>
                    </div>
                    <div
                        className={"flex justify-center items-center"}
                    >
                        <button
                            className="bg-gray-200 text-gray-900 py-2 px-4 w-full text-center mt-2 hover:bg-gray-300"
                        >
                            Read More
                        </button>
                        
                    </div>
                </div>
            </div>
        );
    }

    const blogData = [
        {
            title: "Shooting Stars",
            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            image: "https://via.placeholder.com/720x400"
        },
        {
            title: "Shooting Stars",
            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            image: "https://via.placeholder.com/720x400"
        },
        {
            title: "Shooting Stars",
            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            image: "https://via.placeholder.com/720x400"
        }
    ]

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Blog posts</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon
                        brooklyn asymmetrical gentrify, subway tile poke farm-to-table. La Croix semiotics occupy, fixie
                        fingerstache thundercats franzen you probably haven't heard of them.</p>
                </div>
                <div
                    className="flex flex-row -m-4">
                    {blogData.map((item, index) => (
                        <BlogCard key={index} title={item.title} description={item.description} image={item.image}/>
                    ))}
                </div>
            </div>
        </section>
    );
}