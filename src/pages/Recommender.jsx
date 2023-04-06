import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import 'tailwindcss/tailwind.css';

const MusicRecommender = ({musicList, reset}) => {
console.log(musicList)
  return (
    <div className="bg-black min-h-screen py-12 text-white">
          <div className="container mx-auto px-4 w-full md:w-1/2">
                        <div className="flex justify-center flex-col">
                <FontAwesomeIcon icon={faMusic} size="4x" style={{ color: "white", marginTop: '2rem' }} />
                <h1 className='text-black mt-3 font-bold'>Music Recommender</h1>
          </div>
        <h1 className="text-xl mt-5 font-bold mb-1">Music Recommendations</h1>
        <div className="bg-black mb-4 rounded-xl shadow-md p-4 text-sm">
                <button onClick={reset} className="btn text-sm mt-4 mb-4 bg-blue-600">
        Back to Home
      </button>
          <div className="overflow-x-auto">
            <div className="align-middle inline-block min-w-full">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-600">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-6">Name</th>
                      <th className="text-left py-3 px-6">Artists</th>
                      <th className="text-left py-3 px-6">Year</th>
                    </tr>
                  </thead>
                  <tbody className="bg-black divide-y divide-gray-600">
                    {musicList.map((music, index) => (
                      <tr key={index}>
                        <td className="py-4 px-6">{music.artists}</td>
                        <td className="py-4 px-6 text-white">{music.name}</td>
                        <td className="py-4 px-6">{music.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicRecommender;
