import React from "react";


// A functional component to display a greeting
function Greating({ name }) {
    // If 'name' exists, display the name; otherwise, display 'Passenger'
    return <h1>Hi, {name ? name : `Passenger`} this is react!</h1>;
}

// A reusable functional component for a button
const EvenButton = ({ onClickAction = () => {}, content }) => {
    return (
        // This button takes an 'onClickAction' function and 'content' text as props
        <button onClick={onClickAction}>
            {content ? content : `click me`}
        </button>
    );
};

// A smaller component to render the gender status text
const GenderStatusElement = ({ textContent }) => {
    return <h2>{textContent}</h2>;
};

// A reusable component that displays a message based on the 'isMale' prop
function GenderStatus({ isMale }) {
    // Use a nested ternary operator for conditional rendering based on the prop
    return isMale === null ? (
        <GenderStatusElement textContent="Please, enter your profil first!" />
    ) : isMale ? (
        <GenderStatusElement textContent="You are gentle man!" />
    ) : (
        <GenderStatusElement textContent="You are not gentle man!" />
    );
}

// The main component that holds all application logic and display
export default function App() {
  // Manage state for the user's name and gender
  const [profile, setProfile] = React.useState({
      name: "",
      isMale: null,
  });

  // A function to be executed when the "Tell me about yourself" button is clicked
  const handleProfil = () => {
      const userName = prompt(`who are you?`);
      const gender = confirm(
          `Do you really want to learn React?`
      );

      // Update the state with user's input, triggering a re-render
      setProfile({
          ...profile,
          name: userName,
          isMale: gender,
      });

      // Display an alert based on the user's choice
      return gender
          ? alert(`wow great ${userName}, you are gentle man!`)
          : alert(`oh ${userName}, so you are not gentle man`);
  };

  // A function for the second button that displays a message based on 'isMale' state
  const handleSecondButton = () => {
      // Use a nested ternary to display alerts based on the current state
      profile.isMale === null
          ? alert("Please, enter your profil first!")
          : profile.isMale
          ? alert(`hi ${profile.name}, you are gentle man`)
          : alert(`hi ${profile.name}, you are not gentle man`);
  };

  // Static data for a list of destinations
  const destinations = [
      "Bali",
      "Jakarta",
      "Bandung",
      "Yogyakarta",
  ];

  // Manage state for the number of 'likes'
  const [likes, setlikes] = React.useState(0);

  // A function to increment the number of 'likes' when the button is clicked
  function handleLikes() {
      setlikes(likes + 1);
  }

  // Return the JSX elements to be displayed on the screen
  return (
      <>
          {/* Display the components here */}
          <Greating name={profile.name} />
          <GenderStatus isMale={profile.isMale} />
          <EvenButton
              onClickAction={handleProfil}
              content="Tell me about your self for your profil"
          />
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eius voluptatem inventore,
              <br /> architecto ad impedit iusto quo saepe facere
              porro veniam? Minus suscipit eaque corporis esse.
              Architecto odio voluptate earum commodi!
          </p>
          <h3>This is all your destination</h3>
          <ul>
              {destinations.map((student) => (
                  <li key={student}>{student}</li>
              ))}
          </ul>
          <EvenButton
              onClickAction={handleSecondButton}
              content="Click Here!"
          />
          <EvenButton
              onClickAction={handleLikes}
              content={` like (${likes})`}
          />
      </>
  );
}