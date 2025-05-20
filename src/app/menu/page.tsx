'use client'
import { useSearchParams } from 'next/navigation'
import { menu } from '../data/data'
import Image from 'next/image'
import Breadcrumb from '@/app/components/Breadcrumb'

export default function MenuPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const item = menu.find((i) => i.id === Number(id)) ?? menu[0] // fallback

  return (
    <main id="main">
      <Breadcrumb page="Menu" />
      <section className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image
                src={item.preview}
                alt={item.name}
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="mt-3">{item.name}</h2>
              <h4 className="mt-2">
                <i>{item.ingredients.join(', ')}</i>
              </h4>
              <p className="mt-5">{item.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
