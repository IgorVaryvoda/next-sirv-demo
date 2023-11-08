'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [imgUrl, setImgUrl] = useState('/bag.jpg');
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(300);
  const [quality, setQuality] = useState(85);
  const [blur, setBlur] = useState(0);
  const [sharpen, setSharpen] = useState(0);
  const buildImageSrc = () => {
    const params = new URLSearchParams();

    // Only append blur and sharpen if they have values
    if (blur > 0) {
      params.append('blur', blur.toString());
    }
    if (sharpen > 0) {
      params.append('sharpen', sharpen.toString());
    }

    return `${imgUrl}?${params.toString()}`;
  };
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-4xl mb-6">Sirv + Next Image</h1>
      <div className="flex w-full justify-center items-start mb-8">
        <div className="w-2/5 flex flex-col">
          <form className="bg-gray-900 p-4 rounded-md mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="imgUrl">
              Image Path
            </label>
            <select
              id="imgUrl"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded-md m-2 w-full"
            >
              <option value="/bag.jpg">/bag.jpg</option>
              <option value="/harris.jpg">/harris.jpg</option>
              <option value="/look.jpg">/look.jpg</option>
              <option value="/sky.jpg">/sky.jpg</option>
              <option value="/oman.jpg">/oman.jpg</option>
              <option value="/trainer-pinks.jpg">/trainer-pinks.jpg</option>
            </select>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="width">
              Width
            </label>
            <input id="width" type="number" value={width} min="1" max="1000" onChange={(e) => {
              const newValue = Number(e.target.value);
              setWidth(newValue >= 1 && newValue <= 1000 ? newValue : width);
            }} placeholder="Width" className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />

            <label className="block text-white text-sm font-bold mb-2" htmlFor="height">
              Height
            </label>
            <input id="height" type="number" value={height} min="1" max="1000" onChange={(e) => {
              const newValue = Number(e.target.value);
              setHeight(newValue >= 1 && newValue <= 1000 ? newValue : height);
            }} placeholder="Height" className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />

            <label className="block text-white text-sm font-bold mb-2" htmlFor="quality">
              Quality
            </label>
            <input id="quality" type="number" value={quality} min="0" max="100" onChange={(e) => {
              const newValue = Number(e.target.value);
              setQuality(newValue >= 0 && newValue <= 100 ? newValue : quality);
            }} placeholder="Quality" className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />
            <label className="block text-white text-sm font-bold mb-2" htmlFor="blur">
              Blur
            </label>
            <input id="blur" type="range" min="0" max="100" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />

            <label className="block text-white text-sm font-bold mb-2" htmlFor="sharpen">
              Sharpen
            </label>
            <input id="sharpen" type="range" min="0" max="100" value={sharpen} onChange={(e) => setSharpen(Number(e.target.value))} className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />
          </form>

        </div>
        <div className="z-10 w-3/5 flex flex-col items-center font-mono text-sm">
          <Image
            src={buildImageSrc()}
            alt="Image"
            className="Sirv"
            width={width}
            height={height}
            quality={quality}
            priority
          />
        </div>
      </div>
    </main >
  );
}
