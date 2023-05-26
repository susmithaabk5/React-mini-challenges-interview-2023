import "./App.css";
import Data from "./components/Data";
import SingleQuestion from "./components/Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about AwsomeApp</h3>
        <section className="info">
          {Data.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
