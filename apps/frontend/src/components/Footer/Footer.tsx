import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full py-12">
      <div className="max-w-[1056px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold font-serif tracking-wider text-pink-400">
            Artsgoz
          </span>
          <span className="text-xs text-gray-400">
            Faculty of Arts, Chulalongkorn University
          </span>
        </div>

        {/* Right Side: Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-sm text-gray-400">
          <div className="flex gap-6">
            <Link to="#" className="hover:text-pink-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-pink-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-pink-400 transition-colors">
              Contact
            </Link>
          </div>
          <p className="text-xs text-gray-500">
            &copy; 2026 Artsgoz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
