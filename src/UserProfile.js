import "./styles.css";
export default function UserProfile(props) {
  return (
    <div>
      <div>
        <h1> {props.name}</h1>
        <h3> {props.title}</h3>
        <div>
          {props.skillset.map((el) => (
            <p> {el}</p>
          ))}
        </div>
      </div>

      <div>
        <img src={props.avatar_url} alt="err" />
      </div>
    </div>
  );
}
