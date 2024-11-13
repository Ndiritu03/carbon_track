import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

// Register necessary chart elements
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement, 
  PointElement,  // Register PointElement for line charts
  LineElement    // Register LineElement for line charts
);

const ReviewPage = () => {
  // State to handle loading
  const [loading, setLoading] = useState(true);

  // Sample data for carbon emissions
  const data = {
    monthlyEmissions: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Carbon Emissions (kg)',
          data: [120, 150, 180, 90, 110, 145],
          backgroundColor: 'rgba(34, 197, 94, 0.5)',
          borderColor: 'rgba(34, 197, 94, 1)',
          borderWidth: 1,
        },
      ],
    },
    yearlyEmissions: {
      labels: ['2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Total Carbon Emissions (kg)',
          data: [1500, 1200, 1400, 1100],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    },
    emissionSources: {
      labels: ['Transportation', 'Energy Use', 'Waste', 'Food'],
      datasets: [
        {
          label: 'Emissions by Source',
          data: [500, 700, 300, 400],
          backgroundColor: ['#34D399', '#60A5FA', '#F59E0B', '#F87171'],
        },
      ],
    },
  };

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading delay
    }, 1500); // Simulated delay for loading

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  // Show loading spinner until data is ready
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-700"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Carbon Emissions Overview
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Review your carbon emissions data and see where you can make improvements.
          </p>
        </div>

        {/* Monthly Emissions Chart */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Monthly Carbon Emissions</h2>
          <div className="mt-6">
            <Bar
              data={data.monthlyEmissions}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top' } },
              }}
            />
          </div>
        </div>

        {/* Yearly Emissions Chart */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Yearly Carbon Emissions</h2>
          <div className="mt-6">
            <Line
              data={data.yearlyEmissions}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top' } },
              }}
            />
          </div>
        </div>

        {/* Emission Sources Pie Chart */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Carbon Emissions by Source</h2>
          <div className="mt-6">
            <Pie
              data={data.emissionSources}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top' } },
              }}
            />
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600">
            Visualize your progress and understand your carbon footprint. Use these insights to reduce your emissions in key areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
