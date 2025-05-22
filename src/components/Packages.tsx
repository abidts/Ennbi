import React from "react";

const packages = [
  {
    title: "Static Website",
    price: "Starting at ₹5,000",
    description: "Perfect for simple portfolio or business presence",
    image:
      "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg?auto=compress&cs=tinysrgb&h=140",
  },
  {
    title: "Dynamic Website",
    price: "Starting at ₹15,000",
    description: "Database-driven websites with CMS features",
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&h=140",
  },
  {
    title: "Customized Website",
    price: "Starting at ₹25,000",
    description: "Tailored features and unique designs",
    image:
      "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&h=140",
  },
  {
    title: "E-Commerce App",
    price: "Starting at ₹30,000",
    description: "Online shopping with product and payment management",
    image:
      "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&h=140",
  },
  {
    title: "Web View / Native App",
    price: "Starting at ₹35,000",
    description: "Convert websites to mobile apps or build native solutions",
    image:
      "https://images.pexels.com/photos/1181300/pexels-photo-1181300.jpeg?auto=compress&cs=tinysrgb&h=140",
  },
];

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-16 bg-gray-100 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 !text-primary-500">
          Our Packages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-primary-600">
                  {pkg.title}
                </h3>
                <p className="text-gray-700 font-medium mb-1">{pkg.price}</p>
                <p className="text-sm text-gray-500">{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
