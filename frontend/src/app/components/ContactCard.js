export default function ContactCard() {
    return (
        <div className="flex justify-center items-center my-7 m-x-2">  
            <section className="max-w-4xl p-6 bg-white shadow-transparent border-gray-200 rounded-lg  ">
                <div>
                    <span className="text-2xl text-btn_color font-bold font-mono">
                        Do You Have Any Questions? Get Help From Us
                    </span>
                </div>
                <div className="space-x-12 py-11 text-btn_color font-semibold flex flex-col md:flex-row font-mono">
                    <span>Chat live with our support team</span>
                    <span>Browse our FAQ</span>
                </div>
            </section>
        </div>
    );
}

