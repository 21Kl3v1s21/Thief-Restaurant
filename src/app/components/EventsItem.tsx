import React from 'react';
import Image from 'next/image';
import './eventsitem.css'

export default function EventsItem({item,} : {item:{
    id:number;
    image:string;
    title:string;
    price:string;
    content:string;
    details:string[];
    summary:string;
}}) {
  return (
    <div className='row event-item'>
        <div className='col-lg-6'>
            <Image src={item.image} className='img-fluid' alt={item.title} width={600} height={400} />
        </div>
        <div className='col-lg-6 pt-4 pt-lg-0 content'>
            <h3>{item.title}</h3>
            <div className='price'>
                <p>
                    <span>{item.price}</span>
                </p>
            </div>
            <p className='fst-italic'>{item.content}</p>
            <ul>
                {item.details.length > 0 && 
                item.details.map((detail,index) => (
                    <li key={index}>
                        <i className='bi bi-check2-circle'>{detail}</i>
                    </li>
                ))}
            </ul>
            <p>{item.summary}</p>
        </div>
    </div>
  )
}
