import React from 'react'
import Image from 'next/image'
import { FEATURES } from '@/Constants'
const Features = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
    <div className="max-container padding-container relative w-full flex justify-end">
      <div>
        <Image className='feature-phone' src="/phone.png" alt="phone" width={440} height={1000}/>
      </div>
      <div className="z-20 flex-w-full flex-col lg:w-[60%]">
        <div className="relative">
          <Image className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]' src="/camp.svg" alt="camp" width={50} height={50} />
          <h2 className='bold-40 lg:bold-64'></h2>
        </div>
        <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
          {FEATURES.map((feature) =>(
          <FeatureItem key={feature.title}
                      title={feature.title}
                      icon={feature.icon}
                      variant={feature.variant}
                      dwscription={feature.description}/>
          ))}
        </ul>
      </div>
    </div>

   </section>
  )
}
const FeatureItem=({title,icon,variant,description}:FeatureItem)=>{
  return(
    <li className='flex w-full flez-1 flex-col items-start'>{title}
    <div className="rounded-full p-4 lg:p-7">
<Image src={icon} alt='map' width={28} height={28}/>
    </div>
    <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>
      {title}
    </h2>
    <p className='regular-16 mt-5 bg-white/80 text-grey-30 lg:mt-[30px] lg:bg-none'>
      {description}
    </p>
    </li>
  )
  }

export default Features