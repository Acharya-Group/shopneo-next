import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="bg_golden">
      <div className="container mx-auto py-10 lg:py-20 px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="fs-xl font-semibold animate__animated animate__backInDown">
              Powering the Future of Online Commerce
            </h1>
            <p className="fs-base mt-2 animate__animated animate__backInLeft animate__delay-1s">
              All-in-one ecosystem to grow your business.
            </p>
            <div className="sm:mt-10 mt-6 animate__animated animate__swing animate__delay-2s">
                      <Button
                label="Register as Seller"
                href="https://admin-dashboard.shopneo.in/sign-up/"
                target="_blank"
                className="bg-yellow-500 text-white hover:bg-yellow-400 py-3 px-6"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 w-10/12 mb-6 md:mb-0">
            <Image
              src="/images/hero-image.webp"
              alt="hero"
              width={600}
              height={500}
              className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
