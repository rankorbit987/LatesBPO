'use client'
import React from 'react'
import Link from 'next/link'

const ServicesCTA = () => {
  return (
    <div className="w-full flex justify-center my-15">
      <Link
        href="/service-page"
        className="inline-block px-6 py-3 bg-white text-[#c93c3c] font-semibold text-lg rounded-full shadow-md hover:bg-[#c93c3c] hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
      >
        Explore Our Services
      </Link>
    </div>
  )
}

export default ServicesCTA
