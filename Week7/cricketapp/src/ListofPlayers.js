import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Rohit", score: 95 },
    { name: "Virat", score: 85 },
    { name: "Gill", score: 65 },
    { name: "Iyer", score: 75 },
    { name: "Pant", score: 55 },
    { name: "Hardik", score: 90 },
    { name: "Jadeja", score: 60 },
    { name: "Ashwin", score: 50 },
    { name: "Bumrah", score: 40 },
    { name: "Shami", score: 80 },
    { name: "Siraj", score: 45 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with Score below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
