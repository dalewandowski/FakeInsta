import { useState, useEffect } from "react";
import PhotoIcon from "../PhotoIcon/PhotoIcon";
import "./randomPosts.css";

function RandomPosts() {
  const [photos, setPhotos] = useState("");
  const [loadingPhoto, setLoadingPhoto] = useState(true);

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
      })
      .catch((e) => {
        console.log("Couldn't get photos " + e);
        setLoadingPhoto(false);
      });
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
        photos.map((data) => {
          return (
            <div key={data.id} className="row mt-4">
              <img
                src={data.download_url}
                alt={data.author}
                className="w-100 h-100  overflow-scroll"
              />
              <PhotoIcon />
            </div>
          );
        })
      )}
    </main>
  );
}

export default RandomPosts;
