import React, { useState, useEffect } from "react";
import {
  CircleDollarSign,
  Target,
  TrendingUp,
  Landmark,
  CheckCircle2,
  ChevronDown,
  X,
  ExternalLink,
  BookOpen,
  Play,
  Eye,
  BarChart,
  Calendar,
  Star,
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const RoadmapWithModals = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("learningProgress");
    return saved ? JSON.parse(saved) : {};
  });

  const steps = [
    {
      id: 1,
      title: "निवेश शुरू करें",
      icon: CircleDollarSign,
      description: "प्रारंभिक पूंजी आवंटन के साथ अपनी निवेश यात्रा शुरू करें",
      videoId: "suC_Y2eZtAw",
      article: {
        intro:
          "हमारी व्यापक मार्गदर्शिका के साथ निवेश की बुनियादी बातों में महारत हासिल करें।",
        sections: [
          {
            title: "जोखिम सहनशीलता को समझना",
            content:
              "जोखिम सहनशीलता आपके बाजार की अस्थिरता सहने की क्षमता है। इसे प्रभावित करते हैं:",
            points: [
              "आपकी निवेश समयसीमा",
              "आर्थिक लक्ष्य",
              "बाजार में उतार-चढ़ाव के साथ आपकी व्यक्तिगत सहूलियत",
            ],
          },
          {
            title: "आधार तैयार करना",
            content:
              "निवेश में प्रवेश करने से पहले, सुनिश्चित करें कि आपके पास है:",
            points: [
              "3-6 महीने का आपातकालीन कोष",
              "स्पष्ट आर्थिक लक्ष्य",
              "बाजार तंत्र की बुनियादी समझ",
            ],
          },
          {
            title: "शुरुआत करना",
            content:
              "अपनी निवेश यात्रा शुरू करने के लिए इन चरणों का पालन करें:",
            points: [
              "एक रिटायरमेंट खाता खोलें",
              "लो-कॉस्ट इंडेक्स फंड्स पर शोध करें",
              "स्वचालित योगदान सेट करें",
            ],
          },
        ],
      },
    },
    {
      id: 2,
      title: "विकास चरण",
      icon: TrendingUp,
      description:
        "रणनीतिक निवेश के माध्यम से अपने पोर्टफोलियो का विस्तार करें",
      videoId: "NDjeeJwI08Q",
      article: {
        intro: "उन्नत रणनीतियों के साथ अपने निवेश को अगले स्तर पर ले जाएं।",
        sections: [
          {
            title: "पोर्टफोलियो विविधीकरण",
            content: "अपने निवेश को इन क्षेत्रों में फैलाएं:",
            points: [
              "विभिन्न परिसंपत्ति वर्गों में",
              "विभिन्न बाजार क्षेत्रों में",
              "भौगोलिक क्षेत्रों में",
            ],
          },
          {
            title: "जोखिम प्रबंधन",
            content: "अपने निवेश को सुरक्षित रखने के लिए:",
            points: [
              "नियमित पुनर्संतुलन",
              "स्टॉप-लॉस ऑर्डर्स",
              "पोजीशन साइजिंग",
            ],
          },
        ],
      },
    },
    {
      id: 3,
      title: "संपत्ति निर्माण",
      icon: BarChart,
      description: "लंबी अवधि के लिए संपत्ति निर्माण के लिए निवेश करें",
      videoId: "ABC12345",
      article: {
        intro:
          "लंबे समय तक चलने वाले संपत्ति निर्माण की कला में विशेषज्ञता प्राप्त करें।",
        sections: [
          {
            title: "धैर्य का महत्व",
            content: "संपत्ति निर्माण के लिए आवश्यक है:",
            points: [
              "लंबी अवधि के दृष्टिकोण को अपनाना",
              "बाजार की अस्थिरता को संभालना",
              "नियमित योगदान करना",
            ],
          },
          {
            title: "प्रभावी बजट",
            content: "संपत्ति निर्माण के लिए मजबूत बजट बनाना:",
            points: [
              "अपनी आय और खर्चों की समीक्षा करें",
              "जरूरी खर्चों को प्राथमिकता दें",
              "अनावश्यक खर्चों को कम करें",
            ],
          },
        ],
      },
    },
    {
      id: 4,
      title: "रिटायरमेंट प्लानिंग",
      icon: Calendar,
      description: "रिटायरमेंट के लिए सही योजना बनाएं और बचत करें",
      videoId: "DEF67890",
      article: {
        intro: "रिटायरमेंट के बाद की वित्तीय सुरक्षा के लिए तैयारी करें।",
        sections: [
          {
            title: "लक्ष्य निर्धारण",
            content: "अपने रिटायरमेंट लक्ष्यों को पहचानें:",
            points: [
              "अपनी वांछित जीवनशैली को परिभाषित करें",
              "आवश्यक वार्षिक आय का अनुमान लगाएं",
              "अपने बचत लक्ष्यों को समायोजित करें",
            ],
          },
          {
            title: "वित्तीय सुरक्षा",
            content: "सुनिश्चित करें कि आपके पास है:",
            points: [
              "एक विविध पोर्टफोलियो",
              "हेल्थकेयर और बीमा कवरेज",
              "रिटायरमेंट के लिए सुरक्षित निवेश",
            ],
          },
        ],
      },
    },
    {
      id: 5,
      title: "फाइनेंशियल स्वतंत्रता",
      icon: Star,
      description: "आर्थिक रूप से आत्मनिर्भर बनें और अपनी संपत्ति का आनंद लें",
      videoId: "GHI34567",
      article: {
        intro: "फाइनेंशियल स्वतंत्रता प्राप्त करने की अंतिम रणनीतियां जानें।",
        sections: [
          {
            title: "पैसिव इनकम",
            content: "पैसिव आय के स्रोत विकसित करें जैसे:",
            points: [
              "रेंटल प्रॉपर्टी",
              "डिविडेंड यील्ड स्टॉक्स",
              "डिजिटल प्रोडक्ट्स",
            ],
          },
          {
            title: "लाइफस्टाइल डिजाइन",
            content: "अपनी जीवनशैली को सरल बनाएं:",
            points: [
              "आवश्यक चीजों पर ध्यान केंद्रित करें",
              "अनावश्यक विलासिता से बचें",
              "सतत वित्तीय आदतें अपनाएं",
            ],
          },
        ],
      },
    },
  ];

  useEffect(() => {
    localStorage.setItem("learningProgress", JSON.stringify(progress));
  }, [progress]);

  const markComplete = (stepId, type) => {
    setProgress((prev) => ({
      ...prev,
      [stepId]: {
        ...prev[stepId],
        [type]: true,
      },
    }));
  };

  const getStepProgress = (stepId) => {
    const stepProgress = progress[stepId] || {};
    return {
      video: stepProgress.video || false,
      article: stepProgress.article || false,
    };
  };

  const openVideo = (step) => {
    setSelectedContent(step);
    setShowVideoModal(true);
    markComplete(step.id, "video");
  };

  const openArticle = (step) => {
    setSelectedContent(step);
    setShowArticleModal(true);
    markComplete(step.id, "article");
  };

  return (
    <>
      <NavBar language="en" toggleLanguage={() => {}} /> {/* Use NavBar */}
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-24 px-4">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-xl relative">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-t-xl p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">वित्तीय शिक्षा यात्रा</h1>
            <p className="text-green-100">
              अपनी वित्तीय यात्रा को आगे बढ़ाएं और सीखें
            </p>
          </div>

          {/* Main Roadmap */}
          <div className="relative p-8">
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-200 via-green-100 to-transparent" />
            <div className="relative space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const stepProgress = getStepProgress(step.id);
                const isCompleted = stepProgress.video && stepProgress.article;
                const isPartial = stepProgress.video || stepProgress.article;
                const isLast = index === steps.length - 1;

                return (
                  <div key={step.id} className="relative">
                    <div className="flex items-center gap-8">
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className={`w-20 h-20 rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 shadow-lg ${
                            isCompleted
                              ? "bg-gradient-to-br from-green-400 to-green-600"
                              : isPartial
                              ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                              : "bg-gradient-to-br from-gray-300 to-gray-400"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2
                              size={36}
                              className="drop-shadow-md"
                            />
                          ) : (
                            <Icon size={36} className="drop-shadow-md" />
                          )}
                        </div>
                        {isPartial && !isCompleted && (
                          <div className="absolute -top-1 -right-1 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                            <Eye size={18} className="text-yellow-600" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <div className="p-6">
                          <h3 className="font-bold text-2xl mb-3 text-gray-800">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 mb-6 text-lg">
                            {step.description}
                          </p>
                          <div className="flex gap-4">
                            <button
                              onClick={() => openVideo(step)}
                              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                                stepProgress.video
                                  ? "bg-green-50 text-green-700 border-2 border-green-300 hover:bg-green-100"
                                  : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg"
                              }`}
                            >
                              {stepProgress.video ? (
                                <CheckCircle2 size={20} />
                              ) : (
                                <Play size={20} />
                              )}
                              <span className="font-medium">
                                {stepProgress.video
                                  ? "पूर्ण किया गया"
                                  : "वीडियो देखें"}
                              </span>
                            </button>
                            <button
                              onClick={() => openArticle(step)}
                              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                                stepProgress.article
                                  ? "bg-green-50 text-green-700 border-2 border-green-300 hover:bg-green-100"
                                  : "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 shadow-md hover:shadow-lg"
                              }`}
                            >
                              {stepProgress.article ? (
                                <CheckCircle2 size={20} />
                              ) : (
                                <BookOpen size={20} />
                              )}
                              <span className="font-medium">
                                {stepProgress.article
                                  ? "पढ़ा गया"
                                  : "लेख पढ़ें"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {!isLast && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-8">
                        <ChevronDown size={28} className="text-green-300" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {showVideoModal && selectedContent && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-3xl shadow-2xl">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-2xl text-gray-800">
                  {selectedContent.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${selectedContent.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <button
                    onClick={() => setShowVideoModal(false)}
                    className="text-gray-500 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedContent.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* Article Modal */}
        {showArticleModal && selectedContent && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                <h3 className="font-bold text-2xl text-gray-800">
                  {selectedContent.title}
                </h3>
                <button
                  onClick={() => setShowArticleModal(false)}
                  className="text-gray-500 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto max-h-[calc(80vh-5rem)]">
                <div className="prose max-w-none">
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {selectedContent.article.intro}
                  </p>
                  {selectedContent.article.sections.map((section, idx) => (
                    <div key={idx} className="mb-10">
                      <h4 className="text-2xl font-semibold mb-4 text-gray-800">
                        {section.title}
                      </h4>
                      <p className="mb-6 text-gray-600 text-lg leading-relaxed">
                        {section.content}
                      </p>
                      <ul className="space-y-4">
                        {section.points.map((point, pidx) => (
                          <li key={pidx} className="flex items-start gap-3">
                            <div className="mt-2">
                              <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                            </div>
                            <span className="text-gray-700 text-lg">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default RoadmapWithModals;
