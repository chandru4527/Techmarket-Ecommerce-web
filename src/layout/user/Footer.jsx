import { Link } from "react-router-dom";

// icons
import { MdKeyboardArrowRight, MdEmail, MdPhone, MdLocationOn, MdArrowUpward, } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, } from "react-icons/fa6";

// components
import Image from "../../components/media/Image";
import Button from "../../components/Button";

const Footer = () => {

  const shopLinks = [
    { name: "All Products", path: "/shop" },
    { name: "Laptops", path: "/shop" },
    { name: "Mobiles", path: "/shop" },
    { name: "Gaming", path: "/shop" },
  ];

  const supportLinks = [
    { name: "Contact Us", path: "/contact" },
    { name: "My Account", path: "/profile" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Shopping Cart", path: "/cart" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Blog", path: "/blog" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, path: "#", label: "Facebook" },
    { icon: FaInstagram, path: "#", label: "Instagram" },
    { icon: FaXTwitter, path: "#", label: "Twitter" },
    { icon: FaYoutube, path: "#", label: "YouTube" },
  ];

  const FooterLinks = ({ title, links }) => (
    <div>
      <h3 className="text-white font-semibold text-base mb-5">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="group flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              <MdKeyboardArrowRight className="text-lg opacity-0 -ml-5 group-hover:opacity-100 transition-all duration-200" />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-linear-to-r from-[#0F172A] to-[#1E3A8A]">
      {/* Top Gradient */}
      <div className="h-1 bg-linear-to-r from-[#015BFA] to-[#00D9D9]" />

      <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 py-8 sm:py-10">

          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <Image
                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1794815364/logo_ryji08.png"
                alt="TechMarket"
                className="h-12 w-auto"
              />
            </Link>

            <p className="text-sm text-white/60 leading-7 max-w-sm">
              Your one-stop destination for the latest electronics,
              gadgets and accessories. Discover technology that makes
              your life better.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mt-6">
              <Link
                to="/contact"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <MdEmail className="text-lg text-sky-600" />
                Contact our support team
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <MdPhone className="text-lg text-sky-600" />
                Get in touch with us
              </Link>

              <div className="flex items-center gap-3 text-sm text-white/60 hover:text-white">
                <MdLocationOn className="text-lg text-sky-600 shrink-0" />
                Online Electronics Store
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, path, label }) => (
                <a
                  key={label}
                  href={path}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-sky-600  transition-all duration-200"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <FooterLinks title="Shop" links={shopLinks} />

          {/* Customer Support */}
          <FooterLinks title="Customer Support" links={supportLinks} />

          {/* Company */}
          <FooterLinks title="Company" links={companyLinks} />
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 border-t border-white/10">
          <p className="text-xs text-white/50 text-center">
            © {new Date().getFullYear()} TechMarket. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              className="text-xs text-white/50 hover:text-white  transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Terms
            </Link>

            <Button
              icon={MdArrowUpward}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-blue-600 transition-colors"
              aria-label="Back to top"
            />

          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;