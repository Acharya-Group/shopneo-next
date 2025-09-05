// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", 
        pathname: "/ded69bxhb/image/upload/**",
      },
    ],
    domains: ["via.placeholder.com"], 
  },
};
