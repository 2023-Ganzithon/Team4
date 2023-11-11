import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import style from "./SearchPage.module.css";
import back from "../../assets/image/back_arrow.png";
import cancel from "../../assets/image/cancel.png";

const SearchPage = () => {
  const [inputText, setInputText] = useState('');
  const [recentSearchText, setRecentSearchText] = useState(["포도", "샤인머스캣", "라멘", "대파", "커피", "짜장면", "계란"]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const history = useNavigate();
  const handleEnterPress = (e) => {

      if (e.key === 'Enter' && inputText) {
        //검색시
        const searchKeyword = inputText;
        fetch(`/home/deliveries/?search=${encodeURIComponent(searchKeyword)}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("서버 연결에 실패했습니다.");
          }
          return response.json()
        })
        .then(data => {
          // 검색 결과
          history('/search-results',{ state: { searchResults: data } });
        })
        .catch(error => console.error("[ERROR] ", error));
          keepLength(inputText);
          setInputText('');
      }
  };

  const keepLength = (newText) => {
    setRecentSearchText(currentSearchTexts => {
      const updatedSearchTexts = [...currentSearchTexts, newText];

      if (updatedSearchTexts.length > 7) {
          updatedSearchTexts.shift();
      }

      return updatedSearchTexts;
    });
  };

  const deleteSearch = () => {
    setRecentSearchText([]);
  };

  return <div className={style.wrapper}>
    <header className={style.header}>
      <div className={style.back}>
        <img src={back} alt="back"/>
      </div>
      <input className={style.searchInput}
        placeholder="검색어를 입력하세요"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
      />
    </header>

    <div className={style.recentSearchBox}>
      <div className={style.recentHeader}>
        <span className={style.recent}>최근검색어</span>
        <span className={style.delete} 
        onClick={deleteSearch}>전체삭제</span>
      </div>

      <div className={style.recentSearch}>
      {recentSearchText.map((text, index) => (
        <div className={style.searchText}>
          <span>{text}</span>
          <img src={cancel} alt="cancel" />
        </div>
      ))}
      </div>
    </div>
  </div>;
};

export default SearchPage;
