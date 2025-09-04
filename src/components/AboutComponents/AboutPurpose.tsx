import pic1 from "../../Images/circle.png"
import pic2 from "../../Images/focus.png"

const AboutPurpose = () => {
  return (
    <div className="mt-30 mb-30 flex justify-center items-center text-center bg-[rgb(255,255,255)]">
        <div>
            <div className="space-y-6">
                <h1 className="text-5xl text-black font-bold">Our Purpose, Your Style</h1>
                <p className="mb-15 text-stone-500">At Velora, everything we create starts with you — your lifestyle, your confidence, <br /> and your need for fashion that truly fits.</p>
            </div>
            <div className="w-300 grid grid-cols-2 gap-10">
                <div className="p-10 border border-gray-300 space-y-4 rounded-2xl">
                    <div className="flex justify-center items-center text-center">
                    <img className="w-15 mt-6" src={pic1} alt="" />
                    </div>
                    <h1 className="text-2xl text-black font-bold">Our Mission</h1>
                    <p>To create timeless, high-quality fashion that blends comfort with confidence. We’re here to empower individuals of all ages and body types with clothing that fits seamlessly into real life — versatile, inclusive, and made to be lived in. We design with purpose, craft with care, and always put people first.</p>
                </div>
                <div className="p-10 border border-gray-300 space-y-4 rounded-2xl mt-10 -mb-10">
                    <div className="flex justify-center items-center text-center">
                    <img className="w-15 mt-6" src={pic2} alt="" />
                    </div>
                    <h1 className="text-2xl text-black font-bold">Our Vision</h1>
                    <p>To become a trusted, global fashion destination that redefines modern essentials. We envision a world where style is accessible, self-expression is celebrated, and fashion feels effortless for everyone — from city streets to family weekends. At Velora, we aim to lead with creativity, integrity, and a deep understanding.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPurpose