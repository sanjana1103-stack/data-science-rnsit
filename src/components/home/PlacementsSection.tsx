
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, ArrowRight, Download, TrendingUp } from 'lucide-react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend, 
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from 'recharts';

const PlacementsSection = () => {
  // Sample placement data
  const placementStats = {
    averageSalary: "8.5 LPA",
    highestSalary: "24 LPA",
    placementRate: "98%",
    internshipOpportunities: "100+",
    yearOnYearGrowth: "12%"
  };

  // Sample company logos
  const companies = [
    { name: "TCS", students: 25 },
    { name: "Infosys", students: 20 },
    { name: "Accenture", students: 18 },
    { name: "IBM", students: 15 },
    { name: "Capgemini", students: 14 },
    { name: "Cognizant", students: 12 },
    { name: "Wipro", students: 10 },
    { name: "Others", students: 6 }
  ];

  // Pie chart data
  const pieData = companies.map(company => ({
    name: company.name,
    value: company.students
  }));

  // Bar chart data for salary trends
  const salaryData = [
    { year: '2021', avgSalary: 6.2 },
    { year: '2022', avgSalary: 7.1 },
    { year: '2023', avgSalary: 7.8 },
    { year: '2024', avgSalary: 8.5 }
  ];

  // Colors for pie chart
  const COLORS = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F97316', '#6366F1', '#14B8A6', '#8B5CF6'];

  return (
    <section className="content-section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Placements & Internships</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our department takes pride in its exceptional placement record and strong industry connections, 
            providing students with promising career opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-display font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
              Placement Highlights
            </h3>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Average Package</p>
                <p className="text-3xl font-bold text-rnsit-blue dark:text-rnsit-lightBlue">{placementStats.averageSalary}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Highest Package</p>
                <p className="text-3xl font-bold text-rnsit-purple dark:text-rnsit-lightPurple">{placementStats.highestSalary}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Placement Rate</p>
                <p className="text-3xl font-bold text-rnsit-blue dark:text-rnsit-lightBlue">{placementStats.placementRate}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">YoY Growth</p>
                <div className="flex items-center">
                  <p className="text-3xl font-bold text-rnsit-purple dark:text-rnsit-lightPurple">{placementStats.yearOnYearGrowth}</p>
                  <TrendingUp size={20} className="ml-2 text-green-500" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4">Salary Trend (2021-2024)</h4>
              <div className="h-64 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salaryData}>
                    <XAxis dataKey="year" />
                    <YAxis label={{ value: 'Avg. Salary (LPA)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip 
                      formatter={(value) => [`${value} LPA`, 'Average Salary']}
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none' }}
                    />
                    <Bar dataKey="avgSalary" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <Link 
                to="/placements" 
                className="flex items-center px-4 py-2 bg-rnsit-blue dark:bg-rnsit-lightBlue text-white dark:text-gray-900 rounded-lg hover:bg-rnsit-blue/90 dark:hover:bg-rnsit-lightBlue/90 transition"
              >
                <BarChart3 size={18} className="mr-2" /> View Detailed Stats
              </Link>
              <Link 
                to="/placements/resources" 
                className="flex items-center px-4 py-2 border border-rnsit-blue dark:border-rnsit-lightBlue text-rnsit-blue dark:text-rnsit-lightBlue rounded-lg hover:bg-rnsit-blue/10 dark:hover:bg-rnsit-lightBlue/10 transition"
              >
                <Download size={18} className="mr-2" /> Resume Templates
              </Link>
            </div>
          </div>

          <div className="animate-fade-in-left">
            <h3 className="text-xl font-display font-semibold mb-6 text-center">
              Company-wise Placements (2024)
            </h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      labelLine={false}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} Students`, 'Placed']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-display font-semibold mb-4">
                Top Recruiting Companies
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {/* Company logos would be displayed here */}
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center h-20">
                  <span className="text-center text-gray-700 dark:text-gray-300 font-medium">TCS</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center h-20">
                  <span className="text-center text-gray-700 dark:text-gray-300 font-medium">Infosys</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center h-20">
                  <span className="text-center text-gray-700 dark:text-gray-300 font-medium">Accenture</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center h-20">
                  <span className="text-center text-gray-700 dark:text-gray-300 font-medium">IBM</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center h-20">
                  <span className="text-center text-gray-700 dark:text-gray-300 font-medium">Capgemini</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center h-20">
                  <span className="text-center text-gray-700 dark:text-gray-300 font-medium">Cognizant</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center h-20">
                  <span className="text-center text-gray-700 dark:text-gray-300 font-medium">Wipro</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center h-20">
                  <span className="text-center text-gray-700 dark:text-gray-300 font-medium">More...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
