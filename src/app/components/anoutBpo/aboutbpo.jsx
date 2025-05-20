import React from 'react';
import Image from 'next/image';

const AboutBpo = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#c93c3c] mb-6">
            Empowering Growth Where People, Process, and Technology Unite
          </h1>
          <p className="text-base md:text-lg text-gray-300 text-justify leading-relaxed">
            At BPO Brigade, we are more than just a service provider—we are
            your strategic partner in scaling operations, enhancing customer
            experiences, and driving digital transformation. With a strong
            foundation in Customer Support, Digital Marketing, and
            Administrative Services, we deliver end-to-end outsourcing
            solutions tailored to your business needs.
          </p>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about2.jpg"
              alt="Professional team working together"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBpo;