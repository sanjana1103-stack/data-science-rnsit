
import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const InstitutionSection = () => {
  return (
    <section className="content-section bg-white dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">About RNSIT</h2>
          <div className="flex justify-center items-center mb-6">
            <img src="/lovable-uploads/b8eca5c3-6920-46a4-8e1d-ed60bff7a216.png" alt="RNSIT Campus" className="rounded-lg shadow-lg max-w-xs h-auto" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            RNS Institute of Technology (RNSIT), established in 2001 by the RNS Group, is among the top engineering colleges in Karnataka. 
            Known for academic excellence and a strong focus on holistic development, RNSIT has consistently produced industry-ready engineers.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To be a premier institution of higher learning that promotes excellence in education, innovation, and research.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">Mission</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-rnsit-purple dark:text-rnsit-lightPurple flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">To provide a conducive learning environment through quality education and infrastructure.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-rnsit-purple dark:text-rnsit-lightPurple flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">To inculcate ethical values and leadership qualities in students.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-rnsit-purple dark:text-rnsit-lightPurple flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">To collaborate with industry and research organizations for mutual development.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditations & Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">Accreditations & Rankings</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-rnsit-purple dark:text-rnsit-lightPurple" />
                <span className="text-gray-700 dark:text-gray-300">Affiliated to Visvesvaraya Technological University (VTU), Belagavi</span>
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-rnsit-purple dark:text-rnsit-lightPurple" />
                <span className="text-gray-700 dark:text-gray-300">Approved by AICTE, New Delhi</span>
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-rnsit-purple dark:text-rnsit-lightPurple" />
                <span className="text-gray-700 dark:text-gray-300">Accredited by NAAC with 'A+' grade</span>
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-rnsit-purple dark:text-rnsit-lightPurple" />
                <span className="text-gray-700 dark:text-gray-300">NBA Accreditation for eligible programs</span>
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-rnsit-purple dark:text-rnsit-lightPurple" />
                <span className="text-gray-700 dark:text-gray-300">Ranked among top engineering colleges in Karnataka</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">Campus Facilities</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-gray-700 dark:text-gray-300">• Smart classrooms</div>
              <div className="text-gray-700 dark:text-gray-300">• Digital library</div>
              <div className="text-gray-700 dark:text-gray-300">• Research centers</div>
              <div className="text-gray-700 dark:text-gray-300">• Hostel & Cafeteria</div>
              <div className="text-gray-700 dark:text-gray-300">• Sports complex</div>
              <div className="text-gray-700 dark:text-gray-300">• Medical services</div>
              <div className="text-gray-700 dark:text-gray-300">• Placement cell</div>
              <div className="text-gray-700 dark:text-gray-300">• Wi-Fi campus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionSection;
