import MarksForm from "./components/newExpense/MarksForm";
import ScalingSection from "./components/newExpense/ScalingSection";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <MarksForm />
      <ScalingSection />
      <p className="creation-text">Made with ❤️ by Abhishek Kaushik</p>
    </div>
  );
};

export default App;
