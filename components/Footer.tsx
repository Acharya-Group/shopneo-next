"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About Shopneo */}
          <div className="md:col-span-4">
            <h5 className="text-lg font-semibold mb-3">About Shopneo</h5>
            <p className="text-sm opacity-75 mb-3">
              Shopneo&reg; is a dynamic marketplace exclusively for Indian
              sellers, powered by ONDC. As the first ONDC network participant
              connecting as both a Buyer and Seller NP, we open new
              opportunities for business growth.
            </p>
            <p className="text-sm opacity-75 mb-3">
              As a seller, you&apos;ll get a personalized store page with your
              own digital catalog and a unique QR code to promote your products.
              Your catalog will be available across the ONDC network, reaching a
              broad range of potential buyers.
            </p>
            <p className="text-sm opacity-75">
              For shoppers, Shopneo offers a seamless shopping experience,
              making it easier to explore and buy from a wide variety of
              products.
            </p>

            {/* Social Media */}
            <ul className="flex gap-4 mt-4">
              {[
                {
                  href: "http://facebook.com/Mystore-105648418975326",
                  icon: "fab fa-facebook",
                },
                {
                  href: "http://twitter.com/mystoreforindia",
                  icon: "fab fa-twitter",
                },
                {
                  href: "http://linkedin.com/company/mystoreforindia/",
                  icon: "fab fa-linkedin",
                },
                {
                  href: "http://youtube.com/channel/UCa9H_lreohMaNmVyQ7d8p8A",
                  icon: "fab fa-youtube",
                },
                {
                  href: "http://instagram.com/mystoremarketplace/",
                  icon: "fab fa-instagram",
                },
              ].map((item, i) => (
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
                <Image
                  src="/images/play-store.png"
                  alt="Google Play Store"
                  width={112}
                  height={33}
                />
              </Link>
              <Link href="https://apps.apple.com" target="_blank">
                <Image
                  src="/images/apple-store.png"
                  alt="Apple App Store"
                  width={112}
                  height={33}
                />
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-semibold mb-3">Pages</h5>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Career",
                "Contact Us",
                "Media",
                "FAQ",
                "Privacy Policy",
              ].map((item, i) => (
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
              {[
                "Blogs",
                "Help Topics",
                "Sell on Mystore",
                "Product Sorting Criterion",
                "Seller Training Manual",
              ].map((item, i) => (
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
              {[
                "Amazing India",
                "Direct From Farmers",
                "Fashion on ONDC",
                "Home Decor on ONDC",
                "Summer Collection",
              ].map((item, i) => (
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
              {[
                "About ONDC Network",
                "Sell on ONDC Network",
                "Seller Manager on ONDC Network",
                "Amazon sellers on ONDC Network",
              ].map((item, i) => (
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

        {/* Disclaimer */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-8">
          <div className="xl:col-span-7">
            <p className="text-sm opacity-75">
              <strong>Disclaimer</strong>
              <br />
              All instances of &quot;ONDC&quot; and &quot;Open Network For
              Digital Commerce&quot; refer to the &quot;ONDC Network&quot; and
              &quot;ONDC Protocol&quot;, and not the ONDC Section 8 company.
              Shopneo is a participant in the ONDC Network, offering both Buyer
              and Seller apps in compliance with the ONDC Protocol.
            </p>
          </div>
          <div className="xl:col-span-5 flex justify-center xl:justify-end gap-3">
            <Image
              src="/images/ISO-100x100.png"
              alt="ISO"
              className="object-contain"
              width={50}
              height={50}
            />
            <Image
              src="/images/PCI-DSS-100x50.png"
              alt="PCI"
              className="object-contain"
              width={100}
              height={40}
            />
            <Image
              src="/images/aicpa_soc-100x100.png"
              alt="AICPA"
              className="object-contain"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-3 border-t border-gray-700">
        <div className="container mx-auto flex flex-col md:flex-row justify-between text-center gap-2">
          <p className="text-sm opacity-75">
            <Link
              href="https://ondc.org"
              target="_blank"
              className="hover:text-yellow-400"
            >
              Powered by ONDC Protocol
            </Link>
          </p>
          <p className="text-sm opacity-75">&copy; Shopneo&reg;. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
