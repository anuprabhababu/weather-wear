"use client";
import React from "react";

function MainComponent() {
  const [page, setPage] = useState(0);
  const [weather, setWeather] = useState("");

  const getSuggestion = (weather) => {
    switch (weather) {
      case "summer":
        return "It's too hot outside!! Dress lighter.Light cotton clothes, shorts, t-shirts, sandals, sunglasses, and a sun hat would be best";
      case "winter":
        return "It's too chilly!! Wear a  warm coat, sweater, thermal wear, boots, gloves, scarf, and beanie";
      case "autumn":
        return "The climate is not too hot!!A light jacket, long-sleeve shirts, jeans, and closed-toe shoes would serve the purpose";
      case "rainy":
        return "Ready to get wet??Protect yourself by a raincoat, umbrella, waterproof boots, and water-resistant clothing";
      default:
        return "Select a season to get outfit suggestions";
    }
  };

  if (page === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-400 to-slate-500 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl md:text-6xl font-crimson-text text-black mb-8">
          WeatherWear
        </h1>
        <p className="text-xl text-black mb-8">Your personal outfit advisor</p>
        <button
          onClick={() => setPage(1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-roboto px-8 py-3 rounded-lg shadow-lg transition-colors duration-200"
        >
          Get Started
        </button>
      </div>
    );
  }

  if (page === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-400 to-slate-500 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl md:text-4xl font-crimson-text text-black mb-8">
          Select the Season
        </h2>
        <div className="w-full max-w-md">
          <select
            name="weather"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            className="w-full p-3 rounded-lg mb-4 border-2 border-black focus:border-black outline-none bg-white text-black"
          >
            <option value="">Choose a season...</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="autumn">Autumn</option>
            <option value="rainy">Rainy</option>
          </select>
          <button
            onClick={() => setPage(2)}
            disabled={!weather}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-roboto px-8 py-3 rounded-lg shadow-lg transition-colors duration-200"
          >
            Get Outfit Suggestion
          </button>
        </div>
        <button
          onClick={() => setPage(0)}
          className="mt-4 text-black hover:text-gray-800"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-400 to-slate-500 flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl md:text-4xl font-crimson-text text-black mb-8">
        Here's what you should wear:
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <p className="text-xl text-black mb-6">{getSuggestion(weather)}</p>
      </div>
      <button
        onClick={() => setPage(1)}
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-roboto px-8 py-3 rounded-lg shadow-lg transition-colors duration-200"
      >
        Try Another Season
      </button>
    </div>
  );
}

export default MainComponent;