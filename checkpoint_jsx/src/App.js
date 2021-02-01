import logoinsta from "./logoinsta.png";
import "./App.css";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="social media">Social Media</h1>
        <div className="photo">
        <img src={logoinsta} alt="logoinsta" width= '200px'/>
        <img src="/logofb.png" alt="logofb" width= '200px'/>
        </div>
      </div>
      <video width="320" height="240" controls>
        <source src="/social media video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
