// import logo from "./logo.svg";
import "./App.css";

function App() {
  const properties = [
    { nameM: "venki", position: "Web Designer" },
    { nameM: "kiven", position: "softy engg" },
  ];
  return (
    <div className="App">
      {properties.map((value, index) => (
        <Profile key={index} nameM={value.nameM} position={value.position} />
      ))}
    </div>
  );
}

export default App;

function Profile({ nameM, position }) {
  return (
    <div>
      <h1>{nameM}</h1>
      <h2>{position}</h2>
    </div>
  );
}
