import React, { Component } from 'react';
import './ClassCard.scss';

class ClassCard extends Component {
  render() {
    return (
      <div className="classCard">
        <div className="imgWrap">
          <i class="far fa-heart"></i>
          <img
            src="https://cdn.class101.net/images/37e37766-4c46-496a-835f-3609e54af755/750xauto.webp"
            alt="실로 그리는 칼러 콜라주"
          />
        </div>
        <div className="txtWrap">
          <span>공예</span> &middot; <span>엔원 투엘엘 위빙</span>
          <p>[TOP20] 실로 그리는 컬러 콜라주,태피스트리 도형 위빙</p>
          <i class="fas fa-heart"> 5977</i>
          <i class="fas fa-thumbs-up"> 99%</i>
        </div>
      </div>
    );
  }
}

export default ClassCard;
