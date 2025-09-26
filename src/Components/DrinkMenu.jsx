import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DrinkItem = ({ drink }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center p-3 bg-white rounded-md shadow-xs hover:bg-gray-100 transition-colors"
    >
      <span className="text-gray-800">{drink.name}</span>
      <span className="font-bold text-blue-600">₦{drink.price.toFixed(2)}</span>
    </motion.li>
  );
};

const DrinkMenu = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [containerRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const fetchDrinkCategories = async () => {
      try {
        setIsLoading(true);
        
        // const res = await fetch(`${baseUrl}`)
        // const data = res.json()

        const mockData = [
  {
    id: 1,
    name: 'Whiskey',
    drinks: [
      { id: 101, name: "Jack Daniel's", price: 7200 },
      { id: 102, name: 'Jameson', price: 6000 },
      { id: 103, name: 'Johnnie Walker Black', price: 9000 },
      { id: 104, name: 'Macallan 12', price: 10800 },
      { id: 105, name: 'Bulleit Bourbon', price: 6600 },
      { id: 106, name: 'Chivas Regal 12', price: 8500 }
    ]
  },
  {
    id: 2,
    name: 'Brandy',
    drinks: [
      { id: 201, name: 'Hennessy VS', price: 8400 },
      { id: 202, name: 'Rémy Martin VSOP', price: 9600 },
      { id: 203, name: 'Courvoisier VS', price: 7800 },
      { id: 204, name: 'Torres 10', price: 6600 },
      { id: 205, name: 'Metaxa 5 Stars', price: 5400 }
    ]
  },
  {
    id: 3,
    name: 'Beers & Malt Drinks',
    drinks: [
      { id: 301, name: 'Star Lager', price: 1200 },
      { id: 302, name: 'Star Radler', price: 1300 },
      { id: 303, name: 'Guinness', price: 1500 },
      { id: 304, name: 'Trophy Lager', price: 1000 },
      { id: 305, name: 'Heineken', price: 1800 },
      { id: 306, name: 'Maltina', price: 600 },
      { id: 307, name: 'Amstel Malta', price: 650 },
      { id: 308, name: 'Orijin', price: 2000 },
      { id: 309, name: 'Gulder', price: 1400 },
      { id: 310, name: 'Fayrouz', price: 700 },
      { id: 311, name: 'Harp Lager', price: 1300 },
      { id: 312, name: 'Budweiser', price: 1500 },
      { id: 313, name: 'Smirnoff Ice', price: 2000 },
      { id: 314, name: 'Heineken 0.0', price: 1700 },
      { id: 315, name: 'Star Lite', price: 1200 },
      { id: 316, name: 'Trophy Stout', price: 1100 },
      { id: 317, name: 'Malta Guinness', price: 650 },
      { id: 318, name: 'Castle Lager', price: 1400 },
      { id: 319, name: 'Kingfisher', price: 1800 },
      { id: 320, name: 'Bud Light', price: 1600 }
    ]
  },
  {
    id: 4,
    name: 'Pepper Soup & Finger Foods',
    drinks: [
      { id: 401, name: 'Goat Meat Pepper Soup', price: 3500 },
      { id: 402, name: 'Fish Pepper Soup', price: 3000 },
      { id: 403, name: 'Chicken Pepper Soup', price: 2800 },
      { id: 404, name: 'Suya (Beef Skewers)', price: 1200 },
      { id: 405, name: 'Assorted Meat Fingers', price: 1500 },
      { id: 406, name: 'Spicy Chicken Fingers', price: 1400 },
      { id: 407, name: 'Grilled Sausage Fingers', price: 1300 }
    ]
  },
  {
    id: 5,
    name: 'Shawarma & Snacks',
    drinks: [
      { id: 501, name: 'Chicken Shawarma', price: 2000 },
      { id: 502, name: 'Beef Shawarma', price: 2200 },
      { id: 503, name: 'French Fries', price: 800 },
      { id: 504, name: 'Chicken Wings', price: 1500 },
      { id: 505, name: 'Spring Rolls', price: 1000 },
      { id: 506, name: 'Cheese Shawarma', price: 2300 },
      { id: 507, name: 'Mixed Shawarma Platter', price: 3500 }
    ]
  }
];

        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setCategories(mockData);
        setSelectedCategory(mockData[0]?.name || '');
        setError(null);
      } catch (err) {
        setError('Failed to load drink menu. Please try again later.');
        console.error('Error fetching drink categories:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDrinkCategories();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const selectedCategoryData = categories.find(
    cat => cat.name === selectedCategory
  );

  const sortedDrinks = selectedCategoryData?.drinks 
    ? [...selectedCategoryData.drinks].sort((a, b) => 
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      )
    : [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-3 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-2"
    >
      <motion.h2 
        className="text-2xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
         <span className='text-[#767DEB]'>IQ Hive</span> Menu
      </motion.h2>
      
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select Drink Category:
        </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </motion.div>

      {selectedCategoryData && (
        <motion.div
          className="bg-gray-50 rounded-lg lg:p-6 p-2 shadow-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-700">{selectedCategoryData.name}</h3>
            <motion.button 
              onClick={toggleSortOrder}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition-colors"
            >
              Price
              {sortOrder === 'asc' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </motion.button>
          </div>

          <ul className="space-y-3">
            <AnimatePresence>
              {sortedDrinks.map((drink) => (
                <DrinkItem key={drink.id} drink={drink} />
              ))}
            </AnimatePresence>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DrinkMenu;