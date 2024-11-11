export async function getHeroSectionData() {
    const res = await fetch("http://localhost:1337/api/hero-section?populate=*");
    return res.json();
  }
  