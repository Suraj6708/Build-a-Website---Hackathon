import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Globe,
  BookOpen,
  Users,
  Shield,
  BadgeDollarSign,
  Play,
  Pause,
  ArrowUpRight,
} from "lucide-react";

import Features from "../components/Features";
import NavBar from "../components/NavBar"; // Import NavBar
import Footer from "../components/Footer";

const translations = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      community: "Community",
      learning: "Learning",
      contact: "Contact",
    },
    hero: {
      title: "Smart Financial Planning for Your Future",
      subtitle:
        "Expert guidance, micro-investments, and government schemes all in one place",
      cta: "Get Started",
    },
    features: {
      title: "Why Choose Us",
      description:
        "Discover the tools and resources that make us your ideal partner in your journey to success.",
      items: [
        {
          title: "User Profiles",
          description: "View and manage detailed user profiles",
          link: "/profiles",
        },
        {
          title: "Schemes & Benefits",
          description: "View and manage detailed user profiles",
          link: "/scheme",
        },
        {
          title: "Learning Center",
          description: "Access courses and educational content",
          link: "/learn",
        },
        {
          title: "Roadmap",
          description: "Access courses and educational content",
          link: "/road",
        },
        {
          title: "Daily Tech News",
          description: "Stay updated with the latest tech news",
          link: "/news",
        },
      ],
    },
    successStories: {
      title: "Success Stories of the Underprivileged",
      subtitle: "Inspiring journeys of overcoming adversity",
      steps: [
        {
          title: "Rising from Poverty",
          description:
            "A story of determination and hard work leading to financial stability",
          icon: "🌟",
          youtubeId: "zZ-VeqYPxoA",
        },
        {
          title: "Empowering Women",
          description:
            "How micro-financing helped women start their own businesses",
          icon: "👩‍💼",
          youtubeId: "i9UYbJ2xMTI",
        },
        {
          title: "Education for All",
          description: "Providing education to children in impoverished areas",
          icon: "📚",
          youtubeId: "VILohre4Q6w",
        },
        {
          title: "Community Support",
          description:
            "Building a support network to uplift entire communities",
          icon: "🤝",
          youtubeId: "EsrJ_NKBkww",
        },
      ],
    },
    businessIdeas: {
      title: "Trending Business Ideas",
      subtitle: "Scroll to explore opportunities",
      ideas: [
        {
          title: "Digital Marketing",
          description: "Start your own digital marketing agency",
          icon: "📱",
        },
        {
          title: "E-learning Platform",
          description: "Create and sell online courses",
          icon: "🎓",
        },
        {
          title: "Fintech Solutions",
          description: "Develop financial technology products",
          icon: "💳",
        },
        {
          title: "Green Business",
          description: "Sustainable and eco-friendly ventures",
          icon: "🌱",
        },
        {
          title: "Health Tech",
          description: "Healthcare technology solutions",
          icon: "⚕️",
        },
        {
          title: "E-commerce",
          description: "Online retail and marketplace",
          icon: "🛍️",
        },
      ],
    },
  },
  hi: {
    nav: {
      home: "होम",
      features: "सुविधाएं",
      community: "समुदाय",
      learning: "शिक्षा",
      contact: "संपर्क",
    },
    hero: {
      title: "आपके भविष्य के लिए स्मार्ट वित्तीय योजना",
      subtitle:
        "विशेषज्ञ मार्गदर्शन, माइक्रो-निवेश और सरकारी योजनाएं एक ही जगह पर",
      cta: "शुरू करें",
    },
    features: {
      title: "हमें क्यों चुनें",
      description:
        "सफलता की यात्रा में आपका आदर्श साथी बनने के लिए हमारे उपकरण और संसाधनों की खोज करें।",
      items: [
        {
          title: "उपयोगकर्ता प्रोफाइल",
          description: "विस्तृत उपयोगकर्ता प्रोफाइल देखें और प्रबंधित करें",
          link: "/profiles",
        },
        {
          title: "योजना आणि लाभ",
          description: "विस्तृत वापरकर्ता प्रोफाइल पहा आणि व्यवस्थापित करा",
          link: "/scheme",
        },
        {
          title: "लर्निंग सेंटर",
          description: "पाठ्यक्रमों और शैक्षिक सामग्री तक पहुंचें",
          link: "/learn",
        },
        {
          title: "रोडमैप",
          description: "पाठ्यक्रमों और शैक्षिक सामग्री तक पहुंचें",
          link: "/road",
        },
        {
          title: "दैनिक टेक समाचार",
          description: "नवीनतम तकनीकी समाचारों से अपडेट रहें",
          link: "/news",
        },
      ],
    },
    successStories: {
      title: "सफलता की यात्रा",
      subtitle: "हमारी चरण-दर-चरण प्रक्रिया",
      steps: [
        {
          title: "खोज और व्यक्तिगतकरण",
          description: "हम आपके वित्तीय लक्ष्यों का विश्लेषण करते हैं",
          icon: "🎯",
        },
        {
          title: "डिज़ाइन में साझेदार",
          description: "हम साथ मिलकर आपकी निवेश रणनीति बनाते हैं",
          icon: "🤝",
        },
        {
          title: "कार्यान्वयन",
          description: "विशेषज्ञ मार्गदर्शन के साथ योजना को लागू करें",
          icon: "⚡",
        },
        {
          title: "निरंतर विकास",
          description: "नियमित निगरानी और अनुकूलन",
          icon: "📈",
        },
      ],
    },
    businessIdeas: {
      title: "ट्रेंडिंग बिजनेस आइडियाज",
      subtitle: "अवसरों की खोज करें",
      ideas: [
        {
          title: "डिजिटल मार्केटिंग",
          description: "अपनी डिजिटल मार्केटिंग एजेंसी शुरू करें",
          icon: "📱",
        },
        {
          title: "ई-लर्निंग प्लेटफॉर्म",
          description: "ऑनलाइन कोर्स बनाएं और बेचें",
          icon: "🎓",
        },
        {
          title: "फिनटेक सॉल्यूशंस",
          description: "वित्तीय तकनीक उत्पाद विकसित करें",
          icon: "💳",
        },
        {
          title: "ग्रीन बिजनेस",
          description: "स्थायी और पर्यावरण अनुकूल उद्यम",
          icon: "🌱",
        },
        {
          title: "हेल्थ टेक",
          description: "स्वास्थ्य तकनीक समाधान",
          icon: "⚕️",
        },
        {
          title: "ई-कॉमर्स",
          description: "ऑनलाइन खुदरा और मार्केटप्लेस",
          icon: "🛍️",
        },
      ],
    },
  },
};

