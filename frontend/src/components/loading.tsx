import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="container flex justify-center items-center h-full w-full">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full border border-purple-400"
            style={{
              width: "100%",
              height: "100%",
              borderWidth: 2,
              borderColor: "#a78bfa", // Tailwind purple-400
            }}
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 1.2 + i * 0.2, opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
        <span className="absolute w-6 h-6 bg-purple-400 rounded-full" />
      </div>
    </div>
  );
}
