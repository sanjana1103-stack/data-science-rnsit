
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const StatsPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Statistics | RNSIT Department of CSE (Data Science)";
  }, []);

  // Placement statistics by year
  const placementData = [
    { year: '2021', placed: 85, offers: 92, companies: 24 },
    { year: '2022', placed: 92, offers: 105, companies: 31 },
    { year: '2023', placed: 98, offers: 124, companies: 36 },
    { year: '2024', placed: 100, offers: 142, companies: 42 }
  ];

  // Company sector distribution
  const sectorData = [
    { name: 'IT Services', value: 32 },
    { name: 'Analytics & Consulting', value: 25 },
    { name: 'Product Companies', value: 18 },
    { name: 'Fintech', value: 12 },
    { name: 'Healthcare', value: 8 },
    { name: 'Others', value: 5 }
  ];

  // Salary trends
  const salaryData = [
    { year: '2021', average: 8.2, median: 7.5, top: 18.5 },
    { year: '2022', average: 8.6, median: 7.8, top: 20.0 },
    { year: '2023', average: 9.1, median: 8.2, top: 24.5 },
    { year: '2024', average: 10.4, median: 9.0, top: 28.0 }
  ];

  // Research publication data
  const researchData = [
    { year: '2021', journals: 8, conferences: 12, projects: 6 },
    { year: '2022', journals: 13, conferences: 18, projects: 9 },
    { year: '2023', journals: 17, conferences: 22, projects: 14 },
    { year: '2024', journals: 21, conferences: 26, projects: 19 }
  ];

  // Student skill distribution
  const skillsData = [
    { name: 'Python', students: 98 },
    { name: 'Machine Learning', students: 85 },
    { name: 'Data Analysis', students: 90 },
    { name: 'Deep Learning', students: 72 },
    { name: 'Big Data', students: 65 },
    { name: 'Cloud Computing', students: 60 },
    { name: 'NLP', students: 45 },
    { name: 'Computer Vision', students: 40 }
  ];

  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28 pb-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Department Statistics
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4">
              Explore key statistics and metrics about our Department of CSE (Data Science), including placements, 
              research output, and student achievements.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-10 text-center">
              Placement Statistics
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                  Placement Trends (2021-2024)
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={placementData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="placed" name="Students Placed (%)" fill="#8884d8" />
                      <Bar dataKey="offers" name="Total Offers" fill="#82ca9d" />
                      <Bar dataKey="companies" name="Companies Visited" fill="#ffc658" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                    <p className="text-xl font-bold text-rnsit-blue dark:text-rnsit-lightBlue">100%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Placement Rate</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                    <p className="text-xl font-bold text-rnsit-purple dark:text-rnsit-lightPurple">142</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Offers in 2024</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                    <p className="text-xl font-bold text-green-600 dark:text-green-400">42</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Companies</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                  Company Sector Distribution
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sectorData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {sectorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                    <p className="text-xl font-bold text-rnsit-blue dark:text-rnsit-lightBlue">40+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Different Companies Recruited in 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-16">
              <h3 className="text-xl font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                Salary Trends (2021-2024) in LPA
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={salaryData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="average" name="Average Salary (LPA)" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="median" name="Median Salary (LPA)" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="top" name="Highest Salary (LPA)" stroke="#ff7300" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                  <p className="text-xl font-bold text-rnsit-blue dark:text-rnsit-lightBlue">10.4 LPA</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Average Package (2024)</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                  <p className="text-xl font-bold text-rnsit-purple dark:text-rnsit-lightPurple">9.0 LPA</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Median Package (2024)</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                  <p className="text-xl font-bold text-green-600 dark:text-green-400">28 LPA</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Highest Package (2024)</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mb-10 text-center">
              Research & Academic Metrics
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                  Research Output (2021-2024)
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={researchData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="journals" name="Journal Publications" fill="#8884d8" />
                      <Bar dataKey="conferences" name="Conference Papers" fill="#82ca9d" />
                      <Bar dataKey="projects" name="Funded Projects" fill="#ffc658" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                    <p className="text-xl font-bold text-rnsit-blue dark:text-rnsit-lightBlue">59</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Journal Articles</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                    <p className="text-xl font-bold text-rnsit-purple dark:text-rnsit-lightPurple">78</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Conference Papers</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                    <p className="text-xl font-bold text-green-600 dark:text-green-400">48</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Research Projects</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                  Student Skill Distribution
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      layout="vertical"
                      data={skillsData}
                      margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="students" name="Proficient Students (%)" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                    <p className="text-xl font-bold text-rnsit-blue dark:text-rnsit-lightBlue">85%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Students with Industry-Certified Skills</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rnsit-blue to-rnsit-purple text-white p-8 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">Key Department Achievements</h3>
                  <ul className="space-y-2 opacity-90">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span> 100% placement record for the past 3 consecutive years
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span> 28 LPA highest salary package in 2024, a 35% increase from 2021
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span> 59 research papers published in peer-reviewed journals
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span> 12 international research collaborations established
                    </li>
                  </ul>
                </div>
                <img 
                  src="/lovable-uploads/65dc1bc3-79eb-4fe4-8faf-f5000270919f.png"
                  alt="Achievement Badge" 
                  className="h-32 w-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StatsPage;
