import React from 'react';
    import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const CategoryChart = ({ spaceData }) => {
  const categoryData = spaceData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category]++;
    return acc;
  }, {});
  
  const chartData = Object.keys(categoryData).map(category => ({
    name: category.charAt(0).toUpperCase() + category.slice(1), // Capitalize category name
    value: categoryData[category]
          }));

             const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#FF6B6B', '#4CAF50'];
  
  return (
    <div className="chartContainer">
      <h3>Space Images by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} items`, 'Count']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
                      </div>
             );
    };

export default CategoryChart;
