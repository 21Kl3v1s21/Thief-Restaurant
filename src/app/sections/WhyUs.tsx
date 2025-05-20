import React from 'react'
import './whyUs.css'
import WhyUsCard from '../components/WhyUsCard'
import SectionTitle from '../components/SectionTitle'
import { whyUs } from '../data/data'

export default async function WhyUs() {

  return (
     <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle title="Why Us" subtitle="Why Choose Our Restaurant" />
        <div className="row justify-content-center">
          {whyUs.map((item) => (
            <WhyUsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
