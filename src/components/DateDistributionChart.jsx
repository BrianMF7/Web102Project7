import React from 'react';
        import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

        const DateDistributionChart = ({ spaceData }) => {
  const monthData = spaceData.reduce((acc, item) => {
    const date = new Date(item.date);
    const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}`;
    
    if (!acc[monthYear]) {
      acc[monthYear] = { date: monthYear, count: 0 };
    }
    
    acc[monthYear].count++;
    return acc;
    }, {});
  
  const chartData = Object.values(monthData).sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  
  return (
    <div className="chartContainer">
      <h3>Images Published Per Day</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" name="Number of Images" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
                    };

export default DateDistributionChart;
