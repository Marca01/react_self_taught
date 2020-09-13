import React from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useHistory } from "react-router-dom";
import Banner from "components/Banner";
import Images from "Constant/Images";
import { useSelector, useDispatch } from "react-redux";
import PhotoList from "features/PhotoList";
import { removePhoto } from "features/Photo/PhotoSlice";

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePhotoEditClick = (photo) => {
    console.log("Edit: ", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };
  const handlePhotoRemoveClick = (photo) => {
    console.log("Remove: ", photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
