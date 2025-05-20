
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SyllabusPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Syllabus | RNSIT Department of CSE (Data Science)";
  }, []);

  // Sample syllabus data
  const syllabusFiles = [
    {
      semester: 1,
      year: "First Year",
      files: [
        { name: "Calculus and Linear Algebra", code: "21MAT11", size: "485 KB" },
        { name: "Engineering Physics", code: "21PHY12", size: "620 KB" },
        { name: "Elements of Civil Engineering and Mechanics", code: "21CIV13", size: "550 KB" },
        { name: "Basic Electrical Engineering", code: "21ELE14", size: "480 KB" },
        { name: "Elements of Mechanical Engineering", code: "21EME15", size: "520 KB" },
      ]
    },
    {
      semester: 2,
      year: "First Year",
      files: [
        { name: "Advanced Calculus and Numerical Methods", code: "21MAT21", size: "510 KB" },
        { name: "Engineering Chemistry", code: "21CHE22", size: "495 KB" },
        { name: "Problem Solving through Programming", code: "21PSP23", size: "520 KB" },
        { name: "Basic Electronics", code: "21ELN24", size: "470 KB" },
        { name: "Environmental Studies", code: "21EVS25", size: "380 KB" },
      ]
    },
    {
      semester: 3,
      year: "Second Year",
      files: [
        { name: "Transform Calculus, Fourier Series and Numerical Techniques", code: "21MAT31", size: "530 KB" },
        { name: "Data Structures and Algorithms", code: "21CS32", size: "675 KB" },
        { name: "Database Management Systems", code: "21CS33", size: "610 KB" },
        { name: "Computer Organization and Architecture", code: "21CS34", size: "590 KB" },
        { name: "Universal Human Values", code: "21UH35", size: "310 KB" },
      ]
    },
    {
      semester: 4,
      year: "Second Year",
      files: [
        { name: "Complex Analysis, Probability and Statistical Methods", code: "21MAT41", size: "540 KB" },
        { name: "Design and Analysis of Algorithms", code: "21CS42", size: "680 KB" },
        { name: "Operating Systems", code: "21CS43", size: "615 KB" },
        { name: "Microcontroller and Embedded Systems", code: "21CS44", size: "560 KB" },
        { name: "Object Oriented Concepts", code: "21CS45", size: "595 KB" },
      ]
    },
    {
      semester: 5,
      year: "Third Year",
      files: [
        { name: "Python for Data Science", code: "21DS51", size: "680 KB" },
        { name: "Data Mining and Data Warehousing", code: "21DS52", size: "710 KB" },
        { name: "Statistical Methods for Data Science", code: "21DS53", size: "625 KB" },
        { name: "File Structures and NoSQL Databases", code: "21DS54", size: "590 KB" },
        { name: "Computer Networks", code: "21CS55", size: "630 KB" },
      ]
    },
    {
      semester: 6,
      year: "Third Year",
      files: [
        { name: "Machine Learning", code: "21DS61", size: "750 KB" },
        { name: "Deep Learning", code: "21DS62", size: "785 KB" },
        { name: "Big Data Analytics", code: "21DS63", size: "695 KB" },
        { name: "Professional Electives - 1", code: "21DSE64X", size: "820 KB" },
        { name: "Open Elective - 1", code: "21OE65X", size: "420 KB" },
      ]
    },
    {
      semester: 7,
      year: "Fourth Year",
      files: [
        { name: "Natural Language Processing", code: "21DS71", size: "720 KB" },
        { name: "Computer Vision", code: "21DS72", size: "765 KB" },
        { name: "Professional Electives - 2", code: "21DSE73X", size: "840 KB" },
        { name: "Professional Electives - 3", code: "21DSE74X", size: "810 KB" },
        { name: "Open Elective - 2", code: "21OE75X", size: "430 KB" },
      ]
    },
    {
      semester: 8,
      year: "Fourth Year",
      files: [
        { name: "Professional Electives - 4", code: "21DSE81X", size: "830 KB" },
        { name: "Technical Seminar Guidelines", code: "21DSP82", size: "320 KB" },
        { name: "Project Guidelines", code: "21DSP83", size: "450 KB" },
        { name: "Internship Guidelines", code: "21DSI84", size: "380 KB" },
      ]
    }
  ];

  // Complete syllabus packages
  const completePackages = [
    { name: "Complete First Year Syllabus (Sem 1 & 2)", size: "4.2 MB" },
    { name: "Complete Second Year Syllabus (Sem 3 & 4)", size: "4.8 MB" },
    { name: "Complete Third Year Syllabus (Sem 5 & 6)", size: "5.5 MB" },
    { name: "Complete Fourth Year Syllabus (Sem 7 & 8)", size: "4.9 MB" },
    { name: "Complete B.E. Data Science Syllabus (All Semesters)", size: "18.5 MB" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28 pb-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Course Syllabus
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
              Download detailed syllabus for all courses offered in the B.E. Computer Science & Engineering (Data Science) program.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-8">
              Complete Syllabus Packages
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {completePackages.map((pkg, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <FileText size={24} className="text-rnsit-blue dark:text-rnsit-lightBlue" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-2">{pkg.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">File size: {pkg.size}</p>
                        <button className="inline-flex items-center text-rnsit-blue dark:text-rnsit-lightBlue hover:underline">
                          <Download size={16} className="mr-1" /> Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-3xl font-display font-bold mb-8">
              Semester-wise Syllabus
            </h2>

            <div className="space-y-10 mb-12">
              {syllabusFiles.map((sem) => (
                <div key={sem.semester} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">
                    {sem.year}: Semester {sem.semester}
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="px-4 py-2 text-left">Subject Code</th>
                          <th className="px-4 py-2 text-left">Subject Name</th>
                          <th className="px-4 py-2 text-center">Size</th>
                          <th className="px-4 py-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {sem.files.map((file) => (
                          <tr key={file.code} className="hover:bg-gray-100 dark:hover:bg-gray-750">
                            <td className="px-4 py-3">{file.code}</td>
                            <td className="px-4 py-3">{file.name}</td>
                            <td className="px-4 py-3 text-center">{file.size}</td>
                            <td className="px-4 py-3 text-center">
                              <button className="inline-flex items-center text-rnsit-blue dark:text-rnsit-lightBlue hover:underline">
                                <Download size={16} className="mr-1" /> Download
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 text-right">
                    <button className="inline-flex items-center text-rnsit-purple dark:text-rnsit-lightPurple hover:underline">
                      <Download size={16} className="mr-1" /> Download All Semester {sem.semester} Subjects
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-rnsit-blue to-rnsit-purple text-white p-8 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Need more academic resources?</h3>
                  <p className="max-w-xl">
                    Download report templates, lab manual templates, project documentation guidelines, and more.
                  </p>
                </div>
                <Link to="/templates" className="inline-flex items-center bg-white text-rnsit-blue px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  View Templates <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SyllabusPage;
