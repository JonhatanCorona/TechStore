'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const pathname = usePathname();
  const currentYear: number = new Date().getFullYear();

  const isAuthPage = pathname === '/singIn' || pathname === '/register' || /^\/details\/\d+$/.test(pathname)|| 
  pathname === '/myAccount/myProfile'|| pathname === '/myAccount/myOrders'|| pathname === '/shoppingCart' ;

  if (isAuthPage) {
    return (
      <footer className="mt-10 px-4 sm:px-6 lg:px-8 bg-secondary-700">
        {/* Bottom Bar solo para login y register */}
        <div className="border-t border-zinc-800 mt-6 sm:mt-8 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center items-center">
          <p className="title-200 text-primary-100">&copy; {currentYear} TechStore. All rights reserved.</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-secondary-700 w-full mt-4">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center pt-8">
              <h2 className="sm:text-2xl font-bold bg-clip-text title-500 text-primary-50">
                TechStore
              </h2>
            </div>
            <p className="text-200 sm:text-sm  text-gray-300 max-w-xs">
            Your destination for the latest technology. We offer innovative products and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-2 sm:mt-0">
            <h3 className="title-300 sm:title-300 font-semibold mb-2 sm:mb-4 text-primary-50 ">Category</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/products/1" className="text-200 text-gray-200 hover:text-neutral-800 transition-colors">
                Smartphones
                </Link>
              </li>
              <li>
                <Link href="/products/2" className="text-200 text-gray-300 hover:text-neutral-800 transition-colors">
                Laptops
                </Link>
              </li>
              <li>
                <Link href="/products/3" className="text-200 text-gray-300 hover:text-neutral-800 transition-colors">
                Tablets
                </Link>
              </li>
              <li>
                <Link href="/products/5" className="text-200 text-gray-300 hover:text-neutral-800 transition-colors">
                Headphones
                </Link>
              </li>
                <li>
                <Link href="/products/others" className="text-200 text-gray-300 hover:text-neutral-800 transition-colors">
                  Others
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-2 sm:mt-0">
            <h3 className="title-300 sm:text-lg font-semibold mb-2 sm:mb-4 text-primary-50">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-neutral-500">
                <span className=" text-gray-300">Av. Tecnológica 123, Ciudad</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-500">
                <span className=" text-gray-300">+123 456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-500">
                <span className=" text-gray-300">info@techstore.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mt-2 sm:mt-0">
            <h3 className="title-300 sm:text-lg font-semibold mb-2 sm:mb-4 text-primary-50">Follow us</h3>
            <div className="flex space-x-2 sm:space-x-3">
              <Link
                href="https://facebook.com"
                className="bg-zinc-800 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Facebook"
              >
                <Image src="/facebook.webp" alt="Facebook" width={24} height={24} />
              </Link>
              <Link
                href="https://twitter.com"
                className="bg-zinc-800 p-1.5 sm:p-2 rounded-full  hover:bg-gray-100 transition-colors"
                aria-label="Twitter"
              >
                <Image src="/x.webp" alt="X" width={24} height={24} />
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-zinc-800 p-1.5 sm:p-2 rounded-full  hover:bg-gray-100 transition-colors"
                aria-label="Instagram"
              >
                <Image src="/instagram.webp" alt="Instragam" width={24} height={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="bg-zinc-800 p-1.5 sm:p-2 rounded-full  hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Image src="/linkedin.webp" alt="Linkedin" width={24} height={24} />
              </Link>
              <Link
                href="https://github.com/JonhatanCorona"
                className="bg-zinc-800 p-1.5 sm:p-2 rounded-full  hover:bg-gray-100 transition-colors"
                aria-label="Github"
              >
                <Image src="/git.webp" alt="Github" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-6 sm:mt-8 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center items-center">
          <p className="title-200 text-primary-100">&copy; {currentYear} TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

