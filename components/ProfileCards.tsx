import React, { useState, useEffect } from 'react';

const ProfileCards = () => {
  const [profileImage, setProfileImage] = useState<string>('');
  const [reposPerLanguageImage, setReposPerLanguageImage] = useState<string>('');
  const [mostCommitLanguageImage, setMostCommitLanguageImage] = useState<string>('');
  const [statsImage, setStatsImage] = useState<string>('');
  const [productiveTimeImage, setProductiveTimeImage] = useState<string>('');

  useEffect(() => {
    const fetchGitHubCards = async () => {
      try {
        // Fetch Profile Details image
        const profileResponse = await fetch('/api/profile-details');
        if (profileResponse.ok) {
          const profileBlob = await profileResponse.blob();
          const profileObjectURL = URL.createObjectURL(profileBlob);
          setProfileImage(profileObjectURL);
        } else {
          console.error('Failed to fetch profile image');
        }

        // Fetch Repos Per Language image
        const reposPerLanguageResponse = await fetch('/api/profile-languages-repo');
        if (reposPerLanguageResponse.ok) {
          const reposPerLanguageBlob = await reposPerLanguageResponse.blob();
          const reposPerLanguageObjectURL = URL.createObjectURL(reposPerLanguageBlob);
          setReposPerLanguageImage(reposPerLanguageObjectURL);
        } else {
          console.error('Failed to fetch repos per language image');
        }

        // Fetch Top Languages Commits image
        const mostCommitLanguageResponse = await fetch('/api/profile-languages-commits');
        if (mostCommitLanguageResponse.ok) {
          const mostCommitLanguageBlob = await mostCommitLanguageResponse.blob();
          const mostCommitLanguageObjectURL = URL.createObjectURL(mostCommitLanguageBlob);
          setMostCommitLanguageImage(mostCommitLanguageObjectURL);
        } else {
          console.error('Failed to fetch most commit language image');
        }

        // Fetch Stats image
        const statsResponse = await fetch('/api/profile-stats');
        if (statsResponse.ok) {
          const statsBlob = await statsResponse.blob();
          const statsObjectURL = URL.createObjectURL(statsBlob);
          setStatsImage(statsObjectURL);
        } else {
          console.error('Failed to fetch stats image');
        }

        // Fetch Productive Time image
        const productiveTimeResponse = await fetch('/api/profile-time-card');
        if (productiveTimeResponse.ok) {
          const productiveTimeBlob = await productiveTimeResponse.blob();
          const productiveTimeObjectURL = URL.createObjectURL(productiveTimeBlob);
          setProductiveTimeImage(productiveTimeObjectURL);
        } else {
          console.error('Failed to fetch productive time image');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    // Fetch all images when the component mounts
    fetchGitHubCards();
  }, []);

  return (
    <div>
      <div className="relative bg-blue-100/10 p-2">
        <p>Profile Details</p>
        {profileImage && <img src={profileImage} alt="Profile Details" className="relative w-[100vw] p-2 bg-cyan-400" />}
      </div>

      <div className="relative bg-blue-100/10 p-2">
        <p>Repos Per Language</p>
        {reposPerLanguageImage && <img src={reposPerLanguageImage} alt="Repos Per Language" className="relative w-[100vw] p-2 bg-cyan-400" />}
      </div>

      <div className="relative bg-blue-100/10 p-2">
        <p>Top Languages Commits</p>
        {mostCommitLanguageImage && <img src={mostCommitLanguageImage} alt="Top Languages Commits" className="relative w-[100vw] p-2 bg-cyan-400" />}
      </div>

      <div className="relative bg-blue-100/10 p-2">
        <p>Stats</p>
        {statsImage && <img src={statsImage} alt="Stats" className="relative w-[100vw] p-2 bg-cyan-400" />}
      </div>

      <div className="relative bg-blue-100/10 p-2">
        <p>Productive Time</p>
        {productiveTimeImage && <img src={productiveTimeImage} alt="Productive Time" className="relative w-[100vw] p-2 bg-cyan-400" />}
      </div>
    </div>
  );
};

export default ProfileCards;
