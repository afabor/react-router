import "./App.css";
import MyButton from "./components/MyButton/MyButton.jsx";
import Profile from "./components/NavBar/Profile.jsx";

function App() {
  return (
    <>
      <p>Hello, This is a React App</p>
      <MyButton buttonText="Are the props working?" />
      <Profile
        profileName="Stan Lee"
        profileAge="97"
        profileRole="Film/Comic Legend"
      />
      <Profile
        profileName="Rafael Nadal"
        profileAge="37"
        profileRole="Tennis Legend"
      />
      <Profile
        profileName="Michael Afabor"
        profileAge="25"
        profileRole="Greatest to Ever Do It"
      />
    </>
  );
}

export default App;
