import React, { useState, Suspense } from "react";
import { FaStar, FaYoutube } from "react-icons/fa";
import HeroImg2 from "../../assets/dora.png";
import HeroBottom from "./HeroBottom";
import { IoClose } from "react-icons/io5";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

// 3D Doraemon Loader
const Doraemon3D = ({ url, scale = 1 }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} />;
};

const Hero = () => {
  const [isPlay, setIsPlay] = useState(false);
  const handlePlay = () => setIsPlay(!isPlay);

  return (
    <>
      <div className="min-h-screen relative bg-gradient-to-b from-slate-900 to-black text-white overflow-hidden">
        <div className="container mx-auto px-6 py-20 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">

          {/* TEXT */}
          <div className="space-y-6 md:space-y-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black">
              Watch Doraemon in <span className="text-blue-500">3D</span>
            </h1>
            <p className="text-gray-300 max-w-md">
              The first full story in the Doraemon series was published in January 1970. 
              Experience Doraemon in a fully interactive 3D environment.
            </p>
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
              <button
                onClick={handlePlay}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-600 font-bold shadow-lg hover:scale-105 transition-transform"
              >
                Play Trailer <FaYoutube className="text-red-500" />
              </button>
              <div className="flex items-center gap-2 text-yellow-400 font-bold">
                <FaStar /> 4.9 Rating
              </div>
            </div>
          </div>

          {/* 3D CANVAS */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
            <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Suspense fallback={null}>
                <Stage environment="city" intensity={0.6} contactShadow={true}>
                  <Doraemon3D url="/doraemon.glb" scale={1} />
                </Stage>
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
            </Canvas>
          </div>

          {/* REVIEW */}
          <div className="flex justify-center md:justify-end">
            <div className="space-y-4">
              <img
                src={HeroImg2}
                alt="Bandai Doraemon"
                className="w-[120px] md:w-[150px] lg:w-[180px] h-[100px] object-cover rounded-xl shadow-md hover:scale-110 duration-200"
              />
              <p className="text-sm text-gray-400 flex items-center gap-2">
                4.7 <FaStar className="text-yellow-400" />
              </p>
              <p className="text-sm text-gray-400">Bandai Figuartszero Doraemon</p>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <HeroBottom />
      </div>

      {/* VIDEO MODAL */}
      {isPlay && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-black rounded-3xl overflow-hidden w-full max-w-3xl shadow-2xl relative">
            <button
              onClick={handlePlay}
              className="absolute top-4 right-4 text-white text-3xl hover:scale-110 transition-transform"
            >
              <IoClose />
            </button>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/i9e9Xz4OHig?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
