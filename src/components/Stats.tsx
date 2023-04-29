import React from 'react'
import styles from '../script'
import { stats } from '../constants'
console.log(stats);

interface IProduct {
  id: string;
  title: string;
  value: string;
}

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat:IProduct)=>(
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3 `}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase mb-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats