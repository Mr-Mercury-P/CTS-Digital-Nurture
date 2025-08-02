import officeImage from './office1.jpg';

function App() {
  const offices = [
    {
      name: 'Cyber Tower',
      rent: 45000,
      address: 'Hitech City, Hyderabad',
      image: 'https://via.placeholder.com/300x200?text=Cyber+Tower'
    },
    {
      name: 'Tidel Park',
      rent: 70000,
      address: 'Taramani, Chennai',
      image: 'https://via.placeholder.com/300x200?text=Tidel+Park'
    },
    {
      name: 'Manyata Tech Park',
      rent: 60000,
      address: 'Nagavara, Bangalore',
      image: 'https://via.placeholder.com/300x200?text=Manyata+Tech+Park'
    }
  ];


  return (
    <div>
      <h1>Office Space Rental App</h1>
      <p>Find the best offices to rent across cities!</p>

      {offices.map((office, index) => (
        <div key={index}>
          <img src={officeImage} alt={office.name} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{' '}
            <span>₹{office.rent}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
