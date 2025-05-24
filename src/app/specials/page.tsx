import { menu } from '../data/data';
import Image from 'next/image';
import Link from 'next/link';
import './specials.css'; // Make sure this path is correct

const specials = menu.filter((item) => item.special === true);

export default function SpecialsPage() {
  return (
    <main>
      <section className="specials-section">
        <div className="specials-header">
          <h1>Chef&#39;s Specials</h1>
          <p>Hand-picked dishes prepared with seasonal ingredients and culinary passion.</p>
        </div>

        <div className="specials-grid">
          {specials.map((item) => (
            <div key={item.id} className="specials-item">
              <Image
                src={item.preview}
                alt={item.name}
                width={400}
                height={300}
              />
              <div className="content">
                <h3 className="title">{item.name}</h3>
                <div className="footer">
                  <span className="price">${item.price.toFixed(2)}</span>
                  <Link href={`/menu?id=${item.id}`} className="link">View →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
