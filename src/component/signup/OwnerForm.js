import React from "react";
const RES_TYPE = ["오마카세", "우마카세", "그 외"];
const DAY_TYPE = ["평일", "주말"];
const MEAL_TYPE = ["런치", "디너"];
const OwnerForm = () => {
  return (
    <section>
      <div className="form">
        <label htmlFor="res-name">가게명</label>
        <input type="text" id="res-name"></input>
      </div>
      <div className="form">
        <label htmlFor="res-number">전화번호</label>
        <input type="text" id="res-number"></input>
      </div>
      <div className="form">
        <label htmlFor="res-number">사업자 등록증</label>
        <input type="file" id="res-number"></input>
      </div>
      <div className="form">
        <label htmlFor="res-type">구분</label>
        <select id="res-type">
          {RES_TYPE.map((type) => (
            <option id={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="form">
        <label htmlFor="res-address">가게 주소</label>
        <div id="res-address">
          <input type="text"></input>
          <button>주소 검색</button>
          <input type="text" id="res-number" placeholder="상세주소"></input>
        </div>
      </div>
      <div className="form">
        <label htmlFor="res-price">가격</label>
        <ol id="res-price">
          <li>
            <div>
              <select id="day">
                {DAY_TYPE.map((type) => (
                  <option id={type}>{type}</option>
                ))}
              </select>
              <select id="day">
                {MEAL_TYPE.map((type) => (
                  <option id={type}>{type}</option>
                ))}
              </select>
              <input type="text"></input>
            </div>
          </li>
        </ol>
        <button>가격 추가</button>
      </div>
      <div className="form">
        <label htmlFor="res-open">영업 시간</label>
        <input type="text" id="res-time"></input>
      </div>
      <div className="form">
        <label htmlFor="res-break">브레이크 타임</label>
        <input type="text" id="res-break"></input>
      </div>
      <div className="form">
        <label htmlFor="res-close">휴무일</label>
        <input type="text" id="res-close"></input>
      </div>
      <div className="form">
        <label htmlFor="res-facility">편의시설</label>
        <div>
          <ol id="res-facility">
            <li>
              <div id="type">
                주차<button>x</button>
              </div>
            </li>
          </ol>
          <button>+</button>
        </div>
      </div>
      <div className="form">
        <label htmlFor="res-intro">소개</label>
        <textarea type="text" id="res-inro"></textarea>
      </div>
    </section>
  );
};

export default OwnerForm;
