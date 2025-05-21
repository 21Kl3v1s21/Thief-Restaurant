"use client"
import React, { useState} from 'react'
import './menu.css'
import { menu, filters as initialFilters } from '../data/data'
import SectionTitle from '../components/SectionTitle'
import MenuItem from '../components/MenuItem'
import Preloader from '../components/Preloader'
import Link from 'next/link'

type MenuItemType = {
  id: number;
  name: string;
  category: string;
  preview: string;
  price: number;
  ingredients: string[];
};

export const Menu = () => {
  const [data] = useState<MenuItemType[]>(menu);
  const [items, setItems] = useState<MenuItemType[]>(menu)
  const [filters, setFilters] = useState(initialFilters)

  const handleFilterActive = (id:number) => {
    filters.map(filter => {
        filter.active = false;
        if (filter.id === id) filter.active = true;
    });
  };
  
  const handleFilterChange = (id: number, category: string) => {
    handleFilterActive(id);
    const updatedFilters = filters.map((f) => ({
      ...f,
      active: f.id === id,
    }))
    setFilters(updatedFilters)

    if (category === 'all') {
      setItems(data)
    } else {
      const filteredItems = data.filter((item) => item.category === category)
      setItems(filteredItems)
    };
  };

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Our Menu" subtitle="Check Our Amazing Menu" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-filters">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={filter.active ? 'filter-active' : ''}
                  onClick={() => handleFilterChange(filter.id, filter.category)}
                >
                  {filter.name}
                </li>
              ))}
              <Link href="/specials">
                <button className="btn-primary">See Specials</button>
              </Link>
            </ul>
          </div>
        </div>

        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
          {!items ? (
            <Preloader />
          ) : items.length > 0 ? (
            items.map((item) => <MenuItem key={item.id} item={item} />)
          ) : (
            <p className="text-center">No menu items found.</p>
          )}
        </div>
      </div>
    </section>
  )
}
