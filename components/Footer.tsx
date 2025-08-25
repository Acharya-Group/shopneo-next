"use client";
import Image from "next/image";
import Link from "next/link";
import { pages, explore, collections, ondcNetwork, socialLinks } from "../data/common";
export default function Footer() {

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About Shopneo */}
          <div className="md:col-span-4">
            <h5 className="text-lg font-semibold mb-3">About Shopneo</h5>
            <p className="text-sm opacity-75 mb-3">
              Shopneo is a dynamic marketplace exclusively for Indian sellers, powered by ONDC.
              As the first ONDC network participant connecting as both a Buyer and Seller NP,
              we open new opportunities for business growth.
            </p>
            <p className="text-sm opacity-75 mb-3">
              As a seller, you&apos;ll get a personalized store page with your own digital catalog
              and a unique QR code to promote your products. Your catalog will be available
              across the ONDC network, reaching a wide range of potential buyers.
            </p>
            <p className="text-sm opacity-75">
              For shoppers, Shopneo offers a seamless shopping experience,
              making it easier to explore and buy from a wide variety of products.
            </p>

            {/* Social Media */}
            <ul className="flex gap-4 mt-4">
              {socialLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} target="_blank">
                    <i
                      className={`${item.icon} transition-all duration-300 opacity-75 hover:opacity-100 hover:text-yellow-400`}
                    ></i>
                  </Link>
                </li>
              ))}
            </ul>

            {/* App Links */}
            <div className="flex gap-2 mt-4">
              <Link href="https://play.google.com" target="_blank">
                <Image src="/images/play-store.png" alt="Google Play Store" width={112} height={33} />
              </Link>
              <Link href="https://apps.apple.com" target="_blank">
                <Image src="/images/apple-store.png" alt="Apple App Store" width={112} height={33} />
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-semibold mb-3">Pages</h5>
            <ul className="space-y-2 text-sm">
              {pages.map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="transition-all duration-300 opacity-75 hover:text-yellow-400 hover:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-semibold mb-3">Explore</h5>
            <ul className="space-y-2 text-sm">
              {explore.map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="transition-all duration-300 opacity-75 hover:text-yellow-400 hover:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-semibold mb-3">Collections</h5>
            <ul className="space-y-2 text-sm">
              {collections.map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="transition-all duration-300 opacity-75 hover:text-yellow-400 hover:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ONDC Network */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-semibold mb-3">ONDC Network</h5>
            <ul className="space-y-2 text-sm">
              {ondcNetwork.map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="transition-all duration-300 opacity-75 hover:text-yellow-400 hover:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="py-3 border-t border-gray-700 mt-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between text-center gap-2">
            <p className="text-sm opacity-75">
              <Link href="https://ondc.org" target="_blank" className="hover:text-yellow-400">
                Powered by ONDC Protocol
              </Link>
            </p>
            <p className="text-sm opacity-75">© {new Date().getFullYear()} Shopneo. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
