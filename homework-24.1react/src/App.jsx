import "./App.css";
import character from "./card";
import photo from "./assets/lukeSkywalker.webp";
function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex rounded-[2vw] items-center justify-center min-h-20 bg-gray-800 shadow-lg w-200 max-w-150">
        <img className="w-50 rounded-[2vw] mb-2" src={photo} alt="" />
        <div className=" text-white ">
          <p className="color-white">Name: {character.name}</p>
          <p className="color-white">Height: {character.height}</p>
          <p className="color-white">Mass: {character.mass}</p>
          <p className="color-white">Skin Color: {character.skin_color}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
