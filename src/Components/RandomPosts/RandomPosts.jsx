import { useState, useEffect } from "react";
import PhotoIcon from "../PhotoIcon/PhotoIcon";
import User from "../User/User";
import Footer from "../Footer/Footer";
import "./randomPosts.css";

function RandomPosts() {
  const [photos, setPhotos] = useState("");
  const [loadingPhoto, setLoadingPhoto] = useState(true);
  const [likes, setLikes] = useState({});

  let userLimit = Math.floor(Math.random() * 55 + 10);
  let randomPage = Math.floor(Math.random() * 15 + 1);
  let randomPhotoUrl =
    "https://picsum.photos/v2/list?page=" + randomPage + "&limit=" + userLimit;

  function getRandomPhotos() {
    setLoadingPhoto(true);
    fetch(randomPhotoUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("SERVER ERROR" + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
        setLoadingPhoto(false);

        let initialLikes = {};
        data.forEach((photo) => {
          initialLikes[photo.id] = Math.floor(Math.random() * 2500);
        });
        setLikes(initialLikes);
      })
      .catch((e) => {
        console.log("Couldn't get photos " + e);
        setLoadingPhoto(false);
      });
  }

  function handleLike(photoId, isLiked) {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [photoId]: prevLikes[photoId] + (isLiked ? 1 : -1),
    }));
  }

  useEffect(() => {
    getRandomPhotos();
  }, []);

  return (
    <main className="container">
      {loadingPhoto ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        photos.map((data) => (
          <div
            key={data.id}
            className="container bg-light shadow-sm  rounded-3 mt-3 p-2"
          >
            <div className="row">
              <User />
            </div>
            <div className="row">
              <img
                src={data.download_url}
                alt={data.author}
                className="w-100 h-100 overflow-scroll rounded-3"
              />
              <PhotoIcon
                onLike={(isLiked) => handleLike(data.id, isLiked)}
                likes={likes[data.id]}
              />
            </div>
          </div>
        ))
      )}
    </main>
  );
}

export default RandomPosts;
