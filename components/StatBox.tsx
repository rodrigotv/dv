import Image from "./Image"

import pic_1 from '/public/static/images/home/03_dani_con_art_maya.jpg'
import pic_2 from '/public/static/images/home/04_peces_cesteria.jpg'
import pic_3 from '/public/static/images/home/05_pareja_en_diagnostico.jpg'
import pic_4 from '/public/static/images/home/06_con_artesanas_dominica.jpg'
import pic_5 from '/public/static/images/home/07_exhibit_belize.jpg'

const StatBox = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-10 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-5 lg:grid-rows-2 gap-4 p-4 place-items-center items-center text-[26px] md:text-[24px] lg:text-[16px] text-center italic">
      <div className="max-w-[481px] aspect-square overflow-hidden md:order-1 lg:order-none">
        <Image
          src={pic_1} 
          alt="Daniela Viscarra with mayan artisans"
          className="object-cover"
        />
      </div>
      <div className="max-w-[481px] flex flex-col justify-center aspect-square text-dvBlue1 dark:text-gray-100 overflow-hidden md:order-2 lg:order-none">
        <span className="block w-full text-[64px] lg:text-[40px]">27</span> years of experience in the Handcraft Sector
      </div>
      <div className="max-w-[481px] aspect-square overflow-hidden md:order-4 lg:order-none">
        <Image
          src={pic_3} 
          alt="Artisans couple during business diagnostics"
          className="object-cover"
        />
      </div>
      <div className="max-w-[481px] flex flex-col justify-center aspect-square text-dvBlue1 dark:text-gray-100 overflow-hidden md:order-3 lg:order-none">
        Nearly <span className="block w-full text-[64px] lg:text-[40px]">3,500</span> artisans benefited from her designs and sales model
      </div>
      <div className="max-w-[481px] aspect-square overflow-hidden md:order-5 lg:order-none">
        <Image
          src={pic_5} 
          alt="Exhibition in Belize"
          className="object-cover"
        />
      </div>
      <div className="max-w-[481px] flex flex-col justify-center aspect-square text-dvPurple4 dark:text-gray-100 overflow-hidden md:order-6 lg:order-none">
        Nearly <span className="block w-full text-[64px] lg:text-[40px]">2,200</span> artisans and program implementers trained
      </div>
      <div className="max-w-[481px] aspect-square overflow-hidden md:order-8 lg:order-none">
        <Image
          src={pic_2} 
          alt="Basketry"
          className="object-cover"
        />
      </div>
      <div className="max-w-[481px] flex flex-col justify-center aspect-square text-dvPurple4 dark:text-gray-100 overflow-hidden md:order-7 lg:order-none">
        Have worked in <span className="block w-full text-[64px] lg:text-[40px]">14</span> countries from South and Central America, the Caribbean, Asia and Middle East
      </div>
      <div className="max-w-[481px] aspect-square overflow-hidden md:order-9 lg:order-none">
        <Image
          src={pic_4} 
          alt="Daniela Viscarra with artisans in Dominica"
          className="object-cover"
        />
      </div>
      <div className="max-w-[481px] flex flex-col justify-center aspect-square text-dvPurple4 dark:text-gray-100 overflow-hidden md:order-10 lg:order-none">
      <span className="block w-full text-[64px] lg:text-[40px]">40+</span> Consulting Projects in the Handcraft Sector and other SMEs initiatives
      </div>
    </div>
  )
}

export default StatBox