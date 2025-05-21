import { menu } from '../data/data';
import Image from 'next/image';
import Link from 'next/link';

const specials = menu.filter((item) => item.id <= 3); 

export default function SpecialsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 px-4">
      </section>

      {/* Specials Grid */}
      <section className="py-16 px-4 bg-[#152328] text-[#1f333d]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Chef&#39;s Specials</h1>
          <p className="text-lg text-gray-300">
            Hand-picked dishes prepared with seasonal ingredients and culinary passion.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {specials.map((item) => (
            <div
                key={item.id}
                className="gap-2"
                >
                <Image
                    src={item.preview}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4 text-sm">
                    <h3 className="text-lg font-semibold mb-2 text-[#1f333d]">{item.name}</h3>
                    <p className="text-xs text-gray-600 italic mb-2">
                    </p>
                    <div className="flex items-center justify-between">
                    <span className="font-bold text-base">${item.price.toFixed(2)}</span>
                    <Link
                        href={`/menu?id=${item.id}`}
                        className="text-[#d77a61] font-medium text-sm hover:underline m-2"
                    >
                        View →
                    </Link>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
