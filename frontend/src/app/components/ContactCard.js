export default  function ContactCard(){
    return (
        <section className="flex flex-col items-center p-10">
            <div>
                <span className="text-2xl text-btn_color font-bold ">Do You Have Any Questions? Get Help From Us</span>
            </div>
            <div className="space-x-12 py-11 text-btn_color font-semibold flex  flex-col md:flex-row">
                <span>Chat live with our support team</span>
                <span>Browse our FAQ</span>
            </div>
        </section>
    )
}