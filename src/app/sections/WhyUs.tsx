import React from 'react'
import './whyUs.css'
import WhyUsCard from '../components/WhyUsCard'
import SectionTitle from '../components/SectionTitle'

type WhyUsItem = {
  id: number
  title: string
  content: string
}

async function getWhyUsData() {
  const res = await fetch('http://localhost:3000/api/whyus')
  return res.json()
}

export default async function WhyUs() {
  const items: WhyUsItem[] = await getWhyUsData()

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle title="Why Us" subtitle="Why Choose Our Restaurant" />
        <div className="row justify-content-center">
          {items?.length > 0 &&
            items.map((item) => <WhyUsCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  )
}
