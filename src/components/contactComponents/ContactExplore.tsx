
const ContactExplore = () => {

    const exploreDetails = [
        {title:'Returns & Exchanges', subTitle1:'Returns & Exchanges', subTitle2:'How to Start a Return', subTitle3:'Check Return Status'},
        {title:'Ordering & Payment', subTitle1:'Modify or Cancel an Order', subTitle2:'Pre-order Items', subTitle3:'Payment Methods'},
        {title:'Shipping & Delivery', subTitle1:'Shipping Options & Costs', subTitle2:'Estimated Delivery Times', subTitle3:'Track Your Order'},
        {title:'Product Information', subTitle1:'Materials & Fabrics', subTitle2:'Care Instructions', subTitle3:'Availability & Restocks'},
        {title:'Account & Privacy', subTitle1:'Create or Manage Your Account', subTitle2:'Password Reset Help', subTitle3:'Privacy Policy'},
        {title:'Sizing & Fit', subTitle1:'Size Guide', subTitle2:'Fit Tips & Recommendations', subTitle3:'Product Measurements'},
    ];

  return (
    <div className='flex justify-center items-center bg-[rgb(247,236,237)] w-full px-6 py-10 lg:px-20'>
        <div>
            <div className='text-center space-y-5 pb-10'>
                <h1 className='md:text-5xl text-3xl font-bold text-black'>Explore Our Support <br />Topics</h1>
                <p className="md:text-base text-sm">From returns and shipping to sizing and payments, we’ve got <br /> answers to all your most common questions.</p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-5 gap-3'>
                {exploreDetails.map((details , index)=>(
                    <div className='md:w-full xl:w-96 md:px-6 px-2 py-6 lg:px-10 lg:py-10 md:pace-y-6 space-y-4 bg-white rounded-2xl' key={index}>
                        <div className=''>
                        <h1 className='lg:text-2xl md:text-xl text-sm font-bold text-black'>{details.title}</h1>
                        </div>
                        <ul className='underline md:space-y-4 space-y-2 md:text-base text-xs'>
                            <li>{details.subTitle1}</li>
                            <li>{details.subTitle2}</li>
                            <li>{details.subTitle3}</li>
                        </ul>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ContactExplore