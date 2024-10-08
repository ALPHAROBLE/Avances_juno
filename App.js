import React, { useState } from 'react';
import './App.css';
import BarChartComponent from './BarChart';

function App() {
  const [selectedEmotionAge, setSelectedEmotionAge] = useState('Todas');
  const [selectedEmotionCity, setSelectedEmotionCity] = useState('Todas');
  const [selectedCity, setSelectedCity] = useState(null);

  const emotions = ['Todas', 'Feliz', 'Triste', 'Enojado', 'Ansioso', 'Motivado', 'Aburrido'];
  const cities = ['#1 Buga', '#2 Cali', '#3 Tuluá', '#4 Sevilla'];

  const handleEmotionClickAge = (emotion) => {
    setSelectedEmotionAge(emotion);
  };

  const handleEmotionClickCity = (emotion) => {
    setSelectedEmotionCity(emotion);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="container">
      {/* Análisis por Edades */}
      <div className="section">
        <h2>Análisis por Edades</h2>
        <div className="filter-container">
          {emotions.map((emotion) => (
            <button
              key={emotion}
              className={`filter ${selectedEmotionAge === emotion ? 'selected' : ''}`}
              onClick={() => handleEmotionClickAge(emotion)}
            >
              {emotion}
            </button>
          ))}
        </div>
        <BarChartComponent selectedEmotion={selectedEmotionAge} />
      </div>

      {/* Análisis por Ciudades */}
      <div className="section cities">
        <h2>Análisis por Ciudades</h2>
        <div className="filter-container">
          {emotions.map((emotion) => (
            <button
              key={emotion}
              className={`filter ${selectedEmotionCity === emotion ? 'selected' : ''}`}
              onClick={() => handleEmotionClickCity(emotion)}
            >
              {emotion}
            </button>
          ))}
        </div>
        <div className="city-container">
          {cities.map((city) => (
            <button
              key={city}
              className={`city ${selectedCity === city ? 'selected' : ''}`}
              onClick={() => handleCityClick(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
