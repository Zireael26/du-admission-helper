import { useState } from "react";
import "./ScalingSection.css";

const ScalingSection = (props) => {
  const [achievedMarks, setAchievedMarks] = useState(0);
  const [scaleFrom, setScaleFromMarks] = useState(0);
  const [scaleTo, setScaleToMarks] = useState(0);
  const [scaledMarks, setScaledMarks] = useState(0.0);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const allMarks = {
      achievedMarks: parseInt(achievedMarks),
      scaleFrom: parseInt(scaleFrom),
      scaleTo: parseInt(scaleTo),
    };

    const avgMarks = parseFloat(
      (allMarks.achievedMarks / allMarks.scaleFrom) * allMarks.scaleTo
    ).toFixed(2);

    setScaledMarks(avgMarks);

    console.log(avgMarks);
  };

  const achievedMarksChangeHandler = (event) => {
    setAchievedMarks(event.target.value);
  };

  const scaleFromChangeHandler = (event) => {
    setScaleFromMarks(event.target.value);
  };

  const scaleToChangeHandler = (event) => {
    setScaleToMarks(event.target.value);
  };

  const resetMarksHandler = () => {
    setAchievedMarks(0);
    setScaleFromMarks(0);
    setScaleToMarks(0);
  };

  let scalingText = <h3>Enter marks and press 'Scale Marks' button</h3>;
  if (scaleFrom > 0 && scaleTo > 0) {
    if (scaleFrom > scaleTo) {
      scalingText = <h3>The student's scaled down marks are</h3>;
    } else {
      scalingText = <h3>The student's scaled up marks are</h3>;
    }
  }

  return (
    <div className="new-expense">
      <form onSubmit={submitFormHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Achieved Marks</label>
            <input
              type="number"
              value={achievedMarks}
              min="0"
              step="1"
              onChange={achievedMarksChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Out of</label>
            <input
              type="number"
              value={scaleFrom}
              min="0"
              step="1"
              onChange={scaleFromChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Scale To</label>
            <input
              type="number"
              value={scaleTo}
              min="0"
              step="1"
              onChange={scaleToChangeHandler}
            />
          </div>
        </div>
        {scalingText}
        <h1 className="new-expense__number"> {scaledMarks} </h1>
        <div className="new-expense__actions">
          <button onClick={resetMarksHandler}>Reset</button>
          <button type="submit">Scale Marks</button>
        </div>
      </form>
    </div>
  );
};

export default ScalingSection;
