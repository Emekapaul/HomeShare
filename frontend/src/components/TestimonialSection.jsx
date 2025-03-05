import React from "react";

const TestimonialSection = () => {
  return (
    /* Testimonials Section */
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
      </div>
      <div className="flex justify-center space-x-8">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
          <p className="text-gray-600 mb-4">
            "Excellent experience! Found my dream home in no time. Highly
            recommend."
          </p>
          <p className="font-semibold">John Doe</p>
          <p className="text-sm text-gray-500">Homebuyer</p>
        </div>
        {/* Repeat similar block for other testimonials */}
      </div>
    </section>
  );
};

export default TestimonialSection;
