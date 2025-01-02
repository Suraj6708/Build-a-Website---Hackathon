import React, { useState } from "react";
import {
  CircleDollarSign,
  Target,
  TrendingUp,
  Landmark,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const VerticalRoadmap = () => {
  const [currentStep] = useState(2);

  const steps = [
    {
      id: 1,
      title: "Start Investing",
      icon: CircleDollarSign,
      description:
        "Begin your investment journey with initial capital allocation",
    },
    {
      id: 2,
      title: "Growth Phase",
      icon: TrendingUp,
      description: "Expand your portfolio through strategic investments",
    },
    {
      id: 3,
      title: "Wealth Building",
      icon: Landmark,
      description: "Diversify assets and leverage compound growth",
    },
    {
      id: 4,
      title: "Goal Achievement",
      icon: Target,
      description: "Reach your financial independence targets",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-gray-200" />

        {/* Steps */}
        <div className="relative space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = step.id <= currentStep;
            const isActive = step.id === currentStep;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id} className="relative">
                {/* Content */}
                <div
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 shadow-lg ${
                        isCompleted
                          ? "bg-green-500"
                          : isActive
                          ? "bg-blue-500"
                          : "bg-gray-300"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 size={32} />
                      ) : (
                        <Icon size={32} />
                      )}
                    </div>

                    {/* Progress indicator */}
                    {isCompleted && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-green-600" />
                      </div>
                    )}
                  </div>

                  {/* Text content */}
                  <div
                    className={`flex-1 p-6 rounded-lg transition-all duration-300 ${
                      isCompleted
                        ? "bg-green-50"
                        : isActive
                        ? "bg-blue-50"
                        : "bg-gray-50"
                    }`}
                  >
                    <h3
                      className={`font-bold text-xl mb-2 ${
                        isCompleted
                          ? "text-green-700"
                          : isActive
                          ? "text-blue-700"
                          : "text-gray-700"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Connector */}
                {!isLast && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-4">
                    <ChevronDown
                      size={24}
                      className={`${
                        isCompleted ? "text-green-500" : "text-gray-300"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-12 flex gap-6 justify-center text-sm border-t pt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <span>Current</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gray-300"></div>
          <span>Remaining</span>
        </div>
      </div>
    </div>
  );
};

export default VerticalRoadmap;
