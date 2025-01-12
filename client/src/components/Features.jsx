import React from "react";

const Features = ({ t }) => {
  const features = t.items;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
          {t.title}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-lg">
          {t.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <a
              href={feature.link}
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

              <div className="relative p-8 bg-green-50 h-full group-hover:bg-opacity-90 transition-all duration-300 rounded-xl">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(feature.icon, {
                    className: "h-14 w-14 text-gray-800 group-hover:text-green",
                  })}
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-green">
                  {feature.title}
                </h3>

                <p className="text-gray-700 group-hover:text-green mb-4 text-sm">
                  {feature.description}
                </p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-green flex items-center font-medium">
                    Learn more
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
