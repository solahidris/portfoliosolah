// ImageDataItem.tsx

import React from 'react';
import { ImageParallex } from './ParallexPage'; // Import ImageParallex

interface ImageDataItemProps {
  id: number;
  title: string;
  subtitle: string;
  content: React.ReactNode; // Assuming content can be any JSX
}

const imageData = [
  {
    id: 1,
    title: "Title 1",
    subtitle: "Subtitle 1",
    content: (
      <div className="flex flex-col justify-center items-start">
        <p className="">Hi, I&#39;m Solah</p>
        <p className="">This is my Portfolio</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Title 2",
    subtitle: "Subtitle 2",
    content: (
      <div className="flex flex-col justify-center items-start">
        <p className="">I&#39;m a Frontend Developer</p>
        <p className="">based in humble Malaysia</p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Title 3",
    subtitle: "Subtitle 3",
    content: (
      <div className="flex flex-col justify-center items-start">
        <p className="">I can code stuff. Mostly in Nextjs, Typescript &#38; Firebase GCP</p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Title 4",
    subtitle: "Subtitle 4",
    content: (
      <div className="flex flex-col justify-center items-start">
        <p className="">kasutkicks.com - a sneaker marketplace</p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Title 5",
    subtitle: "Subtitle 5",
    content: (
      <div className="flex flex-col justify-center items-start">
        <p className="">sharelinks.info - a link in bio</p>
      </div>
    ),
  },
];

function ImageDataItem({ id, title, subtitle, content }: ImageDataItemProps) {
  return (
    <div className="flex justify-center">
      {content}
      <ImageParallex id={id} title={title} subtitle={subtitle} />
    </div>
  );
}

export { imageData, ImageDataItem };