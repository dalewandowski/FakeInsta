import { useEffect, useContext } from "react";
import { Context } from "../../context/randomUserContext";
import getRandomUser from "../../Functional/getRandomUser";
import "./stories.css";

function Stories() {
  const { user, setUser, loading, setLoading } = useContext(Context);

  useEffect(() => {
    getRandomUser(user, loading, setUser, setLoading);
  }, []);

  return (
    <section className="storiesContainer d-flex text-center">
      <div className="yourStory align-self-center">
        <img
          className="rounded-circle yourProfile storiesProfile"
          src="/src/assets/profilePictrue/profile.jpg"
          alt="Damian Lewandowski"
        />
        <span className="text-muted yourUserName username"> Your Story</span>
      </div>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        user.map((user) => (
          <div key={user.login.uuid}>
            <img
              src={user.picture.large}
              alt={user.name.first}
              className="rounded-circle m-2 storiesProfile"
            />
            <p className="username">{user.login.username}</p>
          </div>
        ))
      )}
    </section>
  );
}
export default Stories;
