import React, { useState, useEffect } from "react";
import {
  Search,
  BookOpen,
  Play,
  Clock,
  Star,
  Code,
  Database,
  Palette,
  Bookmark,
  TrendingUp,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const LearningCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("react js tutorial");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [activeTag, setActiveTag] = useState(1);

  const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const RESULTS_PER_PAGE = 9;

  // Quick search categories with icons and search terms
  const quickSearchTags = [
    {
      id: 1,
      icon: <Code size={16} />,
      label: "React JS",
      searchTerm: "react js tutorial",
    },
    {
      id: 2,
      icon: <Database size={16} />,
      label: "Node.js",
      searchTerm: "node.js tutorial",
    },
    {
      id: 3,
      icon: <Palette size={16} />,
      label: "CSS",
      searchTerm: "css tutorial",
    },
    {
      id: 4,
      icon: <TrendingUp size={16} />,
      label: "JavaScript",
      searchTerm: "javascript tutorial",
    },
    {
      id: 5,
      icon: <Bookmark size={16} />,
      label: "HTML",
      searchTerm: "html tutorial",
    },
  ];

  // ... (Keep the formatDuration and fetchVideoDetails functions from previous version)

  // Add this function definition after the quickSearchTags constant
  const fetchVideos = async (searchTerm = "", pageToken = "") => {
    setLoading(true);
    setError(null);

    try {
      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?` +
          `part=snippet&` +
          `maxResults=${RESULTS_PER_PAGE}&` +
          `q=${encodeURIComponent(searchTerm || "web development tutorial")}&` +
          `type=video&` +
          `pageToken=${pageToken || ""}&` +
          `key=${YOUTUBE_API_KEY}`
      );

      const searchData = await searchResponse.json();

      if (!searchData.items) {
        throw new Error("No videos found");
      }

      // Get video IDs for detailed info
      const videoIds = searchData.items.map((item) => item.id.videoId);

      // Fetch additional details for each video
      const detailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?` +
          `part=contentDetails,statistics` +
          `&id=${videoIds.join(",")}` +
          `&key=${YOUTUBE_API_KEY}`
      );

      const detailsData = await detailsResponse.json();

      // Combine search results with video details
      const enhancedVideos = searchData.items.map((item) => {
        const details = detailsData.items.find(
          (detail) => detail.id === item.id.videoId
        );
        const duration = details
          ? formatDuration(details.contentDetails.duration)
          : "N/A";

        return {
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
          publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString(),
          channelTitle: item.snippet.channelTitle,
          duration: duration,
          viewCount: details
            ? parseInt(details.statistics.viewCount).toLocaleString()
            : "N/A",
          likeCount: details
            ? parseInt(details.statistics.likeCount).toLocaleString()
            : "N/A",
          category: "youtube",
        };
      });

      setVideos(pageToken ? [...videos, ...enhancedVideos] : enhancedVideos);
      setNextPageToken(searchData.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setError(error.message || "Error fetching videos");
    } finally {
      setLoading(false);
    }
  };

  // Also add the formatDuration helper function
  const formatDuration = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match[1] || "").replace("H", "");
    const minutes = (match[2] || "").replace("M", "");
    const seconds = (match[3] || "").replace("S", "");

    let formattedDuration = "";
    if (hours) formattedDuration += `${hours}:`;
    formattedDuration += `${minutes.padStart(2, "0")}:`;
    formattedDuration += seconds.padStart(2, "0");

    return formattedDuration;
  };

  useEffect(() => {
    fetchVideos(searchQuery);
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery) {
        fetchVideos(searchQuery);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleQuickSearch = (tag) => {
    setActiveTag(tag.id === activeTag ? null : tag.id);
    setSearchQuery(tag.searchTerm);
    fetchVideos(tag.searchTerm);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setActiveTag(null);
    fetchVideos("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            Web Development Learning Hub
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Discover the best tutorials and courses for web development
          </p>

          {/* Enhanced Search Bar */}
          <div className="relative max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="w-full pl-12 pr-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 text-lg shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Quick Search Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {quickSearchTags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => handleQuickSearch(tag)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all 
                    ${
                      activeTag === tag.id
                        ? "bg-white text-blue-600 shadow-lg"
                        : "bg-blue-700 text-white hover:bg-blue-600"
                    }`}
                >
                  {tag.icon}
                  <span>{tag.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Status Messages */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
            <p className="flex items-center">
              <X className="mr-2" size={20} />
              {error}
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && videos.length === 0 && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative group">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                />

                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </span>
              </div>

              <CardHeader>
                <CardTitle className="text-lg font-semibold line-clamp-2 hover:text-blue-600">
                  {video.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2 text-gray-600">
                  {video.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{video.likeCount} likes</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{video.channelTitle}</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    {video.viewCount} views • {video.publishedAt}
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/watch?v=${video.id}`,
                        "_blank"
                      )
                    }
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span>Watch Tutorial</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {nextPageToken && !loading && videos.length > 0 && (
          <div className="text-center mt-12">
            <button
              onClick={() => fetchVideos(searchQuery, nextPageToken)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Load More Tutorials
            </button>
          </div>
        )}

        {/* Loading More Indicator */}
        {loading && videos.length > 0 && (
          <div className="text-center mt-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningCenter;
