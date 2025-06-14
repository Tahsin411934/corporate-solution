import Image from "next/image";
import Link from "next/link";


const Banner = () => {


  return (
    <div className="relative w-full h-[420px] md:h-[500px] bg-[#0c1a5e] overflow-hidden shadow-lg">
      {/* Background Image - full width/height with priority loading */}
      <Image
        src="/banner.gif"
        alt="Professional Business Services Banner"
        fill
        priority
        quality={100}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] h-full flex flex-col justify-center items-start px-6 sm:px-12 lg:px-16 xl:px-24 text-white">
        <p className="text-lg sm:text-xl font-medium mb-2 uppercase tracking-wider text-blue-200">
          13 Years of Professional Experience
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight mb-4 max-w-3xl">
          License & Registration, VAT & Taxation, Legal Services
        </h1>
        <p className="text-base sm:text-lg font-medium mb-6 text-gray-100">
          Expert consultation for all your business needs
        </p>
        <Link
          href="/contact" // Added href attribute which was missing
          className="px-8 py-3 bg-[#005FA5] hover:bg-blue-700 transition-all duration-300 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
          aria-label="Book your services now"
        >
          Book Your Services
        </Link>
      </div>
    </div>
  );
};

export default Banner;