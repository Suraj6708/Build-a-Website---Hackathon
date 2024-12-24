import React from "react";
import { Layout } from "lucide-react";
import { UserCircle } from "lucide-react";
import { Briefcase } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Users } from "lucide-react";
import { Bike } from "lucide-react";
import { Newspaper } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share2 } from "lucide-react";
import { CheckSquare } from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: UserCircle,
      title: "User Profiles",
      description: "View and manage detailed user profiles",
      link: "/profiles",
    },
    {
      icon: Briefcase,
      title: "Job Board",
      description: "Find opportunities and connect with employers",
      link: "/jobs",
    },
    {
      icon: BookOpen,
      title: "Learning Center",
      description: "Access courses and educational content",
      link: "/learn",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with other users and build relationships",
      link: "/community",
    },
    {
      icon: Bike,
      title: "Bike Sharing",
      description: "Book and share bikes with other users",
      link: "/bikes",
    },
    {
      icon: Newspaper,
      title: "Daily Tech News",
      description: "Stay updated with the latest tech news",
      link: "/news",
    },
    {
      icon: MessageCircle,
      title: "Chat",
      description: "Real-time communication with other users",
      link: "/chat",
    },
    {
      icon: Share2,
      title: "Content Sharing",
      description: "Share and view images and videos",
      link: "/share",
    },
    {
      icon: CheckSquare,
      title: "To-do Lists",
      description: "Manage your personal tasks",
      link: "/todos",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-12">
          <Layout className="w-12 h-12 text-white mr-4" />
          <h1 className="text-4xl font-bold text-white">Central Hub</h1>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <a
                key={feature.title}
                href={feature.link}
                className="group p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg 
                         hover:bg-opacity-20 transition-all duration-300 
                         border border-white border-opacity-20"
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-12 h-12 text-blue-200 group-hover:text-blue-100 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-blue-100 text-sm">
          <p>© 2024 Central Hub. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
