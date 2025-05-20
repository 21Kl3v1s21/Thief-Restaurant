'use client'

import { Suspense } from 'react'
import MenuDetails from './MenuDetails'

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="text-center py-5">Loading menu...</div>}>
      <MenuDetails />
    </Suspense>
  )
}
