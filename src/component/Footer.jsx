import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

// Variants for animation
const fadeInX = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInXx = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};


const Footer = () => {
  return (
    <footer className="bg-[#ffc233] text-gray-800 py-8 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:p-5">
        
        {/* Social Media - Col 1 */}
        <motion.div
          variants={fadeInXx}
          initial="hidden"
          whileInView="show"
          className="space-y-2"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="footer-title">Social Media</h3>
          <div className="footer-size-text mb-2">
            <FaFacebook className="text-blue-600" />
            <span>@moochiz.official</span>
          </div>
          <div className="footer-size-text">
            <FaInstagram className="text-pink-500" />
            <span>@cheesy.moochiz</span>
          </div>
        </motion.div>

        {/* Empty space - Col 2 */}
        <div className="hidden md:block" />

        {/* Contact Info - Col 3 */}
        <motion.div
          variants={fadeInX}
          initial="hidden"
          whileInView="show"
          className="space-y-2"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="footer-title">Contact Info</h3>
          <div className="footer-size-text mb-2">
            <FaMapMarkerAlt />
            <span>123 Cheese Avenue, Cheddarville</span>
          </div>
          <div className="footer-size-text mb-2">
            <FaEnvelope />
            <span>info@moochiz.com</span>
          </div>
          <div className="footer-size-text">
            <FaPhone />
            <span>(123) 456-7890</span>
          </div>
        </motion.div>
      </div>

      <hr className="mt-6 border-gray-700" />
    </footer>
  );
};

export default Footer;
