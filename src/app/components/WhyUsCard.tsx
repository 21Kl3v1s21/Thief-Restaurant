'use client'
import React, { useRef } from 'react'

type Props = {
  item: {
    id: number
    title: string
    content: string
  }
}

export default function WhyUsCard({ item }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    card.style.setProperty('--x', `${x}%`)
    card.style.setProperty('--y', `${y}%`)
  }

  return (
    <div
      className="col-md-6 col-lg-4 d-flex"
      onMouseMove={handleMouseMove}
    >
      <div className="box w-100" ref={cardRef}>
        <span className='gradient-text'>{item.id.toString().padStart(2, '0')}</span>
        <h4 className='gradient-text'>{item.title}</h4>
        <p className='gradient-text'>{item.content}</p>
      </div>
    </div>
  )
}
