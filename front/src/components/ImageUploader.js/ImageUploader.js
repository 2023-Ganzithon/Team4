import React, { useState } from "react";
import styles from "./ImageUploader.module.css";
import deleteButton from "../../assets/image/cancel_icon.png";

const ImageUploader = ({ setImage }) => {
  const [images, setImages] = useState([]);

  const onUpload = (e) => {
    const imageLists = e.target.files;
    setImage(e.target.files[0]);
    let imageUrlLists = [...images];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    // 사진 개수 3장으로 제한
    if (imageUrlLists.length > 1) {
      imageUrlLists = imageUrlLists.slice(0, 1);
    }

    setImages(imageUrlLists);
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((_, index) => index !== id));
  };

  return (
    <div className={styles.input_container}>
      <label
        htmlFor="input-file"
        className={styles.image_upload_button}
        onChange={onUpload}
      >
        <input
          type="file"
          id="input-file"
          multiple
          className={styles.input}
          accpet=".jpg,.jpeg,.png"
        />
      </label>
      <div className={styles.image_container}>
        {images.map((image, id) => (
          <div key={id} className={styles.image_div}>
            <img src={image} alt={`${image}-${id}`} className={styles.image} />
            <img
              src={deleteButton}
              onClick={() => handleDeleteImage(id)}
              alt="delete button"
              className={styles.delete_button}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
