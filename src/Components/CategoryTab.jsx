import React, { useState } from 'react';

const CategoryTab = () => {
  const [activePopup, setActivePopup] = useState(null); // Track which popup is active

  const closePopup = () => setActivePopup(null); // Function to close the popup

  return (
    <div>
      {/* Button Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-orange-300 px-4 py-2 rounded"
          onClick={() => setActivePopup('KPI')}
        >
          KPI
        </button>
        <button
          className="bg-green-300 px-4 py-2 rounded"
          onClick={() => setActivePopup('Competencies')}
        >
          Competencies
        </button>
        <button
          className="bg-blue-300 px-4 py-2 rounded"
          onClick={() => setActivePopup('CareerDevelopment')}
        >
          Career Development
        </button>
        <button
          className="bg-pink-300 px-4 py-2 rounded"
          onClick={() => setActivePopup('HRAspects')}
        >
          HR Aspects
        </button>
      </div>

      {/* Popups */}
      {activePopup === 'KPI' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">KPI Popup</h2>
            <p>This is the content for the KPI popup.</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {activePopup === 'Competencies' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Competencies Popup</h2>
            <p>This is the content for the Competencies popup.</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {activePopup === 'CareerDevelopment' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Career Development Popup</h2>
            <p>This is the content for the Career Development popup.</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {activePopup === 'HRAspects' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">HR Aspects Popup</h2>
            <p>This is the content for the HR Aspects popup.</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryTab;
