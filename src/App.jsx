import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
    import DetailView from './components/DetailView';
import Sidebar from './components/Sidebar';
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
    <Router>
      <div className="app">
        <Header />
        
        <div className="mainLayout">
          <Sidebar />
          
          <main className="container">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Dashboard 
                    spaceData={spaceData}
                    loading={loading}
                    error={error}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    dateFilter={dateFilter}
                    setDateFilter={setDateFilter}
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
                    filteredData={filteredData}
                  />
                } 
              />
              <Route 
                path="/detail/:id" 
                element={<DetailView spaceData={spaceData} />} 
              />
            </Routes>
              </main>
        </div>
        
        <Footer />
      </div>
           </Router>
  );
}

     export default App;
