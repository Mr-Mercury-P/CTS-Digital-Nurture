import React from 'react';

const IndianPlayers = () => {
  const players = [
    "Rohit", "Virat", "Gill", "Iyer", "Pant", 
    "Hardik", "Jadeja", "Ashwin", "Bumrah", "Shami", "Siraj"
  ];

  const oddTeam = players.filter((_, i) => i % 2 !== 0);
  const evenTeam = players.filter((_, i) => i % 2 === 0);

  const T20players = ["Rohit", "Pant", "Hardik"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Saha"];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, i) => <li key={i}>{player}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, i) => <li key={i}>{player}</li>)}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((player, i) => <li key={i}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
