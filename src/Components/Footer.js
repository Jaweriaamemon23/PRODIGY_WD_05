// Footer.js

import React, { useEffect, useState } from 'react';
import '../App.css'; // Import the CSS file

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 50; // Adjusted threshold
      setShowFooter(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${showFooter ? 'show' : ''}`}>
      <div>
        <br />
        <p style={{ color: 'white' }}>&copy;2022 — 2023 SKYSYNC ® All rights reserved</p>
      </div>
    </footer>
  );
}
