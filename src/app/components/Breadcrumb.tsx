import React from 'react';
import './breadcrumb.css';
import Link from 'next/link';

export default function Breadcrumb({page} : {page: string}) {
  return (
   <section className='breadcrumbs'>
    <div className='container'>
       <div className="d-flex justify-content-between align-items-center w-100">
        <h2 className="breadcrumb-title fs-3">{page}</h2>
        <ol className="breadcrumb-list">
            <li>
            <Link href="/">
                <i className="bi bi-house-door-fill fs-3"></i>
            </Link>
            </li>
        </ol>
        </div>
    </div>
   </section>
  )
}
