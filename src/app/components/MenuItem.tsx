import React from 'react';
import './menuItem.css';
import Link from 'next/link';
import Image from 'next/image';


export default function MenuItem ({item,} : {item:{id:number; name:string; preview:string; price:number; ingredients:string[];}})  {
  return (
    <div className='col-lg-6 menu-item'>
        <Image src={item.preview} alt="" className='menu-img' width={70} height={70}/>
        <div className='menu-content'>
            <Link href={`/menu?id=${item.id}`}>{item.name}</Link>
            <span>${item.price}</span>
        </div>
        <div className="menu-ingredients">{item.ingredients.join(', ')}</div>
    </div>
    
  )
}
