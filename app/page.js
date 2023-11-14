'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [imgUrl, setImgUrl] = useState('/bag.jpg');
  const [profile, setProfile] = useState('');
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(300);
  const [quality, setQuality] = useState(85);
  const [blur, setBlur] = useState(0);
  const [sharpen, setSharpen] = useState(0);
  const buildImageSrc = () => {
    const params = new URLSearchParams();

    // Only append profile, blur and sharpen if they have values
    if (profile) {
      params.append('profile', profile);
    }
    if (blur > 0) {
      params.append('blur', blur.toString());
    }
    if (sharpen > 0) {
      params.append('sharpen', sharpen.toString());
    }

    return `${imgUrl}?${params.toString()}`;
  };
  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-4 md:px-12 lg:px-20 py-12 bg-gray-900 text-white">
      <h1 className="text-3xl sm:text-4xl mb-6 text-center">Sirv + Next Image</h1>
      <div className="flex flex-col sm:flex-row w-full justify-center items-center mb-8">
        <div className="flex flex-col w-full sm:w-2/5">
          <form className="bg-gray-900 p-4 rounded-md mb-4">
            <label className="block text-white text-sm font-bold mb-1 ml-2" htmlFor="imgUrl">
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
            </select>
            <label className="block text-white text-sm font-bold mb-1 mt-3 ml-2" htmlFor="profile">
              Profile
            </label>
            <select
              id="profile"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded-md m-2 w-full"
            >
              <option value="">None</option>
              <option value="OpenGraph">Sale</option>
              <option value="Vintage filter 2">Vintage Frame</option>
              <option value="Product background">Background Frame</option>
              <option value="Tiled watermark">Tiled watermark</option>
              <option value="crop">Crop</option>
              <option value="hsl-silver">Greyscale</option>
            </select>
            <label className="block text-white text-sm font-bold mb-1 mt-3 ml-2" htmlFor="width">
              Width
            </label>
            <input id="width" type="number" value={width} min="1" max="1000" onChange={(e) => {
              const newValue = Number(e.target.value);
              setWidth(newValue >= 1 && newValue <= 1000 ? newValue : width);
            }} placeholder="Width" className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />

            <label className="block text-white text-sm font-bold mb-1 mt-3 ml-2" htmlFor="height">
              Height
            </label>
            <input id="height" type="number" value={height} min="1" max="1000" onChange={(e) => {
              const newValue = Number(e.target.value);
              setHeight(newValue >= 1 && newValue <= 1000 ? newValue : height);
            }} placeholder="Height" className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />

            <label className="block text-white text-sm font-bold mb-1 mt-3 ml-2" htmlFor="quality">
              Quality
            </label>
            <div className="relative mt-2">
              <input id="quality" type="range" value={quality} min="0" max="100" onChange={(e) => {
                setQuality(Number(e.target.value))
              }} placeholder="Quality" className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />
              <div
                className="absolute text-white text-xs -mt-6"
                style={{
                  left: `calc(${quality}% - ( (${quality} * 0.1px)))`,
                }}
              >
                {quality}%
              </div>
            </div>
            <label className="block text-white text-sm font-bold mb-1 mt-3 ml-2" htmlFor="blur">
              Blur
            </label>
            <div className="relative mt-2">
              <input id="blur" type="range" min="0" max="100" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />
              <div
                className="absolute text-white text-xs -mt-6"
                style={{
                  left: `calc(${blur}% - ( (${blur} * 0.5px)))`,
                }}
              >
                {blur}
              </div>
            </div>
            <label className="block text-white text-sm font-bold mb-1 mt-3 ml-2" htmlFor="sharpen">
              Sharpen
            </label>
            <div className="relative mt-2">
              <input id="sharpen" type="range" min="0" max="100" value={sharpen} onChange={(e) => setSharpen(Number(e.target.value))} className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />
              <div
                className="absolute text-white text-xs -mt-6"
                style={{
                  left: `calc(${sharpen}% - ( (${sharpen} * 0.1px)))`,
                }}
              >
                {sharpen}
              </div>
            </div>
          </form>

        </div>
        <div className="z-10 flex flex-col items-center font-mono text-sm mt-6 sm:mt-0 sm:w-3/5">
          <Image
            src={buildImageSrc()}
            alt="Image"
            className="Sirv"
            width={width}
            height={height}
            quality={quality}
            priority
            profile={profile}
            blur={blur}
            sharpen={sharpen}
          />
        </div>
      </div>
      <p className="credits mb-2">Check out all <a className='text-slate-400' href="https://sirv.com/help/articles/dynamic-imaging/">Sirv transformation options</a> and an interactive <a className='text-slate-400' href="https://sirv.com/help/image-api-wizard/">Live demo</a>.</p>

      <p className="credits">Powered by <a className='text-slate-400' href="https://sirv.com">Sirv</a> and <a className='text-slate-400' href="https://nextjs.org/docs/pages/api-reference/components/image">Next Image</a>.</p>
    </main >
  );
}