const SuccessStoryTimeline = ({ steps }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-8 mb-16 relative`}
        >
          {/* Timeline connector */}
          <div className="hidden md:block absolute h-full w-0.5 bg-green-200 left-1/2 transform -translate-x-1/2 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-green-400 rounded-full border-4 border-white shadow" />
          </div>

          {/* YouTube Video Container */}
          <div className="w-full md:w-1/2 relative">
            <div
              className="relative rounded-xl overflow-hidden shadow-lg"
              style={{ height: "315px" }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${step.youtubeId}?start=1&autoplay=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="backdrop-blur-sm bg-white/50 rounded-xl p-6">
              {/* Step Number */}
              <div className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-4">
                Step {index + 1}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {step.description}
              </p>

              <div className="pt-4 border-t border-gray-100/20">
                <p className="text-gray-500 text-sm">{step.extraDescription}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const BusinessIdeasScroll = ({ ideas }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const scrollAmount = 4; // Increased scroll speed
    let scrollInterval;

    if (container) {
      scrollInterval = setInterval(() => {
        container.scrollBy({
          left: scrollAmount,
          behavior: "auto", // Changed to auto for smoother continuous scrolling
        });

        // Reset scroll position to the start if at the end
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0 });
        }
      }, 20); // Reduced interval for smoother animation
    }

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Left blur gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-br from-green-50 to-white z-10"></div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar gap-6 px-12 py-6 scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {/* Double the items for seamless infinite scroll */}
        {[...ideas, ...ideas].map((idea, index) => (
          <div
            key={index}
            className="flex-none w-72 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="text-4xl mb-4 block">{idea.icon}</span>
            <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center justify-center gap-2">
              {idea.title}
              <ArrowUpRight className="h-4 w-4" />
            </h3>
            <p className="text-green-600 text-center">{idea.description}</p>
          </div>
        ))}
      </div>

      {/* Right blur gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
};

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <NavBar language={language} toggleLanguage={toggleLanguage} t={t.nav} />{" "}
      {/* Use NavBar */}
      <header className="text-center py-24">
        <h1 className="text-4xl font-bold text-green-800">{t.hero.title}</h1>
        <p className="mt-4 text-green-600">{t.hero.subtitle}</p>
        <button className="mt-6 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg">
          {t.hero.cta}
        </button>
      </header>
      <Features t={t.features} />
      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-bold text-green-800">
          {t.businessIdeas.title}
        </h2>
        <p className="mt-2 text-green-600">{t.businessIdeas.subtitle}</p>
        <BusinessIdeasScroll ideas={t.businessIdeas.ideas} />
      </section>
      <section className="py-12 bg-gradient-to-br from-green-100 to-green-50">
        <h2 className="text-2xl font-bold text-green-800 text-center">
          {t.successStories.title}
        </h2>
        <p className="mt-2 text-green-600 text-center">
          {t.successStories.subtitle}
        </p>
        <SuccessStoryTimeline steps={t.successStories.steps} />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
