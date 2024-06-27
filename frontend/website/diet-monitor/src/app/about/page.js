import Image from "next/image";
import AboutUsImageOne from "../../../public/aboutus-1.jpg";

export default function About() {
    return (
        <section className="container mx-auto py-12 px-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Welcome to Diet Monitor</h2>
                <p className="text-lg mb-6">
                    At Diet Monitor, we are dedicated to helping you take control of your health and wellness through
                    accurate, reliable, and user-friendly technology. Our mission is to empower individuals to make
                    informed dietary choices and maintain a healthy lifestyle with ease and confidence.
                </p>

                <h3 className="text-2xl font-bold mb-2">Our Story</h3>
                <p className="mb-6">
                    The journey of Diet Monitor began with a simple idea: to make healthy eating and weight management
                    accessible to everyone. In today's fast-paced world, it's easy to lose track of what we eat and how
                    it affects our health. Our founders, driven by personal experiences and a passion for health and
                    technology, envisioned a solution that could seamlessly integrate into daily life and provide
                    valuable insights into one's dietary habits.
                    <br/><br/>
                    We started as a small team of health enthusiasts and tech experts, united by a common goal. Through
                    countless hours of research, development, and user feedback, Diet Monitor evolved into a
                    comprehensive platform that combines the convenience of barcode scanning with detailed nutritional
                    information and personalized health tracking.
                    <div
                        className={"flex flex-col justify-center items-centers"}
                    >
                        <Image
                            src={AboutUsImageOne}
                            alt={"Our story"}
                            width={600}
                            className={"object-fill"}
                        />
                    </div>
                </p>

                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p className="mb-6">
                    Our mission is to revolutionize the way people approach their diet and health. We believe that
                    everyone deserves access to tools that can help them lead a healthier life. Our core values guide us
                    in this mission:
                </p>
                <ol className="list-disc list-inside mb-6">
                    <li className="mb-2"><strong>Empowerment:</strong> We aim to empower our users by providing them
                        with the knowledge and tools they need to make informed dietary choices.
                    </li>
                    <li className="mb-2"><strong>Accuracy:</strong> We prioritize accuracy in the information we
                        provide, ensuring that our users can trust the data they receive.
                    </li>
                    <li className="mb-2"><strong>Usability:</strong> We focus on creating a user-friendly experience
                        that seamlessly fits into our users' daily routines.
                    </li>
                    <li className="mb-2"><strong>Innovation:</strong> We continuously innovate to bring the latest
                        advancements in health and technology to our users.
                    </li>
                </ol>

                <h3 className="text-2xl font-bold mb-2">What We Offer</h3>
                <p className="mb-6">
                    Our app includes several features designed to help you manage your diet and health:
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li className="mb-2"><strong>Barcode Scanning:</strong> Quickly and easily scan barcodes on food
                        products to retrieve detailed nutritional information.
                    </li>
                    <li className="mb-2"><strong>Calorie Tracking:</strong> Understand your calorie intake and manage
                        your weight and overall health.
                    </li>
                    <li className="mb-2"><strong>Weight Monitoring:</strong> Track your weight over time and set goals
                        with easy-to-read charts and graphs.
                    </li>
                    <li className="mb-2"><strong>Nutritional Insights:</strong> Get detailed information about the
                        nutritional content of the foods you consume, including macronutrients and micronutrients.
                    </li>
                    <li className="mb-2"><strong>Personalized Recommendations:</strong> Receive personalized
                        recommendations based on your dietary habits and health goals.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold mb-2">Our Team</h3>
                <p className="mb-6">
                    Our team is composed of passionate individuals from diverse backgrounds, including nutritionists,
                    software developers, and health enthusiasts. We work collaboratively to ensure that Diet Monitor
                    meets the highest standards of quality and reliability.
                    <br/><br/>
                    <strong>Founders:</strong> Our founders bring a wealth of experience in health and technology,
                    having worked in leading tech companies and healthcare organizations.
                    <br/>
                    <strong>Nutrition Experts:</strong> We collaborate with certified nutritionists to ensure that the
                    information we provide is accurate and up-to-date.
                    <br/>
                    <strong>Developers:</strong> Our talented developers are dedicated to creating a seamless user
                    experience, continually improving the app based on user feedback.
                </p>

                <h3 className="text-2xl font-bold mb-2">Community and Support</h3>
                <p className="mb-6">
                    At Diet Monitor, we believe in the power of community. We are committed to building a supportive and
                    engaging environment for our users. Through our blog, social media channels, and user forums, we
                    encourage you to share your experiences, ask questions, and connect with others on similar health
                    journeys.
                    <br/><br/>
                    We also provide comprehensive customer support to assist you with any questions or issues you may
                    encounter. Our support team is available to help you get the most out of the Diet Monitor app.
                </p>

                <h3 className="text-2xl font-bold mb-2">Looking Ahead</h3>
                <p className="mb-6">
                    As we look to the future, we are excited about the possibilities that lie ahead. We are constantly
                    exploring new ways to enhance our app and provide even more value to our users. Our commitment to
                    innovation means that you can expect regular updates and new features designed to help you achieve
                    your health goals.
                </p>

                <p className="mb-6">
                    Thank you for choosing Diet Monitor. We are honored to be a part of your health journey and look
                    forward to supporting you every step of the way.
                </p>

                <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
                <p className="mb-6">
                    We'd love to hear from you! Whether you have feedback, questions, or just want to share your success
                    story, feel free to reach out to us.
                    <br/><br/>
                    <strong>Email:</strong> <a href="mailto:support@dietmonitor.com"
                                               className="text-blue-500">support@dietmonitor.com</a>
                    <br/>
                    <strong>Phone:</strong> (123) 456-7890
                    <br/>
                    <strong>Address:</strong> 123 Health Street, Wellness City, WW 12345
                </p>

                <p className="mb-6">
                    Join us on social media to stay updated with the latest news and tips:
                    <br/>
                    <a href="https://www.facebook.com/dietmonitor" className="text-blue-500">Facebook</a>
                    <br/>
                    <a href="https://twitter.com/dietmonitor" className="text-blue-500">Twitter</a>
                    <br/>
                    <a href="https://www.instagram.com/dietmonitor" className="text-blue-500">Instagram</a>
                </p>

                <p className="text-center text-gray-700 font-semibold">
                    Together, let's make healthy living simple and achievable!
                </p>
            </div>
        </section>
    );

}