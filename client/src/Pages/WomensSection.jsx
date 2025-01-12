import React, { useState } from "react";
import { Book, Award, ChevronDown, ChevronUp } from "lucide-react";
import NavBar from "../components/NavBar"; // Import NavBar
import Footer from "../components/Footer";

const WomenEmpowerment = () => {
  const [expandedScheme, setExpandedScheme] = useState(null);
  const [language, setLanguage] = useState("en");

  const schemes = [
    {
      id: 1,
      title: "Mahila Samridhi Yojana",
      description:
        "A micro-credit facility for women to start their own businesses with loans up to ₹60,000.",
      benefits: [
        "Low interest rates at 4% per annum",
        "No collateral required for loans",
        "Quick loan processing within 15 days",
        "Business training and support provided",
      ],
      eligibility: "Women aged 18-55 years from low-income households",
    },
    {
      id: 2,
      title: "Pradhan Mantri Matru Vandana Yojana",
      description:
        "Maternity benefit program providing financial assistance to pregnant and lactating mothers.",
      benefits: [
        "Cash incentive of ₹5,000 in three installments",
        "Direct bank transfer to beneficiary",
        "Compensation for wage loss",
        "Promotes proper nutrition and feeding practices",
      ],
      eligibility: "Pregnant and lactating mothers for first live birth",
    },
    {
      id: 3,
      title: "Beti Bachao Beti Padhao",
      description:
        "Initiative to promote girl child education and improve child sex ratio.",
      benefits: [
        "Free education for girl child",
        "Scholarship programs",
        "Health and nutrition support",
        "Awareness campaigns against gender bias",
      ],
      eligibility: "All girl children and their families",
    },
    {
      id: 4,
      title: "Sukanya Samriddhi Yojana",
      description:
        "Government-backed saving scheme for girl child education and marriage expenses.",
      benefits: [
        "High interest rate of 7.6% per annum",
        "Tax benefits under Section 80C",
        "Partial withdrawal allowed for education",
        "Maturity period of 21 years",
      ],
      eligibility: "Parents/guardians of girl child below 10 years",
    },
  ];

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "hi" : "en"));
  };

  return (
    <>
      <NavBar language={language} toggleLanguage={toggleLanguage} />
      <div className="min-h-screen bg-pink-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-12 px-6 mt-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Women Empowerment Portal
            </h1>
            <p className="text-lg opacity-90">
              Empowering women through financial independence and support
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Government Schemes Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500">
              <div className="flex items-center space-x-3 text-pink-600 mb-2">
                <Book className="w-6 h-6" />
                <h2 className="text-xl font-semibold">Government Schemes</h2>
              </div>
              <p className="text-gray-600">
                Explore various government initiatives designed to support
                women.
              </p>
            </div>

            {/* Microfinance Investment Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500 cursor-pointer hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 text-pink-600 mb-2">
                <Book className="w-6 h-6" />
                <h2 className="text-xl font-semibold">
                  Microfinance Investment
                </h2>
              </div>
              <p className="text-gray-600">
                Coming soon: Discover micro-investment opportunities tailored
                for women.
              </p>
            </div>

            {/* Success Stories Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500 cursor-pointer hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 text-pink-600 mb-2">
                <Award className="w-6 h-6" />
                <h2 className="text-xl font-semibold">Success Stories</h2>
              </div>
              <p className="text-gray-600">
                Coming soon: Get inspired by stories of successful women
                entrepreneurs.
              </p>
            </div>
          </div>

          {/* Government Schemes Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Available Government Schemes
            </h2>

            {schemes.map((scheme) => (
              <div
                key={scheme.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left hover:bg-pink-50 transition-colors duration-200"
                  onClick={() =>
                    setExpandedScheme(
                      expandedScheme === scheme.id ? null : scheme.id
                    )
                  }
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {scheme.title}
                    </h3>
                    {expandedScheme === scheme.id ? (
                      <ChevronUp className="w-5 h-5 text-pink-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-pink-500" />
                    )}
                  </div>
                  <p className="text-gray-600 mt-1">{scheme.description}</p>
                </button>

                {expandedScheme === scheme.id && (
                  <div className="px-6 py-4 bg-pink-50 border-t border-pink-100">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-pink-600 mb-2">
                          Benefits:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {scheme.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-600 mb-2">
                          Eligibility:
                        </h4>
                        <p className="text-gray-700">{scheme.eligibility}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default WomenEmpowerment;
