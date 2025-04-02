"use client"
import { useEffect, useState } from 'react';

export default function VisitCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Get current visits or start at 0
    const currentVisits = parseInt(localStorage.getItem('totalVisits') || '0');
    const newVisits = currentVisits + 1;
    
    // Update storage and state
    localStorage.setItem('totalVisits', newVisits.toString());
    setVisits(newVisits);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white p-2 rounded shadow text-xs">
      Total Visits: {visits}
    </div>
  );
}