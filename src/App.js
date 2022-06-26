import UserProfile from "./UserProfile";
import "./styles.css";

export default function App() {
  const skillset = ["Node.js", "React", "Redux", "JavaScript", "CSS", "HTML"];
  return (
    <div className="App">
      <UserProfile
        name="Shailesh"
        avatar_url="https://m.media-amazon.com/images/I/61KNBTw4K8S._UX679_.jpg"
        title="Software Eng"
        skillset={skillset}
        //
      />
    </div>
  );
}
