import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MusicRecommender from './pages/Recommender';

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<MusicRecommender />} />
      </Routes>
    </BrowserRouter>
  );
}


export default RouterComponent;
