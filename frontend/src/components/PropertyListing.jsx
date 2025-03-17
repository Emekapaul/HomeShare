import React from "react";
import { motion } from "framer-motion";

const PropertyListing = () => {
  return (
    /* Property Listings Section */
    <motion.section
      className="py-16 bg-gray-100"
      initial={{ opacity: 0, y: 50 }} // Start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true }} // Ensures it only animates once
    >
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Featured Properties</h2>
        <p className="text-gray-600">
          Browse some of the best homes available for sale
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Property 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">2 Bed Room flat</h3>
            <p className="text-gray-600 mb-4">$5,000</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/12700515/pexels-photo-12700515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Property 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">3 Bed Room flat</h3>
            <p className="text-gray-600 mb-4">$6,400</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Property 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Modern Estate</h3>
            <p className="text-gray-600 mb-4">$20,200 per unit</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/17238410/pexels-photo-17238410/free-photo-of-houses-next-to-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Property 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Modern Estate</h3>
            <p className="text-gray-600 mb-4">$18,000</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2021/12/25/13/09/real-estate-6893072_960_720.jpg"
            alt="Property 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Modern Villa</h3>
            <p className="text-gray-600 mb-4">$10,000</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/20702842/pexels-photo-20702842/free-photo-of-photo-of-the-exterior-of-a-modern-house-with-a-swimming-pool.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Property 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Modern Villa</h3>
            <p className="text-gray-600 mb-4">$16,000</p>
          </div>
        </div>
        {/* Repeat similar block for other properties */}
      </div>
    </motion.section>
  );
};

export default PropertyListing;
