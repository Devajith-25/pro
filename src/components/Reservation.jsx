import React, { useState } from 'react';

function  Reservation() {
  // State variables to store user input
  const [name, setName] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    
    event.preventDefault();
    // Here you can implement the logic to submit the booking details
    console.log('Name:', name);
    console.log('Number of People:', numberOfPeople);
    console.log('Date:', date);
    console.log('Time:', time);
    // You can send this data to a server for processing or handle it in any way you want
  };

  return (
    <div>
    
        <br></br><br></br><br></br><br></br><br /><br></br>
      <h2> Table Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="numberOfPeople">Number of People:</label>
          <input
            type="number"
            id="numberOfPeople"
            value={numberOfPeople}
            onChange={(event) => setNumberOfPeople(parseInt(event.target.value))}
            min="1"
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
          />
        </div>
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
}

export default Reservation