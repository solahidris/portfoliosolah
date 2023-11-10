import React, { useState, useEffect } from 'react';

const ProfileCards = () => {
  const [imageURLs, setImageURLs] = useState<string[]>([]);

  useEffect(() => {
    // URLs of the images from GitHub Profile Summary Cards
    const imagePaths = [
      '0-profile-details.svg',
      '1-repos-per-language.svg',
      '2-most-commit-language.svg',
      '3-stats.svg',
      '4-productive-time.svg',
    ];

    const loadImages = async () => {
      const images: string[] = [];

      for (const path of imagePaths) {
        try {
          // const response = await fetch(`https://raw.githubusercontent.com/solahidris/solahidris/master/profile-summary-card-output/react/${path}`);
          const response = await fetch(`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username={solahidris}&theme={2077}`);
          if (response.ok) {
            const blob = await response.blob();
            const objectURL = URL.createObjectURL(blob);
            images.push(objectURL);
          }
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      }

      setImageURLs(images);
    };

    loadImages();
  }, []);

  return (
    <div>
      {imageURLs.map((url, index) => (
        <img key={index} src={url} alt={`Profile Image ${index}`} />
      ))}
    </div>
  );
};

export default ProfileCards;
