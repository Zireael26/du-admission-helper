import { useState } from "react";
import "./MarksForm.css";

const MarksForm = (props) => {
  const [firstMarks, setFirstMarks] = useState(0);
  const [secondMarks, setSecondMarks] = useState(0);
  const [thirdMarks, setThirdMarks] = useState(0);
  const [fourthMarks, setFourthMarks] = useState(0);
  const [averageMarks, setAverageMarks] = useState(0.0);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const allMarks = {
      firstMarks: parseFloat(firstMarks),
      secondMarks: parseFloat(secondMarks),
      thirdMarks: parseFloat(thirdMarks),
      fourthMarks: parseFloat(fourthMarks),
    };

    const avgMarks = parseFloat(
      (allMarks.firstMarks +
        allMarks.secondMarks +
        allMarks.thirdMarks +
        allMarks.fourthMarks) /
        4.0
    );

    setAverageMarks(avgMarks);

    console.log(avgMarks);
  };

  const firstMarksChangeHandler = (event) => {
    setFirstMarks(event.target.value);
  };

  const secondMarksChangeHandler = (event) => {
    setSecondMarks(event.target.value);
  };

  const thirdMarksChangeHandler = (event) => {
    setThirdMarks(event.target.value);
  };

  const fourthMarksChangeHandler = (event) => {
    setFourthMarks(event.target.value);
  };

  const resetMarksHandler = () => {
    setFirstMarks(0);
    setSecondMarks(0);
    setThirdMarks(0);
    setFourthMarks(0);
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitFormHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Marks in first subject</label>
            <input
              type="number"
              value={firstMarks}
              min="0"
              step="0.01"
              onChange={firstMarksChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Marks in second subject</label>
            <input
              type="number"
              value={secondMarks}
              min="0"
              step="0.01"
              onChange={secondMarksChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Marks in third subject</label>
            <input
              type="number"
              value={thirdMarks}
              min="0"
              step="0.01"
              onChange={thirdMarksChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Marks in fourth subject</label>
            <input
              type="number"
              value={fourthMarks}
              min="0"
              step="0.01"
              onChange={fourthMarksChangeHandler}
            />
          </div>
        </div>
        <h3> The student's average marks are</h3>
        <h1 className="new-expense__number"> {averageMarks} </h1>
        <div className="new-expense__actions">
          <button onClick={resetMarksHandler}>Reset</button>
          <button type="submit">Calculate Average</button>
        </div>
      </form>
    </div>
  );
};

export default MarksForm;
