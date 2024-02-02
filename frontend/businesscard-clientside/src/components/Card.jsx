//Display the indivisual business card
import React from "react";

export function Card({ card }) {
  return (
    <div className="card">
      <div className="name-descDiv">
        <h2>{card.name}</h2>
        <p>{card.description}</p>
      </div>
      <div className="interestsDiv">
        <h3>Interests:</h3>
        <ul>
          {card.interests.map((interest, index) => {
            return <li key={card._id}>{interest}</li>;
          })}
        </ul>
      </div>
      <div className="socialDiv">
        <ul>
          {card.socialsLink.map((socialLink) => {
            return (
              <>
                <li key="key.id">
                  <a
                    href={socialLink[0]}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    LinkedIn
                  </a>
                </li>
                <li key={card._id}>
                  <a
                    href={socialLink[1]}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    X(Twitter)
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

//hadling warning: "missing in props-validation"
