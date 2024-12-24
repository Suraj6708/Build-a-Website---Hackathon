import React, { useState } from "react";
import { Search, BookOpen, Play, Clock, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const LearningCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample course data (replace with API data later)
  const courses = [
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React development",
      duration: "2h 30m",
      category: "development",
      level: "Beginner",
      rating: 4.5,
      thumbnail: "/api/placeholder/320/180",
    },
    {
      id: 2,
      title: "Advanced JavaScript Patterns",
      description: "Master advanced JavaScript concepts",
      duration: "3h 45m",
      category: "development",
      level: "Advanced",
      rating: 4.8,
      thumbnail: "/api/placeholder/320/180",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      description: "Learn essential design principles",
      duration: "4h 15m",
      category: "design",
      level: "Intermediate",
      rating: 4.6,
      thumbnail: "/api/placeholder/320/180",
    },
  ];

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
    { id: "business", name: "Business" },
  ];

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Learning Center</h1>
        <p className="text-gray-600">
          Expand your knowledge with our curated courses
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Categories */}
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category.id
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-xl">{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors">
                <Play className="w-4 h-4" />
                <span>Start Learning</span>
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LearningCenter;
