import React from 'react';
import './fv-img-01.styles.scss';

const strategies = [
  {
    title: '国税庁OBが対応',
    desc: (
      <p>
        国税庁OB、元税務署長
        <br />
        など10名が対応
      </p>
    ),
    img: 'mini_feature_01.jpg',
  },
  {
    title: '高い交渉力',
    desc: (
      <p>
        高い交渉力で減額&逮捕
        <br />
        リスク回避の事例あり
      </p>
    ),
    img: 'mini_feature_02.jpg',
  },
  {
    title: '豊富な信頼と実績',
    desc: (
      <p>
        1,000億規模の上場企業
        <br />
        含め契約300社以上
      </p>
    ),
    img: 'mini_feature_03.jpg',
  },
];

function FvImg01() {



    return (
      <div className="right-section">
      <div className="card-item-grid fv-image-1">
        {strategies.map((str) => (
          <div className="card-item">
            <div className="card-item-thum">
              <img src={`/images/${str.img}`} alt="" />
            </div>
            <div className="card-item-body">
              <h4 className="card-item-title">{str.title}</h4>
              <div className="card-item-desc">{str.desc}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }


export default FvImg01;
