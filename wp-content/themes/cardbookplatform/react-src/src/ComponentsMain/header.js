import React, { useState, useEffect } from 'react';

const Header = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    fetch('/wp-json/wp/v2/themes/header')
      .then(res => res.json())
      .then(data => {
        setHeaderData(data);
      });
  }, []);

  return (
    <header>
      {headerData ? (
        <div dangerouslySetInnerHTML={{ __html: headerData }} />
      ) : (
        <p>Loading...</p>
      )}
    </header>
  );
};

export default Header;