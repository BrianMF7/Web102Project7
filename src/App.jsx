import { useState, useEffect } from 'react';
import './App.css';
  import Header from './components/Header';
    import Stats from './components/Stats';
    import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import SpaceList from './components/SpaceList';
  import Footer from './components/Footer';
import { categorizeMedia } from './utils/helpers';

function App() {
  const [spaceData, setSpaceData] = useState([]);
       const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState('');
        const [dateFilter, setDateFilter] = useState({ start: '', end: '' });
      const [categoryFilter, setCategoryFilter] = useState('all');
  
         const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;

      useEffect(() => {
    const fetchSpaceData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const today = new Date();
         const thirtyDaysAgo = new Date(today);
        thirtyDaysAgo.setDate(today.getDate() - 30);
        
         const formattedToday = today.toISOString().split('T')[0];
        const formattedThirtyDaysAgo = thirtyDaysAgo.toISOString().split('T')[0];
        
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&start_date=${formattedThirtyDaysAgo}&end_date=${formattedToday}`
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        
        const data = await response.json();
        
        const processedData = data.map(item => ({
          ...item,
          category: categorizeMedia(item.media_type, item.title)
        }));
        
        setSpaceData(processedData);
      } catch (err) {
        console.error('Error fetching space data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
           };

    fetchSpaceData();
  }, []);

  const filteredData = spaceData.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.explanation.toLowerCase().includes(searchTerm.toLowerCase());
    
    const itemDate = new Date(item.date);
          const matchesDateFilter = 
      (!dateFilter.start || new Date(dateFilter.start) <= itemDate) &&
      (!dateFilter.end || new Date(dateFilter.end) >= itemDate);
    
      const matchesCategoryFilter = 
      categoryFilter === 'all' || item.category === categoryFilter;
    
    return matchesSearch && matchesDateFilter && matchesCategoryFilter;
           });

  return (
    <div className="app">
      <Header />
      
      <main className="container">
        {loading ? (
          <div className="loading">Loading space data...</div>
                ) : error ? (
          <div className="error">Error: {error}</div>
            ) : (
          <>
            <Stats spaceData={spaceData} />
            
      <div className="dashboardControls">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Filters 
                dateFilter={dateFilter} 
                setDateFilter={setDateFilter}
                categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
              />
            </div>
            
            <SpaceList filteredData={filteredData} />
          </>
        )}
             </main>
      
      <Footer />
    </div>);}

     export default App;
