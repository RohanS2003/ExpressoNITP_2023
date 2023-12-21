import React, { useEffect, useState } from 'react';
import "./Footer.css"

function VisitCounter() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Function to update and display the visit count
    function updateVisitCount() {
      let visitCount = localStorage.getItem('visitCount');
      if (!visitCount) {
        visitCount = 1;
      } else {
        visitCount = parseInt(visitCount) + 1;
      }

      localStorage.setItem('visitCount', visitCount);
      setVisitCount(visitCount);
    }

    updateVisitCount();
  }, []);

  return (
    <div className="counter-container">
      <h1 id="count">Total Website Visits: <span id="visit-count">{visitCount}</span></h1>
      
    </div>
  );
}

export default VisitCounter;