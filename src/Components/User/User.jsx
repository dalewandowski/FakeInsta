import { useEffect, useContext } from "react";
import getRandomUser from "../../Functional/getRandomUser";
import { Context } from "../../context/randomUserContext";

function User() {
  const { user, setUser } = useContext(Context);

  useEffect(() => {
    getRandomUser(user, setUser);
  }, []);

  return (
    <div className="container">
      USER
      {/* {user.map((user) => (
        <div className="row" key={user.login.uuid}>
          <img
            className=" col- rounded-circle"
            style={{ width: "40px", height: "40px" }}
            src={user.picture.large}
            alt={user.name.first}
          />
          <p className="username row">{user.login.username}</p>
        </div>
      ))} */}
    </div>
  );
}
export default User;
