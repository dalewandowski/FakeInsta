function getRandomUser(setUser, setLoading) {
  let randomResult = Math.floor(Math.random() * 35 + 50);

  const url = "https://randomuser.me/api/?results=" + randomResult;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("SERVER ERROR" + response.status);
      }
      return response.json();
    })
    .then((data) => {
      setUser(data.results);
      setLoading(false);
    })
    .catch((e) => console.log("Couldn't get users " + e));
}

export default getRandomUser;
