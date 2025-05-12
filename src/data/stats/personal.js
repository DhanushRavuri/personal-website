import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2000-09-15T02:30:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 2,
    link: 'https://www.google.com/maps/d/edit?mid=1kRNoZNTgl7rXUzc4N0Uff2MVHiLNaGw&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Amherst, Massachusetts',
  },
  {
    key: 'Languages',
    label: 'Languages Spoken',
    value: '3',
  },
  {
    key: 'Experience',
    label: 'Years of Professional Experience',
    value: '3',
  },
  {
    key: 'Favorite Programming Language',
    label: 'Favorite Programming Language',
    value: 'Java',
  },
  {
    key: 'companies',
    label: 'Companies worked with',
    value: '3',
  },
  {
    key: 'MastersGPA',
    label: "Master's GPA",
    value: 'NA',
  },
];

export default data;
