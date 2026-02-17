import { useState } from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const FaqDetails = () => {

    const faqDetails = [
        {name:'Returns & Exchanges', property:[
            {pro_name:[
            {nam:"What is your return policy?",text:'We accept returns within 14 days of delivery on unworn, unwashed items with original tags. Some items like final sale or underwear are non-returnable.'},
            {nam:"How do I start a return or exchange?",text:'Just head to our Returns Portal, enter your order number and email, and follow the steps. You’ll receive a prepaid return label if eligible.'},
            {nam:"When will I get my refund?",text:'Once we receive and inspect your return, refunds are processed within 5–7 business days to your original payment method.'},
            {nam:"Can I exchange an item for a different size?",text:'Absolutely! If the size you need is available, we’ll process an exchange once your original item is received.'}
        ]
    }
]
},
        {name:'Ordering & Payment', property:[
            {pro_name:[
                {nam:'What payment methods do you accept?',text:'We accept Visa, Mastercard, AMEX, PayPal, Apple Pay, Google Pay, and Velora gift cards.'},
                {nam:'Can I apply a promo code or gift card at checkout?',text:'Yes! You can enter your promo code or gift card in the designated field during checkout before payment.'},
                {nam:'Can I modify or cancel my order after placing it?',text:'Orders are processed quickly, but if you contact us within 1 hour of purchase, we’ll do our best to accommodate changes or cancellations.'},
                {nam:'Do you offer pre-orders?',text:'Yes, for select items. Pre-order details (estimated shipping date, charges, etc.) will be clearly noted on the product page.'}
            ]
        }
    ]
},
        {name:'Shipping & Delivery', property:[
            {pro_name:[
            {nam:'Where do you ship?',text:'We currently ship across the U.S. and select international countries. Shipping options and costs are calculated at checkout.'},
            {nam:'How long does shipping take?',text:'Standard shipping takes 3–7 business days. Expedited options are available at checkout.'},
            {nam:'How can I track my order?',text:'You’ll receive a tracking link via email once your order ships. You can also track your order anytime through your Velora account.'},
            {nam:'What if my package is lost or delayed?',text:'If your tracking hasn’t updated in 5+ days or your package is missing, reach out to our Support Team and we’ll help resolve it ASAP.'}
        ]
    }
]
},
        {name:'Sizing & Fit', property:[
            {pro_name:[
                {nam:'How do I know what size to order?',text:'Each product page includes a detailed size guide and fit notes. We also include model sizing for reference.'},
                {nam:'Do your clothes run true to size?',text:'Most of our pieces run true to size, but we recommend checking individual product descriptions for specific fit guidance.'},
                {nam:'What if I’m between sizes?',text:"If you're between sizes, we suggest sizing up for a more relaxed fit or down for a snug fit — and always feel free to contact us for help!"},
                {nam:'Can I return or exchange if it doesn’t fit?',text:'Yes! We want you to love the way it fits. You can return or exchange eligible items within 14 days of delivery.'}
            ]
        }
    ]
},
    ];

    const [visible, setVisible]=useState<string | null>(null);

    const handleClick=(index:string) => {
        setVisible(prev => prev === index ? null : index);

    }

  return (
    <div className='flex justify-center items-baseline mt-20 mb-20'>
        <div>
           <div className='space-y-10'>
            {faqDetails.map((faqdet,index)=>(
                <div key={index}>
                    <h1 className='text-black text-3xl font-bold mt-6 mb-6'>{faqdet.name}</h1>
                    <ul>{faqdet.property.map((proper, indx)=>(
                        <li key={indx}>
                            <div>{proper.pro_name.map((nam, ind)=>(
                                <span key={ind} className='space-y-6'>
                                    <h1 className='text-black font-bold text-xl'>{nam.nam}</h1>
                                    {/* <p id='text' style={{}}>{nam.text}</p> */}
                                    <div className='flex justify-end items-end text-2xl w-200'>
                                    <button onClick={() => handleClick(`${index}-${ind}`)}><span className="text-2xl">
                        {visible === `${index}-${ind}` ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                      </span></button>
                      {visible === `${index}-${ind}` && (
                      <p className="text-gray-600 text-sm mt-2">{nam.text}</p>
                    )}
                                    </div>
                                    <hr className='mb-6' />
                                </span>
                            ))}</div>
                        </li>
                    ))}</ul>
                </div>
                
            ))}
           </div>
        </div>
    </div>
  )
}

export default FaqDetails