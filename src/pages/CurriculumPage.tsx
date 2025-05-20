
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, Book, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CurriculumPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Curriculum | RNSIT Department of CSE (Data Science)";
  }, []);

  // Sample curriculum data
  const semesters = [
    {
      semester: 1,
      courses: [
        { code: "21MAT11", title: "Calculus and Linear Algebra", credits: 3 },
        { code: "21PHY12", title: "Engineering Physics", credits: 3 },
        { code: "21CIV13", title: "Elements of Civil Engineering and Mechanics", credits: 3 },
        { code: "21ELE14", title: "Basic Electrical Engineering", credits: 3 },
        { code: "21EME15", title: "Elements of Mechanical Engineering", credits: 3 },
        { code: "21PHYL16", title: "Engineering Physics Laboratory", credits: 1 },
        { code: "21ELEL17", title: "Basic Electrical Engineering Laboratory", credits: 1 },
        { code: "21EGH18", title: "Technical English-I", credits: 1 }
      ]
    },
    {
      semester: 2,
      courses: [
        { code: "21MAT21", title: "Advanced Calculus and Numerical Methods", credits: 3 },
        { code: "21CHE22", title: "Engineering Chemistry", credits: 3 },
        { code: "21PSP23", title: "Problem Solving through Programming", credits: 3 },
        { code: "21ELN24", title: "Basic Electronics", credits: 3 },
        { code: "21EVS25", title: "Environmental Studies", credits: 2 },
        { code: "21CHEL26", title: "Engineering Chemistry Laboratory", credits: 1 },
        { code: "21PSPL27", title: "Problem Solving through Programming Laboratory", credits: 1 },
        { code: "21EGH28", title: "Technical English-II", credits: 1 }
      ]
    },
    {
      semester: 3,
      courses: [
        { code: "21MAT31", title: "Transform Calculus, Fourier Series and Numerical Techniques", credits: 3 },
        { code: "21CS32", title: "Data Structures and Algorithms", credits: 3 },
        { code: "21CS33", title: "Database Management Systems", credits: 3 },
        { code: "21CS34", title: "Computer Organization and Architecture", credits: 3 },
        { code: "21UH35", title: "Universal Human Values", credits: 1 },
        { code: "21KSK36", title: "Samskrutika Kannada / Constitution of India", credits: 1 },
        { code: "21CSL37", title: "Data Structures Laboratory", credits: 1 },
        { code: "21CSL38", title: "Database Management Systems Laboratory", credits: 1 }
      ]
    },
    {
      semester: 4,
      courses: [
        { code: "21MAT41", title: "Complex Analysis, Probability and Statistical Methods", credits: 3 },
        { code: "21CS42", title: "Design and Analysis of Algorithms", credits: 3 },
        { code: "21CS43", title: "Operating Systems", credits: 3 },
        { code: "21CS44", title: "Microcontroller and Embedded Systems", credits: 3 },
        { code: "21CS45", title: "Object Oriented Concepts", credits: 3 },
        { code: "21CSL46", title: "Design and Analysis of Algorithms Laboratory", credits: 1 },
        { code: "21CSL47", title: "Operating Systems Laboratory", credits: 1 },
        { code: "21EGH48", title: "Ability Enhancement Course - IV", credits: 1 }
      ]
    },
    {
      semester: 5,
      courses: [
        { code: "21DS51", title: "Python for Data Science", credits: 4 },
        { code: "21DS52", title: "Data Mining and Data Warehousing", credits: 4 },
        { code: "21DS53", title: "Statistical Methods for Data Science", credits: 4 },
        { code: "21DS54", title: "File Structures and NoSQL Databases", credits: 3 },
        { code: "21CS55", title: "Computer Networks", credits: 3 },
        { code: "21DSL56", title: "Data Science Laboratory", credits: 1.5 },
        { code: "21CSL57", title: "Computer Networks Laboratory", credits: 1.5 },
        { code: "21UHV58", title: "Environmental Studies", credits: 1 }
      ]
    },
    {
      semester: 6,
      courses: [
        { code: "21DS61", title: "Machine Learning", credits: 4 },
        { code: "21DS62", title: "Deep Learning", credits: 4 },
        { code: "21DS63", title: "Big Data Analytics", credits: 4 },
        { code: "21DSE64X", title: "Professional Elective - 1", credits: 3 },
        { code: "21OE65X", title: "Open Elective - 1", credits: 3 },
        { code: "21DSL66", title: "Machine Learning Laboratory", credits: 1.5 },
        { code: "21DSL67", title: "Big Data Analytics Laboratory", credits: 1.5 },
        { code: "21DSP68", title: "Mini Project", credits: 1 }
      ]
    },
    {
      semester: 7,
      courses: [
        { code: "21DS71", title: "Natural Language Processing", credits: 4 },
        { code: "21DS72", title: "Computer Vision", credits: 4 },
        { code: "21DSE73X", title: "Professional Elective - 2", credits: 3 },
        { code: "21DSE74X", title: "Professional Elective - 3", credits: 3 },
        { code: "21OE75X", title: "Open Elective - 2", credits: 3 },
        { code: "21DSL76", title: "Data Visualization Laboratory", credits: 2 },
        { code: "21DSP77", title: "Project Phase - 1", credits: 1 },
        { code: "21UHV78", title: "Indian Constitution and Professional Ethics", credits: 1 }
      ]
    },
    {
      semester: 8,
      courses: [
        { code: "21DSE81X", title: "Professional Elective - 4", credits: 3 },
        { code: "21DSP82", title: "Technical Seminar", credits: 1 },
        { code: "21DSP83", title: "Project Phase - 2", credits: 8 },
        { code: "21DSI84", title: "Internship", credits: 3 }
      ]
    }
  ];

  // Professional Electives
  const professionalElectives = [
    { 
      title: "Professional Elective - 1",
      courses: [
        { code: "21DSE641", title: "Reinforcement Learning" },
        { code: "21DSE642", title: "Time Series Analysis" },
        { code: "21DSE643", title: "Business Intelligence" },
        { code: "21DSE644", title: "Data Structures for Data Science" }
      ]
    },
    { 
      title: "Professional Elective - 2",
      courses: [
        { code: "21DSE731", title: "Recommender Systems" },
        { code: "21DSE732", title: "Cloud Computing" },
        { code: "21DSE733", title: "Social Network Analysis" },
        { code: "21DSE734", title: "Edge Computing" }
      ]
    },
    { 
      title: "Professional Elective - 3",
      courses: [
        { code: "21DSE741", title: "Computational Biology" },
        { code: "21DSE742", title: "IoT Analytics" },
        { code: "21DSE743", title: "Financial Engineering" },
        { code: "21DSE744", title: "Healthcare Analytics" }
      ]
    },
    { 
      title: "Professional Elective - 4",
      courses: [
        { code: "21DSE811", title: "Quantum Computing" },
        { code: "21DSE812", title: "Advanced Deep Learning" },
        { code: "21DSE813", title: "Explainable AI" },
        { code: "21DSE814", title: "Ethics in AI and Data Science" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28 pb-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Curriculum Structure
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
              The B.E. in Computer Science & Engineering (Data Science) program is designed to equip
              students with both theoretical knowledge and practical skills in the field of data science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/academics/syllabus" className="inline-flex items-center bg-rnsit-blue dark:bg-rnsit-lightBlue text-white px-6 py-3 rounded-lg hover:bg-rnsit-blue/90 dark:hover:bg-rnsit-lightBlue/90 transition">
                <Download size={18} className="mr-2" /> Download Syllabus
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-8">
              Program Structure
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Program Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Degree Awarded</span>
                    <span>Bachelor of Engineering (B.E.)</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Duration</span>
                    <span>4 years (8 semesters)</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Total Credits</span>
                    <span>160</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-medium">University</span>
                    <span>Visvesvaraya Technological University (VTU)</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Credit Distribution</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Basic Sciences & Mathematics</span>
                    <span>25 credits</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Engineering Core Subjects</span>
                    <span>43 credits</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Data Science Core Subjects</span>
                    <span>54 credits</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Professional & Open Electives</span>
                    <span>24 credits</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-medium">Projects & Internship</span>
                    <span>14 credits</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold mb-6">Semester-wise Course Structure</h2>
              
              <div className="space-y-8">
                {semesters.map((sem) => (
                  <div key={sem.semester} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">
                      Semester {sem.semester}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-100 dark:bg-gray-700">
                            <th className="px-4 py-2 text-left">Course Code</th>
                            <th className="px-4 py-2 text-left">Course Title</th>
                            <th className="px-4 py-2 text-center">Credits</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          {sem.courses.map((course) => (
                            <tr key={course.code} className="hover:bg-gray-100 dark:hover:bg-gray-750">
                              <td className="px-4 py-3">{course.code}</td>
                              <td className="px-4 py-3">{course.title}</td>
                              <td className="px-4 py-3 text-center">{course.credits}</td>
                            </tr>
                          ))}
                          <tr className="bg-gray-100 dark:bg-gray-700 font-medium">
                            <td className="px-4 py-2" colSpan={2}>Total Credits</td>
                            <td className="px-4 py-2 text-center">
                              {sem.courses.reduce((total, course) => total + course.credits, 0)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold mb-6">Professional Electives</h2>
              
              <div className="space-y-6">
                {professionalElectives.map((elective, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4 text-rnsit-purple dark:text-rnsit-lightPurple">
                      {elective.title}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {elective.courses.map((course) => (
                        <div key={course.code} className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <p className="font-medium">{course.code}</p>
                          <p className="text-gray-700 dark:text-gray-300">{course.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/academics/syllabus" className="inline-flex items-center bg-rnsit-blue dark:bg-rnsit-lightBlue text-white px-6 py-3 rounded-lg hover:bg-rnsit-blue/90 dark:hover:bg-rnsit-lightBlue/90 transition">
                <Book size={18} className="mr-2" /> Download Detailed Syllabus
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CurriculumPage;
