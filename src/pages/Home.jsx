import React, { useState, useEffect } from 'react';
import ErrorPage from './ErrorPage';
import { MusicIcon } from '../assets/assets';
import 'daisyui/dist/full.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import MusicRecommender from './Recommender';

const Home = () => {
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [year, setYear] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [recommendations, setRecommendations] = useState([]);
      const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          song_list: [{ name: songName, year }],
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('An error occurred while fetching recommendations');
      }

      const result = await response.json();
      // Convert the result object to an array
      const recommendationArray = Object.entries(result.recommendation).map(([key, value]) => value);
      console.log(recommendationArray)

      // Preprocess data
      const processedRecommendations = recommendationArray.map((song, index) => ({
        ...song,
        artists: song.artists.slice(2, -2),
        rank: index + 1,
      }));

      setRecommendations(processedRecommendations);
    } catch (err) {
      setError(err.message);
    }
  };

  const reset = () => {
    setRecommendations([]);
    setError(null);
  };


  useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
    }, 2000);
  }, []);

  if (error) return <ErrorPage message={error } reset={reset}/>;

  if (recommendations.length) return <MusicRecommender musicList={recommendations} reset={reset} />;

  const recommendation = 'Enter a song that makes you happy!';
      return (
        <div className="text-white h-screen flex justify-center items-center">
      <div
        className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center animate__animated ${
          showForm ? 'animate__fadeOut' : 'animate__fadeIn'
        }`}
      >
        <img src={MusicIcon} alt="logo" width={"50rem"}/>
      </div>
      {showForm && (
        <div className="space-y-6 p-16 bg-base-100 shadow-lg rounded-xl animate__animated animate__fadeIn md:w-1/3 w-full">
          <div className="flex justify-center flex-col">
                <FontAwesomeIcon icon={faMusic} size="4x" style={{ color: "black", marginTop: '2rem' }} />
                <h1 className='text-black mt-3 font-bold'>Music Recommender</h1>
          </div>
                  <form onSubmit={handleSubmit}>
                                  <div className="text-center text-xl text-gray-600 mt-5 mb-10">{recommendation}</div>
            <div className="form-control">
              <label htmlFor="songName" className="label text-black">
                Song Name:
              </label>
              <input
                type="text"
                id="songName"
                value={songName}
                onChange={(event) => setSongName(event.target.value)}
                className="input input-bordered text-black"
              />
            </div>
            {/* <div className="form-control">
              <label htmlFor="artistName" className="label text-black">
                Artist Name:
              </label>
              <input
                type="text"
                id="artistName"
                value={artistName}
                onChange={(event) => setArtistName(event.target.value)}
                className="input input-bordered text-black"
              />
            </div> */}
            <div className="form-control">
              <label htmlFor="year" className="label text-black">
                Year:
              </label>
              <input
                type="text"
                id="year"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                className="input input-bordered text-black"
              />
            </div>
            <button type="submit" className="btn w-full mt-4">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
