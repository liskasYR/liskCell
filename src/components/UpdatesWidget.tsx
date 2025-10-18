// src/components/UpdatesWidget.tsx
import React from 'react';

const sampleUpdates = [
  "🆕 גרסה 1.5 של LiskCell זמינה!",
  "עדכון קרוב: תוספת שירים חדשים",
  "בדיקת באגים ותיקונים כלליים"
];

const UpdatesWidget: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 bg-gray-900 bg-opacity-90 text-white border border-gray-700 rounded-lg p-4 w-64 z-50 shadow-lg">
      <h3 className="text-lg font-semibold text-blue-400 mb-2">עדכונים</h3>
      <ul className="list-disc pl-4 space-y-1">
        {sampleUpdates.map((u, idx) => (
          <li key={idx} className="text-sm">{u}</li>
        ))}
      </ul>
    </div>
  );
};

export default UpdatesWidget;
