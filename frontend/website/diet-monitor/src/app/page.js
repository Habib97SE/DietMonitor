import Image from "next/image";
import Link from "next/link";
import FAQ from "@/app/components/FAQ";
import HomePageBlogSection from "@/app/components/Blog/HomePageBlogSection";

export default function Home() {
    const FeatureSection = ({ image, title, text }) => {
        return (
            <div className="flex flex-col items-center p-4 bg-white rounded shadow-lg ">
                <Image src={image} alt={title} width={300} height={200} className="rounded-t" />
                <div className="p-4 text-center flex flex-wrap flex-col">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-2 text-gray-600">{text}</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-96">
                <Image
                    src="/header.jpg"
                    alt="hero"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-white">Welcome to Diet Monitor</h1>
                    <p className="text-lg text-white my-2">Track your daily food intake and stay healthy</p>
                    <Link href="/signup">
                        <span className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</span>
                    </Link>
                </div>
            </div>
            {/* End Hero Section */}

            {/* Features Section */}
            <div className="bg-gray-200 py-16">
                <h2 className="text-3xl font-bold text-center">Features</h2>
                <div className="flex flex-wrap justify-center mt-10">
                    {["Scan Barcode", "Track Calories", "Monitor your weight"].map((feature, index) => (
                        <div key={index} className="w-full md:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <Image
                                    src={`/feature${index + 1}.jpg`}
                                    alt={feature}
                                    width={500}
                                    height={300}
                                    className="mx-auto"
                                />
                                <h3 className="text-xl font-bold mt-4">{feature}</h3>
                                <p className="mt-2 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec feugiat mi. Donec
                                    eget est ac nulla tincidunt luctus.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* End Features Section */}

            {/* Testimonials Section */}
            <div className="mx-10 py-16 bg-white">
                <h2 className="text-3xl font-bold text-center">Testimonials</h2>
                <p
                    className="text-gray-600 text-center mt-4"
                >
                    See what our users have to say about Diet Monitor.
                </p>
                <div className="flex flex-wrap justify-center mt-10">
                    {["John Doe", "Jane Doe", "John Smith"].map((name, index) => (
                        <div key={index} className="w-full md:w-1/3 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                                <Image
                                    src={`/user${index + 1}.jpg`}
                                    alt={name}
                                    width={200}
                                    height={200}
                                    className="rounded-full mx-auto"
                                />
                                <h3 className="text-xl font-bold mt-4">{name}</h3>
                                <p className="mt-2 text-gray-600">"I have lost {5 * (index + 1)} pounds using Diet Monitor. It's amazing!"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* End Testimonials Section */}

            {/* Benefits Section */}
            <div className="py-16 bg-blue-50">
                <h2 className="text-3xl font-bold text-center">Benefits</h2>
                <p
                    className="text-gray-600 text-center mt-4"
                >
                    Diet Monitor offers the following benefits to help you stay healthy and fit.
                </p>
                <div className="flex flex-wrap justify-center mt-10">
                    <FeatureSection
                        image="/weightloss.jpg"
                        title="Weight Loss"
                        text="Lose weight by tracking your daily calorie intake."
                    />
                    <FeatureSection
                        image="/healthyfood.jpg"
                        title="Healthy Food Choices"
                        text="Make healthy food choices by scanning barcodes and getting nutritional information."
                    />
                    <FeatureSection
                        image="/stayfit.jpg"
                        title="Stay Fit"
                        text="Stay fit and healthy by monitoring your daily food intake."
                    />
                </div>
            </div>
            {/* End Benefits Section */}

            {/* Blog Section */}
            <HomePageBlogSection />
            {/* End Blog Section */}

            {/* FAQ Section */}
            <div
                className="bg-gray-50 py-16"
            >
                <FAQ />
            </div>
            {/* End FAQ Section */}
        </div>
    );
}
