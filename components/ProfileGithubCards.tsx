import React, { useState, useEffect } from 'react';

const ProfileGithubCards = () => {
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
    <div className="p-2 flex flex-col min-h-[100vh] flex justify-center lg:items-center lg:mt-[-80px] lg:min-w-[90vw]">
        <span className="font-mono text-sm lg:text-xl tracking-widest pb-4 lg:ml-[-600px]">Profile Summary</span>
        {/* Profile Details */}
      <div className="relative">
        {profileImage && <img src={profileImage} alt="Profile Details" 
        className="relative w-[100vw] lg:w-[41.7vw] rounded-md shadow shadow-cyan-300/50 shadow-offset-x-8" />}
      </div>
      <div className="grid grid-cols-2 gap-2 lg:gap-8 lg:pt-8 pt-2">
          {/* Repos Per Language */}
        <div className="relative">
          {reposPerLanguageImage && <img src={reposPerLanguageImage} alt="Repos Per Language" 
          className="relative w-[100vw] lg:w-[20vw] rounded-md shadow shadow-cyan-200/50 shadow-offset-x-8" />}
        </div>

          {/* Top Languages Commits */}
        <div className="relative">
          {mostCommitLanguageImage && <img src={mostCommitLanguageImage} alt="Top Languages Commits" 
          className="relative w-[100vw] lg:w-[20vw] rounded-md shadow shadow-cyan-200/50 shadow-offset-x-8" />}
        </div>

          {/* Productive Time */}
        <div className="relative">
          {productiveTimeImage && <img src={productiveTimeImage} alt="Productive Time" 
          className="relative w-[100vw] lg:w-[20vw] rounded-md shadow shadow-cyan-200/50 shadow-offset-x-8" />}
        </div>

          {/* Stats */}
        <div className="relative">
          {statsImage && <img src={statsImage} alt="Stats" 
          className="relative w-[100vw] lg:w-[20vw] rounded-md shadow shadow-cyan-200/50 shadow-offset-x-8" />}
        </div>


      </div>
    </div>
  );
};

export default ProfileGithubCards;
