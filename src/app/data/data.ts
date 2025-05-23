export const navs = [
    {
        id:1,
        name:'Home',
        target:'hero',
        active:true,
    },
    {
        id:2,
        name:'About',
        target:'about',
        active:false,
    },
    {
        id:3,
        name:'Menu',
        target:'menu',
        active:false,
    },
    {
        id:4,
        name:'Events',
        target:'events',
        active:false,
    },
    {
        id:5,
        name:'Gallery',
        target:'gallery',
        active:false,
    },
    {
        id:6,
        name:'Contact',
        target:'contact',
        active:false,
    },
];

export const whyUs = [
    {
        id:1,
        title:'Delicious Food',
        content:'We offer a wide variety of mouth-watering dishes made from the freshest ingredients.'
    },
    {
        id:2,
        title:'Cozy Ambience',
        content:'Enjoy your meal in a warm and inviting atmosphere perfect for any occasion.'
    },
    {
        id:3,
        title:'Excellent Service',
        content:'Our friendly staff is dedicated to providing you with the best dining experience.'
    }
];

export const menu = [
    {
        id: 1,
        name: 'Margherita Pizza',
        price: 12.99,
        preview: '/images/menu/margherita.jpg',
        ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil', 'Olive Oil'],
        category: 'main',
        description: 'Classic Italian pizza topped with fresh mozzarella, tomato sauce, and basil.'
    },
    {
        id: 2,
        name: 'Spaghetti Carbonara',
        price: 14.5,
        preview: '/images/menu/carbonara.jpg',
        ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan', 'Black Pepper'],
        category: 'main',
        description: 'Traditional Roman pasta dish with creamy egg sauce, pancetta, and parmesan.'
    },
    {
        id: 3,
        name: 'Caesar Salad',
        price: 9.75,
        preview: '/images/menu/caesar.jpg',
        ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan', 'Caesar Dressing'],
        category: 'salads',
        description: 'Crisp romaine lettuce tossed with parmesan, croutons, and Caesar dressing.'
    },
    {
        id: 4,
        name: 'Grilled Salmon',
        price: 18.0,
        preview: '/images/menu/salmon.jpg',
        ingredients: ['Salmon Fillet', 'Lemon', 'Herbs', 'Olive Oil'],
        category: 'main',
        description: 'Fresh salmon fillet grilled to perfection and served with a lemon-herb sauce.'
    },
    {
        id: 5,
        name: 'Chicken Alfredo',
        price: 13.5,
        preview: '/images/menu/alfredo.jpg',
        ingredients: ['Fettuccine', 'Chicken Breast', 'Cream', 'Parmesan', 'Garlic'],
        category: 'main',
        description: 'Creamy fettuccine Alfredo with tender grilled chicken and parmesan cheese.'
    },
    {
        id: 6,
        name: 'Beef Burger',
        price: 11.0,
        preview: '/images/menu/burger.jpg',
        ingredients: ['Beef Patty', 'Lettuce', 'Tomato', 'Cheddar', 'Bun'],
        category: 'main',
        description: 'Juicy beef burger with cheddar cheese, lettuce, and tomato on a toasted bun.'
    },
    {
        id: 7,
        name: 'Mushroom Risotto',
        price: 13.25,
        preview: '/images/menu/rizotto.jpg',
        ingredients: ['Arborio Rice', 'Mushrooms', 'Parmesan', 'White Wine', 'Onion'],
        category: 'main',
        description: 'Creamy risotto cooked with wild mushrooms, white wine, and parmesan cheese.'
    },
    {
        id: 8,
        name: 'Greek Salad',
        price: 8.5,
        preview: '/images/menu/greek-salad.jpg',
        ingredients: ['Tomato', 'Cucumber', 'Feta', 'Olives', 'Red Onion'],
        category: 'salads',
        description: 'Refreshing salad with tomatoes, cucumbers, feta cheese, olives, and red onion.'
    },
    {
        id: 9,
        name: 'Tiramisu',
        price: 6.0,
        preview: '/images/menu/tiramisu.jpg',
        ingredients: ['Mascarpone', 'Espresso', 'Ladyfingers', 'Cocoa Powder', 'Eggs'],
        category: 'desserts',
        description: 'Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone.'
    },
    {
        id: 10,
        name: 'Chocolate Lava Cake',
        price: 7.5,
        preview: '/images/menu/lava-cake.jpg',
        ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour'],
        category: 'desserts',
        description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.'
    }
];

