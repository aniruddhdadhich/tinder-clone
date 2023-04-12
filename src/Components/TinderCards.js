import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

// const peeps = [
//   {
//     name: "Aniruddh ",
//     img: "https://cdn.britannica.com/61/137461-050-BB6C5D80/Brad-Pitt-2008.jpg",
//   },
//   {
//     name: "Virat",
//     img: "https://www.namesbiography.com/wp-content/uploads/2020/06/virat.jpg",
//   },
//   {
//     name: "Rohit",
//     img: "https://starsunfolded.com/wp-content/uploads/2015/01/Rohit-Sharma-2.jpg",
//   },
// ];

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const q = query(collection(database, "people"));
    const unsub = onSnapshot(q, (snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.img})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
