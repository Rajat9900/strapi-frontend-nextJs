"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Cards from "@/app/components/Cards";
import styles from './styles/style.module.css'

export default function Homepage() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/hero-section?populate=heroSectionImage", { cache: "no-store" });
        const data = await response.json();
        setHeroData(data.data); 
      } catch (error) {
        console.error("Error fetching hero section data:", error);
      }
    };

    fetchHeroData();
  }, []);

  if (!heroData) return null;
  const { title, description, button, heroSectionImage } = heroData
  const backgroundImageUrl = `http://localhost:1337${heroSectionImage.url}`;

  return (
    <>
      <div className="px-4">
        <Navbar />
        <div
          className="relative flex items-center justify-center h-screen text-center text-white bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
          }}
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-lg w-[50%]">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-6 font-mono">{description}</p>
            <button className="px-12 py-2 bg-orange-500 text-2xl hover:bg-orange-600 rounded-lg font-semibold text-white transition duration-300">
              {button}
            </button>
          </div>
        </div>
        <Cards/>
        <div className={styles.CoreFeatures}>
        <div className={styles.CoreFeaturess}>
          <div className={styles.CoreFeature1}>
          <h2>Core Features</h2>
          <img src="https://themewar.com/wp/dgita/images/shape.svg"/>
        </div>
        <div className={styles.CoreFeature2}>
          <img src="https://themewar.com/wp/dgita/images/features/f1.png"/>
          <h4>Elementor Page Builder</h4>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
