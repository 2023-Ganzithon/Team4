import React, { useState, useEffect } from "react";
import styles from "./WritePostPage.module.css";
import API from "../../services/API";
import { useNavigate, useLocation } from "react-router-dom";
import ImageUploader from "../../components/ImageUploader.js/ImageUploader";

const WritePostPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("login-token") !== undefined) {
      setToken(localStorage.getItem("login-token"));
    }
  }, []);

  const { state } = useLocation();
  const { type } = state;

  const [token, setToken] = useState();

  const [category, setCategory] = useState(0);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [buyTime, setBuyTime] = useState("");
  const [recruitementNumber, setRecruitmentNumber] = useState("");
  const [link, setLink] = useState("");
  const [images, setImages] = useState();

  const onClickSellCategory = () => {
    setCategory(0);
  };

  const onClickBuyCategory = () => {
    setCategory(1);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleBuyTimeChange = (e) => {
    setBuyTime(e.target.value);
  };

  const handleRecruitmentNumberChange = (e) => {
    setRecruitmentNumber(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const verifyInputs = (inputs) => {
    if (inputs.includes("")) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let request;

    // 식료품
    if (type === "grocery") {
      // 식료품 팔아요
      if (
        category === 0 &&
        verifyInputs([title, location, content, price, buyTime, unit])
      ) {
        // request = {
        //   title: title,
        //   location: location,
        //   content: content,
        //   image: images,
        //   price: price,
        //   buy_time: buyTime,
        //   post_type: false,
        //   is_completed: false,
        //   unit: unit,
        // };

        /* formData 구성 */
        const request = new FormData();
        const contentsData = {
          title: title,
          location: location,
          content: content,
          price: price,
          buy_time: buyTime,
          post_type: false,
          is_completed: false,
          unit: unit,
        };

        const fileData = images;
        request.append("file", fileData);

        request.append(
          "contentsData",
          new Blob([JSON.stringify(contentsData)], { type: "application/json" })
        );
      } else if (
        category === 1 &&
        verifyInputs([
          title,
          location,
          content,
          price,
          unit,
          recruitementNumber,
        ])
      ) {
        // 식료품 같이 사요
        // request = {
        // title: title,
        // location: location,
        // content: content,
        // image: images,
        // price: price,
        // unit: unit,
        // recruitment_num: recruitementNumber,
        // post_type: true,
        // is_completed: false,
        // };

        /* formData 구성 */
        const request = new FormData();
        const contentsData = {
          title: title,
          location: location,
          content: content,
          price: price,
          unit: unit,
          recruitment_num: recruitementNumber,
          post_type: true,
          is_completed: false,
        };

        const fileData = images;
        request.append("file", fileData);

        request.append(
          "contentsData",
          new Blob([JSON.stringify(contentsData)], { type: "application/json" })
        );
      } else {
        alert("모든 내용을 작성해주세요.");
      }

      API.post("/groceries", request, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        if (response.status === 201) {
          alert("글이 업로드되었습니다.");
          navigate("/");
        }
      });
    } else {
      // 배달음식 함께 주문

      if (verifyInputs([title, content, price, link])) {
        // request = {
        //   title: title,
        //   content: content,
        //   location: location,
        //   minimumPrice: price,
        //   link: link,
        //   image: images,
        // };

        /* formData 구성 */
        const request = new FormData();
        const contentsData = {
          title: title,
          content: content,
          location: location,
          minimumPrice: price,
          link: link,
        };

        const fileData = images;
        request.append("file", fileData);

        request.append(
          "contentsData",
          new Blob([JSON.stringify(contentsData)], { type: "application/json" })
        );

        console.log(request);

        API.post("/deliveries", request, {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }).then((response) => {
          if (response.status === 201) {
            alert("글이 업로드되었습니다.");
            navigate("/");
          }
        });
      } else {
        alert("모든 내용을 작성해주세요.");
      }
    }
  };

  const onCancelButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.nav_bar}>
          <button
            className={styles.cancel_write_button}
            onClick={onCancelButtonClick}
          />
          <h1 className={styles.title}>글 작성하기</h1>
          <button type="submit" className={styles.upload_button}>
            업로드
          </button>
        </div>
        <div className={styles.container}>
          {type === "grocery" ? (
            <div className={styles.category_container}>
              <div
                className={
                  category === 0
                    ? styles.selected_category_button
                    : styles.category_button
                }
                onClick={onClickSellCategory}
              >
                팔아요
              </div>
              <div
                className={
                  category === 1
                    ? styles.selected_category_button
                    : styles.category_button
                }
                onClick={onClickBuyCategory}
              >
                같이 사요
              </div>
            </div>
          ) : null}
          <div className={styles.content_container}>
            <div className={styles.form_container}>
              <input
                type="text"
                placeholder="글 제목"
                name="title"
                value={title}
                className={styles.input}
                onChange={handleTitleChange}
              />
              <textarea
                type="text"
                placeholder="글 내용"
                name="content"
                value={content}
                className={styles.textarea}
                onChange={handleContentChange}
              />
              {type === "grocery" ? (
                <>
                  <input
                    type="text"
                    placeholder={category === 0 ? "판매 위치" : "구매 위치"}
                    name="location"
                    value={location}
                    className={styles.input}
                    onChange={handleLocationChange}
                  />
                  <input
                    type="text"
                    placeholder={category === 0 ? "판매 단위" : "구매 단위"}
                    name="unit"
                    value={unit}
                    className={styles.input}
                    onChange={handleUnitChange}
                  />
                  <input
                    type="text"
                    placeholder="단위 당 가격"
                    name="price"
                    value={price}
                    className={styles.input}
                    onChange={handlePriceChange}
                  />
                  {category === 0 ? (
                    <input
                      type="text"
                      placeholder="구매 시점(유통기한도 함께 적어주시면 더 좋아요!)"
                      name="buyTime"
                      value={buyTime}
                      className={styles.input}
                      onChange={handleBuyTimeChange}
                    />
                  ) : (
                    <input
                      type="number"
                      placeholder="모집 인원 수"
                      name="recruitmentNumber"
                      value={recruitementNumber}
                      className={styles.input}
                      onChange={handleRecruitmentNumberChange}
                    />
                  )}
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="가게 정보 링크"
                    name="link"
                    value={link}
                    className={styles.input}
                    onChange={handleLinkChange}
                  />{" "}
                  <input
                    type="text"
                    placeholder="최소 주문 금액"
                    name="price"
                    value={price}
                    className={styles.input}
                    onChange={handlePriceChange}
                  />
                </>
              )}
              <p className={styles.image_attach_guide_text}>
                이미지 1장 첨부 가능
              </p>
              <div>
                <ImageUploader setImage={setImages} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default WritePostPage;
