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

import { Card, CardContent } from "../components/ui/card";

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
    <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg relative">
      {/* Main Roadmap */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-gray-200" />
        <div className="relative space-y-12">
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
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 shadow-lg ${
                        isCompleted
                          ? "bg-green-500"
                          : isPartial
                          ? "bg-yellow-500"
                          : "bg-gray-300"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 size={32} />
                      ) : (
                        <Icon size={32} />
                      )}
                    </div>
                    {isPartial && !isCompleted && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center">
                        <Eye size={16} className="text-yellow-600" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="flex gap-4">
                      <button
                        onClick={() => openVideo(step)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          stepProgress.video
                            ? "bg-green-100 text-green-700 border border-green-300"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                      >
                        {stepProgress.video ? (
                          <CheckCircle2 size={16} />
                        ) : (
                          <Play size={16} />
                        )}
                        {stepProgress.video ? "Watched" : "Watch Video"}
                      </button>
                      <button
                        onClick={() => openArticle(step)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          stepProgress.article
                            ? "bg-green-100 text-green-700 border border-green-300"
                            : "bg-gray-500 text-white hover:bg-gray-600"
                        }`}
                      >
                        {stepProgress.article ? (
                          <CheckCircle2 size={16} />
                        ) : (
                          <BookOpen size={16} />
                        )}
                        {stepProgress.article ? "Read" : "Read Article"}
                      </button>
                    </div>
                  </div>
                </div>

                {!isLast && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-4">
                    <ChevronDown size={24} className="text-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-3xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-xl">{selectedContent.title}</h3>
              <div className="flex gap-4">
                <a
                  href={`https://www.youtube.com/watch?v=${selectedContent.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <ExternalLink size={24} />
                </a>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="text-gray-500 hover:text-gray-600"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
              <h3 className="font-bold text-xl">{selectedContent.title}</h3>
              <button
                onClick={() => setShowArticleModal(false)}
                className="text-gray-500 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-4rem)]">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-8">
                  {selectedContent.article.intro}
                </p>
                {selectedContent.article.sections.map((section, idx) => (
                  <div key={idx} className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">
                      {section.title}
                    </h4>
                    <p className="mb-4 text-gray-600">{section.content}</p>
                    <ul className="space-y-2">
                      {section.points.map((point, pidx) => (
                        <li key={pidx} className="flex items-start gap-2">
                          <div className="mt-1.5">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          </div>
                          <span className="text-gray-700">{point}</span>
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
  );
};

export default RoadmapWithModals;
