import React from 'react';

function Sidebar({ step }) {
  return (
    <aside className="sidebar">
      <ul>
        <li className={step > 1 ? 'completed' : step === 1 ? 'active' : ''}>
          <span>{step > 1 ? '✔' : step === 1 ? '→' : '1'}</span> Basic Information
        </li>
        <li className={step > 2 ? 'completed' : step === 2 ? 'active' : ''}>
          <span>{step > 2 ? '✔' : step === 2 ? '→' : '2'}</span> Stay and Duration
        </li>
        <li className={step === 3 ? 'current' : ''}>
          <span>{step === 3 ? '→' : '3'}</span> Transportation
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