export const filters = [
    {
        id:1,
        name:'All',
        category:'all',
        active:true,
    },
    {
        id:2,
        name:'Main',
        category:'main',
        active:false,
    },
    {
        id:3,
        name:'Salads',
        category:'salads',
        active:false,
    },
    {
        id:4,
        name:'Desserts',
        category:'desserts',
        active:false,
    },
];

export const events = [
    {
        id: 1,
        image: '/images/events/wine-night.jpg',
        title: 'Wine Tasting Night',
        price: '350 $',
        content: 'Join us for an exclusive evening of wine tasting featuring selections from local vineyards.',
        details: 'Sample a curated selection of red and white wines, paired with gourmet appetizers. Our sommelier will guide you through each tasting, sharing insights and stories behind every bottle.',
        summary: 'An elegant night for wine lovers to discover new favorites and enjoy delicious pairings.'
        },
        {
        id: 2,
        image: '/images/events/live-music.jpg',
        title: 'Live Jazz Dinner',
        price: '25 $',
        content: 'Enjoy a delicious dinner accompanied by live jazz performances from talented local musicians.',
        details: 'Our chef has prepared a special menu for the evening, perfectly complemented by smooth jazz tunes. Reserve your table for a memorable night of music and cuisine.',
        summary: 'A perfect blend of great food and live music for a relaxing evening out.'
        },
        {
        id: 3,
        image: '/images/events/kids-day.jpg',
        title: 'Family & Kids Day',
        price: '15 $',
        content: 'A fun-filled afternoon for families with games, activities, and a special kids menu.',
        details: 'Bring the whole family for interactive games, face painting, and delicious kid-friendly dishes. Parents can relax while kids enjoy supervised activities.',
        summary: 'A lively event designed for families to enjoy quality time together.'
        },
        {
        id: 4,
        image: '/images/events/cooking-class.jpg',
        title: 'Cooking Class',
        price: '40 $',
        content: 'Learn to cook authentic Italian dishes with our head chef in a hands-on workshop.',
        details: 'Participants will prepare classic Italian recipes from scratch and enjoy their creations at the end of the class. All skill levels welcome, ingredients provided.',
        summary: 'A unique culinary experience for food enthusiasts and aspiring chefs.'
    },
];

export const bookings = [
    {
        id:1,
        details: {
            name:'Example Name',
            email:'info@example.com',
            phone:'123456789',
            date:'2025-21-05',
            time:'20:45',
            people:4,
            Message:'We are a party of 4 looking for a table.'
        },
    },
];

// types/database.ts
export type Database = {
  public: {
    Tables: {
      Booking: {
        Row: {
          id: number;
          name: string;
          email: string;
          phone: string | null;
          date: string;
          time: string;
          people: number;
          message: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          email: string;
          phone?: string | null;
          date: string;
          time: string;
          people: number;
          message?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          email?: string;
          phone?: string | null;
          date?: string;
          time?: string;
          people?: number;
          message?: string | null;
          created_at?: string;
        };
      };
      // ... your other tables
    };
  };
};

export const gallery = [
    {
        id: 1,
        src: '/images/gallery/gallery-1.jpg',
        },
        {
        id: 2,
        src: '/images/gallery/gallery-2.jpg',
        },
        {
        id: 3,
        src: '/images/gallery/gallery-3.jpg',
        },
        {
        id: 4,
        src: '/images/gallery/gallery-4.jpg',
        },
        {
        id: 5,
        src: '/images/gallery/gallery-5.jpg',
        },
        {
        id: 6,
        src: '/images/gallery/gallery-6.jpg',
        },
        {
        id: 7,
        src: '/images/gallery/gallery-7.jpg',
        },
        {
        id: 8,
        src: '/images/gallery/gallery-8.jpg',
    }
]