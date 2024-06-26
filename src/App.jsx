import { useState } from "react";
import Review from "./Review/Review";
import reviews from "./data";

const App = () => {
  const [persons, setPersons] = useState(reviews);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { image, job, text, id, name } = persons[currentIndex];

  const handlePrev = (id) => {
    console.log(id);
    const currentIndex = persons.findIndex((person) => person.id === id);

    console.log(currentIndex);
    if (currentIndex <= 0) {
      setCurrentIndex(persons.length - 1);
      return;
    }

    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = (id) => {
    const currentIndex = persons.findIndex((person) => person.id === id);
    if (currentIndex >= persons.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * persons.length);
    if (randomIndex === currentIndex) {
      setCurrentIndex(randomIndex + 1);
      return;
    }
    setCurrentIndex(randomIndex);
  };
  return (
    <main>
      <section className="container">
        <Review
          name={name}
          image={image}
          text={text}
          id={id}
          job={job}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleSurprise={handleSurprise}
        />
      </section>
    </main>
  );
};
export default App;
