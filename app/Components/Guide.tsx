import React from 'react'
import Image from 'next/image'
const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className=" padding-container">
        <Image src="/camp.svg" alt="camp" width={50} height={50}/>
        <p className='uppercase  regular-18 -mt-1 mb-3 text-green-50'>
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
         <h2 className='bold-40 lg:bold-64 xl:max-[390px]'>
          Guide You to Easy Path
         </h2>
      

        
        <p className='regular-16 text-grey-30 xl:max-w-[520px] '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore omnis totam, quibusdam, reiciendis numquam rem tempore velit ipsum vero perspiciatis suscipit delectus veniam fugit dicta eveniet alias doloribus vitae.

        </p>
      </div>
      </div>
      <div className="flexCenter max-conatiner relative w-full">
        <Image className='w-full object-cover object-center 2xl:rounded-5xl'
        src="/boat.png" alt="boat" width={1440} height={580}/>
        <div className="absolute flex bg-white py-8 pl-5 pr-7-gap-3 rounded-3xl border shadow-md:left-[5%] lg:top-20">
          <Image  className='h-full w-auto' src="/meter.svg" alt="meter" width={16} height={158}/>
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className='regular-16 text-grey-20'>Destination</p>
                <p className='bold-16 text-green-50'>48 min</p>
              </div>
              <p className='bold-20 mdt-2'>Aguas Calientes</p>
            </div>
            <div className="flex w-full flex-col">
             
                <p className='regular-16 text-grey-20'>Start track</p>
                <h4 className='bold-16 text-green-50'>
                  Wonorejo Pasuruans
                </h4>

              <p className='bold-20 mdt-2'>Aguas Calientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide