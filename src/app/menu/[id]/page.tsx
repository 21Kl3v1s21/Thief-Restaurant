import React from 'react';
import { menu } from '../../data/data';
import Breadcrumb from '@/app/components/Breadcrumb';
import Image from 'next/image';

export default function MenuSingle({ params }: { params: { id: string } }) {
  const item = menu.find((item) => item.id === Number(params.id));
  if (!item) return <h1>Menu item not found</h1>;

  return (
    <main id='main'>
      <Breadcrumb page='Menu' />
      <section className='inner-page'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <Image
                src={item.preview}
                alt={item.name}
                height={500}
                width={500}
                className='img-fluid'
              />
            </div>
            <div className='col-lg-6'>
              <h2 className='mt-3'>{item.name}</h2>
              <h4 className='mt-2'>
                <i>{item.ingredients.join(', ')}</i>
              </h4>
              <p className='mt-5'>{item.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ✅ Required by Next.js App Router for dynamic [id] routes
export async function generateStaticParams() {
  return menu.map((item) => ({
    id: item.id.toString(),
  }));
}
