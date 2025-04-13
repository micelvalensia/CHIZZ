import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const ContactForm = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex items-center justify-center px-4 mt-10"
    >
      <motion.div
        variants={{
          show: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {/* Form */}
        <motion.form variants={fadeInUp} className="space-y-6">
          <motion.div variants={fadeInUp}>
            <label className="contact-formt">Name</label>
            <input
              type="text"
              placeholder=".........."
              className="w-full p-3 rounded-lg bg-[#ffc233] placeholder-gray-600 text-gray-900"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <label className="contact-formt">Email</label>
            <input
              type="email"
              placeholder=".........."
              className="w-full p-3 rounded-lg bg-[#ffc233] placeholder-gray-600 text-gray-900"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <label className="contact-formt">Message</label>
            <textarea
              rows="8"
              placeholder=".........."
              className="w-full p-3 rounded-lg bg-[#ffc233] placeholder-gray-600 text-gray-900"
            />
          </motion.div>
        </motion.form>

        {/* Character & Button */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-6"
          variants={fadeInUp}
        >
          <motion.img
            src="/contact-img.png"
            alt="Cow with Cheese Hat"
            className="min-w-[340px]"
            variants={fadeInUp}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
            className="bg-[#ffc233] text-gray-800 font-bold py-3 px-6 rounded-xl shadow-md cursor-pointer hover:bg-yellow-400 transition"
          >
            SEND MESSAGE
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
