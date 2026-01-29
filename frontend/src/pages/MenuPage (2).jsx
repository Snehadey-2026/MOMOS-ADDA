import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('veg');

  const vegMenu = [
    {
      category: 'Steam Momos',
      items: [
        { name: 'Regular',  },
        { name: 'Peri Peri',  },
        { name: 'Lemon Chilly Sprinkle',  },
        { name: 'Cheesy',  },
      ],
    },
    {
      category: 'Fried Momos',
      items: [
        { name: 'Regular',  },
        { name: 'Peri Peri', },
        { name: 'Lemon Chilly Sprinkle', },
        { name: 'Cheesy', },
      ],
    },
    {
      category: 'Kurkure Momos',
      items: [
        { name: 'Regular', },
        { name: 'Peri Peri',  },
        { name: 'Lemon Chilly Sprinkle', },
        { name: 'Cheesy', },
      ],
    },
    {
      category: 'Tandoori Momos',
      items: [
        { name: 'Tikka ', },
        { name: 'Afghani ',  },
        { name: 'Achari ',  },
        { name: 'Mix Platter ', },
      ],
    },
    {
      category: 'Pan Fried Momos',
      items: [
        { name: 'Schezwan',},
        { name: 'Chilly', },
        { name: 'Manchurian',  },
        { name: 'Smoky',  },
      ],
    },
    {
      category: 'Rice Dishes',
      items: [
        { name: 'Fried Rice', },
        { name: 'Schezwan Rice',  },
        { name: 'Chilly Garlic Rice',  },
        { name: 'Manchurian Rice',  },
      ],
    },
    {
      category: 'Noodles',
      items: [
        { name: 'Hakka Noodles',  },
        { name: 'Schezwan Noodles',  },
        { name: 'Chilly Garlic Noodles',},
        { name: 'Shanghai Noodles',},
      ],
    },
    {
      category: 'Starters',
      items: [
        { name: 'French Fry',  },
        { name: 'Crispy Chilly Potato', },
        { name: 'Chinese Bhel',  },
        { name: 'Veg Spring Roll',  },
        { name: 'Manchurian',  },
      ],
    },
    {
      category: 'Pasta',
      items: [
        { name: 'Red Sauce',},
        { name: 'White Sauce', },
        { name: 'Mix Sauce',  },
        { name: 'Spicy Mexican', },
      ],
    },
    {
      category: 'Soup',
      items: [
        { name: 'Tomato Soup',  },
        { name: 'Manchow Soup',  },
        { name: 'Hot & Sour Soup',  },
        { name: 'Lemon Coriander Soup',  },
      ],
    },
    {
      category: 'Veg Roll',
      items: [
        { name: 'Veg Roll',},
        { name: 'Veg Mayo Roll', },
        { name: 'Veg Cheese Schezwan Roll', },
        { name: 'Veg Kosha Roll', },
      ],
    },
    {
      category: 'Beverages',
      items: [
        { name: 'Soda Shikanji',  },
        { name: 'Lemonade',  },
        { name: 'Masala Colorink',},
        { name: 'Cold Coffee',},
      ],
    },
  ];

  const nonVegMenu = [
    {
      category: 'Steam Momos (Chicken)',
      items: [
        { name: 'Regular',  },
        { name: 'Peri Peri', },
        { name: 'Lemon Chilly Sprinkle',  },
        { name: 'Cheesy', },
      ],
    },
    {
      category: 'Fried Momos (Chicken)',
      items: [
        { name: 'Regular', },
        { name: 'Peri Peri', },
        { name: 'Lemon Chilly Sprinkle', },
        { name: 'Cheesy', },
      ],
    },
    {
      category: 'Kurkure Momos (Chicken)',
      items: [
        { name: 'Regular',},
        { name: 'Peri Peri', },
        { name: 'Lemon Chilly Sprinkle',  },
        { name: 'Cheesy', },
      ],
    },
    {
      category: 'Tandoori Momos (Chicken)',
      items: [
        { name: 'Tikka', },
        { name: 'Afghani',},
        { name: 'Achari', },
        { name: 'Mix Platter', },
      ],
    },
    {
      category: 'Pan Fried Momos (Chicken)',
      items: [
        { name: 'Schezwan',},
        { name: 'Chilly',  },
        { name: 'Manchurian',},
        { name: 'Smoky',  },
      ],
    },
    {
      category: 'Fried Chicken',
      items: [
        { name: 'Chicken Popcorn Regular',  },
        { name: 'Chicken Popcorn Peri Peri',},
        { name: 'Cheese Chicken Popcorn',  },
        { name: 'Crispy Fried Chicken', },
      ],
    },
    {
      category: 'Chicken Starters',
      items: [
        { name: 'Chicken Chilly', },
        { name: 'Chicken Manchurian', },
        { name: 'Chicken Hot Garlic',  },
        { name: 'Chicken Lollipop',  },
      ],
    },
    {
      category: 'Rice Dishes (Chicken)',
      items: [
        { name: 'Chicken Fried Rice',  },
        { name: 'Chicken Schezwan Rice', },
        { name: 'Chicken Manchurian Rice', },
      ],
    },
    {
      category: 'Noodles (Chicken)',
      items: [
        { name: 'Chicken Hakka Noodles',  },
        { name: 'Chicken Schezwan Noodles',  },
        { name: 'Chicken Singapore Noodles',  },
      ],
    },
    {
      category: 'Chicken Roll',
      items: [
        { name: 'Egg Roll',  },
        { name: 'Double Egg Roll',  },
        { name: 'Chicken Roll',},
        { name: 'Chicken Kosha Roll', },
      ],
    },
    {
      category: 'Soup (Chicken)',
      items: [
        { name: 'Chicken Manchow Soup',  },
        { name: 'Chicken Hot & Sour Soup',  },
        { name: 'Chicken Lemon Coriander', },
      ],
    },
    {
      category: 'Pasta (Chicken)',
      items: [
        { name: 'Chicken Red Sauce',  },
        { name: 'Chicken White Sauce', },
        { name: 'Chicken Mix Sauce', },
      ],
    },
  ];

  // Category image mapping
  const categoryImages = {
    'Steam Momos': '/AssetsMomosAdda/DISH27.jpg',
    'Fried Momos': '/AssetsMomosAdda/DISH28.jpg',
    'Kurkure Momos': '/AssetsMomosAdda/DISH29.jpg',
    'Tandoori Momos': '/AssetsMomosAdda/DISH56.jpg',
    'Pan Fried Momos': '/AssetsMomosAdda/DISH57.jpg',
    'Rice Dishes': '/AssetsMomosAdda/DISH1.jpg',
    'Noodles': '/AssetsMomosAdda/DISH2.jpg',
    'Starters': '/AssetsMomosAdda/DISH3.jpg',
    'Pasta': '/AssetsMomosAdda/DISH4.jpg',
    'Soup': '/AssetsMomosAdda/DISH5.jpg',
    'Veg Roll': '/AssetsMomosAdda/DISH6.jpg',
    'Beverages': '/AssetsMomosAdda/DISH7.jpg',
    'Steam Momos (Chicken)': '/AssetsMomosAdda/DISH8.jpg',
    'Fried Momos (Chicken)': '/AssetsMomosAdda/DISH9.jpg',
    'Kurkure Momos (Chicken)': '/AssetsMomosAdda/DISH10.jpg',
    'Tandoori Momos (Chicken)': '/AssetsMomosAdda/DISH56.jpg',
    'Pan Fried Momos (Chicken)': '/AssetsMomosAdda/DISH57.jpg',
    'Fried Chicken': '/AssetsMomosAdda/DISH11.jpg',
    'Chicken Starters': '/AssetsMomosAdda/DISH12.jpg',
    'Rice Dishes (Chicken)': '/AssetsMomosAdda/DISH1.jpg',
    'Noodles (Chicken)': '/AssetsMomosAdda/DISH2.jpg',
    'Chicken Roll': '/AssetsMomosAdda/DISH6.jpg',
    'Soup (Chicken)': '/AssetsMomosAdda/DISH5.jpg',
    'Pasta (Chicken)': '/AssetsMomosAdda/DISH4.jpg',
  };

  const MenuCard = ({ category, items }) => (
    <div
      className="glass-card"
      data-testid={`menu-card-${category.toLowerCase().replace(/ /g, '-')}`}
      style={{
        padding: '0',
        marginBottom: 'clamp(20px, 3vw, 24px)',
        transition: 'transform 0.3s ease',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      {categoryImages[category] && (
        <div
                  style={{
                    width: '100%',
                    height: 'clamp(180px, 30vw, 200px)',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#f3f4f6',
                  }}
                >
                  <img
                    src={categoryImages[category]}
                    alt={category}
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.3s ease',
                    }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
            loading="lazy"
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)',
            }}
          />
        </div>
      )}
      <div style={{ padding: 'clamp(20px, 3vw, 24px)' }}>
        <h3
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(20px, 3vw, 24px)',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#DC2626',
            wordBreak: 'break-word',
          }}
        >
          {category}
        </h3>
      <div style={{ display: 'grid', gap: '12px' }}>
        {items.map((item, index) => (
          <div
            key={index}
            data-testid={`menu-item-${item.name.toLowerCase().replace(/ /g, '-')}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 'clamp(10px, 2vw, 12px) 0',
              borderBottom: index < items.length - 1 ? '1px solid #F3F4F6' : 'none',
              gap: '12px',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 2vw, 15px)',
                color: '#374151',
                wordBreak: 'break-word',
                flex: 1,
              }}
            >
              {item.name}
            </span>
            <span
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(15px, 2.2vw, 16px)',
                fontWeight: '700',
                color: '#F97316',
                flexShrink: 0,
                marginLeft: '12px',
              }}
            >
              {item.price}
            </span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );

  return (
    <div data-testid="menu-page" style={{ marginTop: '80px' }}>
      {/* Hero Section */}
      <section
        data-testid="menu-hero"
        className="menu-hero-section"
        style={{
          backgroundImage: 'url("/AssetsMomosAdda/DISH69.jpg")',
          width: "100%",
          minHeight: "100vh",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          color: "white",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div className="container">
          <h1
            data-testid="menu-title"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
            }}
          >
            Our Menu
          </h1>
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(16px, 2vw, 20px)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Discover our delicious range of momos and more!
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding" style={{ 
        background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 50%, #FFFFFF 100%)",
      }}>
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} data-testid="menu-tabs">
            <TabsList
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '40px',
                background: '#F3F4F6',
                padding: 'clamp(6px, 1.5vw, 8px)',
                borderRadius: '50px',
                maxWidth: 'min(400px, 90vw)',
                margin: '0 auto clamp(32px, 5vw, 40px)',
                width: '100%',
              }}
            >
              <TabsTrigger
                value="veg"
                data-testid="veg-tab"
                style={{
                  flex: 1,
                  padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)',
                  borderRadius: '50px',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: activeTab === 'veg' ? 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)' : 'transparent',
                  color: activeTab === 'veg' ? 'white' : '#6B7280',
                }}
              >
                🥬 VEG
              </TabsTrigger>
              <TabsTrigger
                value="non-veg"
                data-testid="non-veg-tab"
                style={{
                  flex: 1,
                  padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)',
                  borderRadius: '50px',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: activeTab === 'non-veg' ? 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)' : 'transparent',
                  color: activeTab === 'non-veg' ? 'white' : '#6B7280',
                }}
              >
                🍗 NON-VEG
              </TabsTrigger>
            </TabsList>

            <TabsContent value="veg" data-testid="veg-menu-content">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
                  gap: 'clamp(20px, 3vw, 24px)',
                }}
              >
                {vegMenu.map((section, index) => (
                  <MenuCard key={index} category={section.category} items={section.items} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="non-veg" data-testid="non-veg-menu-content">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
                  gap: 'clamp(20px, 3vw, 24px)',
                }}
              >
                {nonVegMenu.map((section, index) => (
                  <MenuCard key={index} category={section.category} items={section.items} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
