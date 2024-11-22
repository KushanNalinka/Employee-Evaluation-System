import React from 'react';

const KPIModal = ({ closePopup }) => (
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
);

export default KPIModal;
