import React from 'react';

export default function Home(props) {
    return (
      <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h3 className="text-center">3. Semester eksamen :D</h3>
            <br />
            <p>
            Rest -> List of Walkers: Få et overblik over alle walkers
            </p>
            <p>Rest -> Dogs by Owner: Find de hunde som en ejer har via ejer-id</p>
            <p>Rest -> Walker by Dog: Find de Walker som en hund har</p>
            <p>Rest -> CRUD: Opret, ændre eller slet en hund. Owner og Walker har unikke tlf. nr. Når man opretter en ny, hvis man ændre deres nr :)</p>
            <p>Rest -> Connect: Forbind en hund med dens nye ejer</p>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
    );
  }