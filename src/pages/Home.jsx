import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import DoraemonImg from "../assets/dora.png";
import { FaStar } from "react-icons/fa";

// ================= 3D MODEL LOADER (STATIC) =================
const Stylized3D = () => {
  const { scene } = useGLTF("/stylized.glb");
  return <primitive object={scene} scale={1.2} />;
};

// ================= ANIMATION VARIANTS =================
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// ================= HOME PAGE =================
const Home = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white">

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= STORY SECTION ================= */}
      <section className="py-32 bg-white">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            The Story of Doraemon
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Doraemon is a robotic cat from the future who helps Nobita with
            gadgets that defy imagination. Explore his world in stunning 3D
            adventures and learn how he shaped generations of fans.
          </p>
        </motion.div>
      </section>

      {/* ================= GADGETS / FEATURES ================= */}
      <section className="py-32 bg-blue-50">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="text-5xl font-bold mb-12">Gadgets & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Anywhere Door", desc: "Travel anywhere instantly." },
              { title: "Time Machine", desc: "Go back or forward in time." },
              { title: "Bamboo Copter", desc: "Fly across cities effortlessly." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-500"
                variants={fadeUp}
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= 3D STYLIZED MODEL ================= */}
      <section className="py-32 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Text */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl font-bold mb-6 text-gray-900">
                Explore in 3D
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Interact with the stylized Doraemon model in 3D. Rotate it manually using your mouse to view it from every angle.
              </p>
            </motion.div>

            {/* Right 3D Model */}
            <motion.div
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <Suspense fallback={null}>
                  <Stage environment={null} intensity={0.6}>
                    <Stylized3D />
                  </Stage>
                </Suspense>
                <OrbitControls enableZoom={false} autoRotate={false} />
              </Canvas>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS / PRODUCTS ================= */}
      <section className="py-32 bg-white">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="text-5xl font-bold mb-12">Reviews & Collectibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-gray-100 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-500"
                variants={fadeUp}
              >
                <img
                  src={DoraemonImg}
                  alt="Doraemon figure"
                  className="w-full h-[150px] object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 flex items-center justify-center gap-2">
                  4.{i + 6} <FaStar className="text-yellow-400" />
                </p>
                <p className="text-gray-500 text-sm">Bandai Figuartszero Doraemon</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
