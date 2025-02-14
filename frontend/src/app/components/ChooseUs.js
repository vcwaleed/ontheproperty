import Image from "next/image";

const items = [
    { id: 1, svg: '/location-information.svg', title: 'Expert Guidance', description: "Benefit from our team's expertise for a smooth buying experience." },
    { id: 2, svg: '/person-check.svg', title: 'Personalized Service', description: "Our services adapt to your unique needs for a stress-free journey." },
    { id: 3, svg: '/register.svg', title: 'Transparent Process', description: "Stay informed with our clear and honest approach to buying your home." },
    { id: 4, svg: '/hand-shake.svg', title: 'Exceptional Support', description: "Providing peace of mind with responsive customer service." }
];

export default function ChooseUs() {
    return (
        <section className="flex flex-col items-center py-9">
            <h2 className="text-4xl font-bold text-btn_color mb-4">Why Choose Us</h2>
            <p className="text-lg font-medium text-center max-w-2xl">
                Elevating Your Home Buying Experience with Expertise, Integrity, and Personalized Service.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {items.map((item) => (
                    <div key={item.id} className="max-w-[250px] p-6 bg-card_color border rounded-lg shadow-sm">
                        <div className="p-4 w-16 bg-navcolor rounded-lg mb-4">
                            <Image src={item.svg} width={40} height={40} alt={item.title} />
                        </div>
                        <h5 className="text-lg font-bold mb-2">{item.title}</h5>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
