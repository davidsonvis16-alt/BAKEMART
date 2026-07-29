import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { OpenKitchenFeature } from '../components/OpenKitchenFeature';
import { BbqPlatterFeature } from '../components/BbqPlatterFeature';

export const HomePage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <OpenKitchenFeature />
      <BbqPlatterFeature />
    </>
  );
};