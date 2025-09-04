
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
    <div className='flex justify-center items-center bg-[rgb(247,236,237)] pt-20 pb-20'>
        <div>
            <div className='text-center space-y-5 pb-10'>
                <h1 className='text-5xl font-bold text-black'>Explore Our Support <br />Topics</h1>
                <p>From returns and shipping to sizing and payments, we’ve got <br /> answers to all your most common questions.</p>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {exploreDetails.map((details , index)=>(
                    <div className='w-96 p-10 space-y-6 bg-white rounded-2xl' key={index}>
                        <div className=''>
                        <h1 className='text-2xl font-bold text-black'>{details.title}</h1>
                        </div>
                        <ul className='underline space-y-4'>
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