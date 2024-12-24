import React, { useState, useEffect } from "react";
import { Search, RefreshCcw, Globe, Radio, Apple } from "lucide-react";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("top"); // 'top', 'everything', 'bbc'
  const [searchQuery, setSearchQuery] = useState("");

  const fetchNews = async (type, query = "") => {
    const API_KEY = "140fb41a0e09493d9beafa9893943023";
    const BASE_URL = "https://newsapi.org/v2";

    let url;
    if (query) {
      url = `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`;
    } else {
      switch (type) {
        case "top":
          url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`;
          break;
        case "bbc":
          url = `${BASE_URL}/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;
          break;
        default:
          url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`;
      }
    }

    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles.filter((article) => article.source.id)); // Filter articles with valid id
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(activeTab);
  }, [activeTab]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews(activeTab, searchQuery);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Global News Hub
          </h1>
          <p className="text-blue-600">
            Stay informed with the latest news from around the world
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
          >
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-blue-200 
                         focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-blue-400 w-5 h-5" />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("top")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                          ${
                            activeTab === "top"
                              ? "bg-blue-500 text-white"
                              : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                          }`}
              >
                <Globe className="w-4 h-4" />
                <span>Top Headlines</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("everything")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                          ${
                            activeTab === "everything"
                              ? "bg-blue-500 text-white"
                              : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                          }`}
              >
                <Apple className="w-4 h-4" />
                <span>Apple News</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("bbc")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                          ${
                            activeTab === "bbc"
                              ? "bg-blue-500 text-white"
                              : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                          }`}
              >
                <Radio className="w-4 h-4" />
                <span>BBC News</span>
              </button>
            </div>
          </form>
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <RefreshCcw className="w-8 h-8 text-blue-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl 
                         transition-shadow duration-300 flex flex-col"
              >
                {article.urlToImage && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 m-2">
                      <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">
                        {article.source.name}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                    <span>{article.author || "Unknown"}</span>
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
