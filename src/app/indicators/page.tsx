"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Search, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { sampleIndicators, type Indicator } from "@/data/sampleData";

const IndicatorsPage = () => {
  const [selectedIndicator, setSelectedIndicator] = useState<Indicator | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchStock, setSearchStock] = useState("");
  const [timePeriod, setTimePeriod] = useState("6M");

  const handleIndicatorClick = (indicator: Indicator) => {
    setSelectedIndicator(indicator);
  };

  const handleBack = () => {
    setSelectedIndicator(null);
    setSearchStock("");
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "bullish":
      case "up":
        return <TrendingUp className="text-green-600" size={20} />;
      case "bearish":
      case "down":
        return <TrendingDown className="text-red-600" size={20} />;
      default:
        return <Minus className="text-gray-600" size={20} />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "bullish":
      case "up":
        return "text-green-600";
      case "bearish":
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStockRecommendation = (stock: string, indicator: Indicator) => {
    if (indicator.suggestedStocks.bullish.includes(stock.toUpperCase())) {
      return "bullish";
    } else if (indicator.suggestedStocks.bearish.includes(stock.toUpperCase())) {
      return "bearish";
    }
    return "neutral";
  };

  if (selectedIndicator) {
    const stockRecommendation = searchStock ? getStockRecommendation(searchStock, selectedIndicator) : null;

    return (
      <div className="min-h-screen bg-ivory">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={handleBack}
              className="flex items-center text-navy hover:text-navy-alt transition-colors mr-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-light text-navy">{selectedIndicator.name}</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Metric Definition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-navy mb-4">Definition</h2>
                <p className="text-navy/80 leading-relaxed">{selectedIndicator.description}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-sm text-navy/60 mr-2">Current Trend:</span>
                  {getTrendIcon(selectedIndicator.trend)}
                  <span className={`ml-2 font-medium ${getTrendColor(selectedIndicator.trend)}`}>
                    {selectedIndicator.trend.charAt(0).toUpperCase() + selectedIndicator.trend.slice(1)}
                  </span>
                </div>
              </motion.div>

              {/* Trend Explanation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-navy mb-4">Trend Explanation</h2>
                <p className="text-navy/80 leading-relaxed">{selectedIndicator.explanation}</p>
              </motion.div>

              {/* Stock Suggestions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-navy mb-4">Suggested Stock Types</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-green-600 mb-2 flex items-center">
                      <TrendingUp size={16} className="mr-2" />
                      Bullish
                    </h3>
                    <div className="space-y-1">
                      {selectedIndicator.suggestedStocks.bullish.map((stock) => (
                        <span key={stock} className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-2 mb-1">
                          {stock}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-red-600 mb-2 flex items-center">
                      <TrendingDown size={16} className="mr-2" />
                      Bearish
                    </h3>
                    <div className="space-y-1">
                      {selectedIndicator.suggestedStocks.bearish.map((stock) => (
                        <span key={stock} className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded text-sm mr-2 mb-1">
                          {stock}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-navy/5 rounded-lg">
                  <p className="text-navy/80 text-sm leading-relaxed">{selectedIndicator.reasoning}</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Live Trend Data */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-navy">Live Trend Data</h2>
                  <select
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    className="border border-navy/20 rounded px-3 py-1 text-sm focus:outline-none focus:border-glow"
                  >
                    <option value="3M">3 Months</option>
                    <option value="6M">6 Months</option>
                    <option value="1Y">1 Year</option>
                  </select>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={selectedIndicator.data}>
                      <XAxis dataKey="date" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#4BE4C2"
                        strokeWidth={2}
                        dot={{ fill: "#4BE4C2", strokeWidth: 0, r: 4 }}
                        activeDot={{ r: 6, fill: "#4BE4C2" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Stock Search */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-navy mb-4">Search for a Stock</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy/40" size={20} />
                  <input
                    type="text"
                    placeholder="Enter stock symbol (e.g., AAPL)"
                    value={searchStock}
                    onChange={(e) => setSearchStock(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:border-glow"
                  />
                </div>

                {stockRecommendation && searchStock && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-lg"
                    style={{
                      backgroundColor: stockRecommendation === "bullish" ? "#f0fdf4" : stockRecommendation === "bearish" ? "#fef2f2" : "#f9fafb"
                    }}
                  >
                    <div className="flex items-center mb-2">
                      {getTrendIcon(stockRecommendation)}
                      <span className={`ml-2 font-semibold ${getTrendColor(stockRecommendation)}`}>
                        {searchStock.toUpperCase()} - {stockRecommendation.charAt(0).toUpperCase() + stockRecommendation.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-navy/80">
                      Based on the {selectedIndicator.name}, {searchStock.toUpperCase()} appears to be a {" "}
                      <strong>{stockRecommendation}</strong> bet according to this indicator.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-navy hover:text-navy-alt transition-colors text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-light text-navy">Indicators</h1>
          <p className="text-navy/60 mt-2">Early signals from unconventional sources</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy/40" size={20} />
            <input
              type="text"
              placeholder="Search indicators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:border-glow bg-white"
            />
          </div>
        </div>

        {/* Indicators List */}
        <div className="space-y-4">
          <AnimatePresence>
            {sampleIndicators
              .filter(indicator => 
                indicator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                indicator.description.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((indicator, index) => (
                <motion.div
                  key={indicator.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleIndicatorClick(indicator)}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-navy group-hover:text-navy-alt transition-colors">
                          {indicator.name}
                        </h3>
                        <div className="ml-3 flex items-center">
                          {getTrendIcon(indicator.trend)}
                        </div>
                        <span className="ml-2 text-xs bg-navy/10 text-navy px-2 py-1 rounded">
                          {indicator.category}
                        </span>
                      </div>
                      <p className="text-navy/70 leading-relaxed">
                        {indicator.description}
                      </p>
                    </div>
                    <ArrowRight 
                      className="text-navy/40 group-hover:text-glow transition-all group-hover:translate-x-1" 
                      size={24} 
                    />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default IndicatorsPage;
