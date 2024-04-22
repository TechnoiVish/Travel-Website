import React from 'react'
import Button from './Button'
import Image from 'next/image'
const GetApp = () => {
  return (
   <section className='fleCenter w-full flex-col pb-[100px]'>
    <div className="get-app">
      <div className="z-20  w-full flex flex-col items-start justify-center gap-12">
        <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get For Free Now!</h2>
        <p className='regular-16 text-grey-10 '>Available on iOS and Android</p>

      
      <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
      <Button type='button' title='Download App' icon='/apple.svg' variant='btn_white' full/>
      <Button type='button' title='Download App' icon='/android.svg' variant='btn_dark_green_outline' full/>
      </div>

      <div className="flex fle-1 items-center justify-end">
        <Image src="/phones.png" alt="phones" width={550} height={870}/>
      </div>
    </div>
    </div>
   </section>

  )
}

export default GetApp