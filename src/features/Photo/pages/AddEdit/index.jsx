import React from "react";
import "./AddEdit.scss";
import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/PhotoSlice";
import { useHistory, useParams } from "react-router-dom";
function AddEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) => {
    const foundPhoto = state.photos.find((x) => x.id === +photoId);
    return foundPhoto;
  });

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form submit", values);

      setTimeout(() => {
        if (isAddMode) {
          // const newPhoto = {
          //   ...values,
          //   id: randomNum
          // }
          const action = addPhoto(values);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }
        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };
  return (
    <div>
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEdit;
