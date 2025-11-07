import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 border-t border-red-700">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Logo and Name */}
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-3 tracking-widest">
            DJ BEATZ
          </h2>
          <p className="text-gray-400">
            Bringing the hottest beats to every event. <br />
            Let’s make your night unforgettable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition">About</Link></li>
            <li><Link to="/music" className="hover:text-red-500 transition">Music</Link></li>
            <li><Link to="/booking" className="hover:text-red-500 transition">Booking</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DJ BEATZ. All Rights Reserved.
      </div>
    </footer>
  );
}
