import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg_golden">
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="fs-xl font-semibold">
              Powering the Future of Online Commerce
            </h1>
            <p className="fs-base mt-2">
              All-in-one ecosystem to grow your business.
            </p>
            <div className="mt-4">
              <a
                target="_blank"
                href="https://admin-dashboard.shopneo.in/"
                className="inline-block bg-[var(--yellow)] text-white font-medium px-6 py-2 rounded-lg hover:opacity-90 transition"
              >
                Register as seller
              </a>
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
