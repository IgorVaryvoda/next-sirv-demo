'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    const [imgUrl, setImgUrl] = useState('/bag.jpg');
    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(200);
    const [quality, setQuality] = useState(80);
    const [format, setFormat] = useState("optimal");


    return (
        <main className="flex flex-col min-h-screen items-center justify-center p-24 bg-gray-900 text-white">
            <h1 className="text-4xl mb-6">Sirv + Next Image</h1>
            <div className="flex w-full justify-center items-start mb-8">
                <div className="w-2/5 flex flex-col">
                    <form className="bg-gray-900 p-4 rounded-md mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="imgUrl">
                        Image Path
                    </label>
                    <input id="imgUrl" type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} placeholder="Image URL" className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />

                    <label className="block text-white text-sm font-bold mb-2" htmlFor="width">
                        Width
                    </label>
                    <input id="width" type="number" value={width} onChange={(e) => setWidth(e.target.value ? Number(e.target.value) : 500)} placeholder="Width" className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />

                    <label className="block text-white text-sm font-bold mb-2" htmlFor="height">
                        Height
                    </label>
                    <input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : 200)} placeholder="Height" className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />

                    <label className="block text-white text-sm font-bold mb-2" htmlFor="quality">
                        Quality
                    </label>
                    <input id="quality" type="number" value={quality} onChange={(e) => setQuality(e.target.value ? Number(e.target.value) : 50)} placeholder="Quality" className="bg-gray-800 text-white p-2 rounded-md m-2 w-full" />
                </form>

                </div>
                <div className="z-10 w-3/5 flex flex-col items-center font-mono text-sm">
                    <Image
                        src={imgUrl}
                        alt="Image"
                        className="Sirv"
                        width={width}
                        height={height}
                        quality={quality}
                        priority
                    />
                </div>
            </div>
        </main>
    );
}
