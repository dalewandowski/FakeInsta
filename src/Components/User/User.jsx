import { useEffect, useState } from "react";
import "./user.css";

function User() {
  const [users, setUsers] = useState([]); // Ustawiamy domyślną wartość jako tablica
  const url = "https://randomuser.me/api/?results=1";

  function getUser() {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("SERVER ERROR: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.results);
      })
      .catch((e) => console.log("Couldn't get users: " + e));
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.map((user) => (
          <div className="col d-flex align-items-center " key={user.login.uuid}>
            <div className="text-center">
              <img
                src={user.picture.medium}
                alt={user.name.first}
                className="rounded-circle my-2  userProfile"
              />
            </div>
            <p className="username ms-2 m-auto">{user.login.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
