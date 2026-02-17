import { IoLogoInstagram } from "react-icons/io";

const AboutFooter = ({ bgColor }: { bgColor: string }) => {
    const pictures = [
        'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/footer-img-01.jpg',
        'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/footer-img-02.jpg',
        'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/footer-img-03.jpg',
        'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/footer-img-04.jpg',
    ]
    return (
        <div className={`${bgColor} flex justify-center items-center w-full p-20 text-center bg-[rgb(247,236,237)]`}>
            <div>
                <div>
                    <h1 className='md:text-5xl text-2xl font-bold mb-4'>Get 10% Off on Your First Order</h1>
                    <p className="mb-15 md:text-lg text-sm">Plus exclusive access to product drops, style tips, and insider deals.</p>
                </div>
                <div className='flex md:justify-center justify-start  gap-4 mt-4 mb-10'>
                    <div>
                        <input className='md:w-96 md:h-12 w-40 h-10 border border-[rgb(239,35,60)] pl-4
                        md:text-lg text-sm  rounded-xl outline-none'
                            type="email" placeholder='ENTER YOUR EMAIL *' />
                        <p className='text-[rgb(239,35,60)] font-semibold text-left mt-1'>This Field is required.</p>
                    </div>
                    <div>
                        <button className='px-6 md:py-3 py-2 uppercase text-white bg-[rgb(239,35,60)] rounded-xl'>Subscribe</button>
                    </div>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-4 '>{pictures.map((pic, index) => (
                    <ul key={index}>
                        <li><img className='rounded-2xl' src={pic} alt="" /></li>
                    </ul>
                ))}</div>
                <div className="mt-10 flex justify-center items-center gap-2 text-xl"><IoLogoInstagram className="text-[rgb(239,35,60)] text-3xl" />
                    <p className="text-black font-bold">Follow us
                        <span className="text-stone-400 font-normal">  @VeloraStyle</span></p></div>
            </div>
        </div>
    )
}

export default AboutFooter