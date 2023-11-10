import React, { useState } from "react";
import style from "./SearchPage.module.css";
import back from "../../assets/image/back_arrow.png";
import cancel from "../../assets/image/cancel.png";

const SearchPage = () => {
  const [inputText, setInputText] = useState('');
  const [recentSearchText, setRecentSearchText] = useState(["포도", "샤인머스캣", "라멘", "대파", "커피", "짜장면", "계란"]);
  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleEnterPress = (e) => {
      if (e.key === 'Enter' && inputText) {
          setRecentSearchText([...recentSearchText, inputText]);
          setInputText(''); // 입력 상자 초기화
      }
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
        <span className={style.delete}>전체삭제</span>
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
