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
      <span className="font-bold text-blue-600">${drink.price.toFixed(2)}</span>
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
              { id: 101, name: 'Jack Daniel\'s', price: 12 },
              { id: 102, name: 'Jameson', price: 10 },
              { id: 103, name: 'Johnnie Walker Black', price: 15 },
              { id: 104, name: 'Macallan 12', price: 18 },
              { id: 105, name: 'Bulleit Bourbon', price: 11 }
            ]
          },
          {
            id: 2,
            name: 'Brandy',
            drinks: [
              { id: 201, name: 'Hennessy VS', price: 14 },
              { id: 202, name: 'Rémy Martin VSOP', price: 16 },
              { id: 203, name: 'Courvoisier VS', price: 13 },
              { id: 204, name: 'Torres 10', price: 11 },
              { id: 205, name: 'Metaxa 5 Stars', price: 9 }
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
      className="max-w-2xl mx-auto p-4"
    >
      <motion.h2 
        className="text-2xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        Bar Menu
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
          className="bg-gray-50 rounded-lg p-6 shadow-sm"
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