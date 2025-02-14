import Image from "next/image";

export default function HomeCard() {
    return (
        <section className="w-full py-8 md:py-0">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 md:gap-12 xl:gap-24">
  
                <div className="w-full max-w-[500px] lg:flex-1 relative aspect-video md:aspect-square">
                    <Image
                        src='/images/Homeimage.png'
                        alt="Dream house illustration"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 90vw, 50vw"
                        priority
                    />
                </div>
                <div className="lg:flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-btn_color mb-4 md:mb-6">
                        We Help You To Find Your Dream House
                    </h2>
                    <p className="text-base md:text-lg text-btn_color mb-8 md:mb-12 max-w-[600px] lg:max-w-none">
                        From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality
                    </p>
                    <div className="w-full flex flex-col sm:flex-row justify-center gap-6 md:gap-8 lg:gap-12">
                        <div className="flex flex-col items-center p-4">
                            <span className="text-3xl md:text-4xl font-bold text-btn_color">8K+</span>
                            <span className="text-sm md:text-base">Houses Available</span>
                        </div>
                        <div className="flex flex-col items-center p-4">
                            <span className="text-3xl md:text-4xl font-bold text-btn_color">6K+</span>
                            <span className="text-sm md:text-base">Houses Sold</span>
                        </div>
                        <div className="flex flex-col items-center p-4">
                            <span className="text-3xl md:text-4xl font-bold text-btn_color">2K+</span>
                            <span className="text-sm md:text-base">Trusted Agents</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
