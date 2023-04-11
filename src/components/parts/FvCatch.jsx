import React, { useEffect } from "react";
import { Btn } from '../parts/Button';
const list_catch = ['脱税', '所得隠し', '租税回避'];
const list_catchs = [
  {ja:"国税庁OB\nが対応", en: "Professional"},
  {ja:"圧倒的な\n交渉力", en: "Negotiate"},
  {ja:"豊富な\n信頼と実績", en: "Experience"}
];
const subtitle = '<strong>税務調査</strong>の対応・交渉';

const splitText = () => {
  const textSplitSpan = document.getElementsByClassName("text-split");

  Array.prototype.forEach.call(textSplitSpan, function(el, i) {

    let ElText = el.innerText;
    el.setAttribute('data-word', ElText);

    const chars = ElText.split('');

    var res = chars.map(function(el, i) {
      return `<span key=${i}>${el}</span>`;
    }).join('');
    
    el.innerHTML = res;
    
  });
}

export const Catch_01 =()=> {


  useEffect(()=>{
    splitText();
  }, []);

  return <>
  <div className="left-section">
  <div className="fv__title_above">
    <div className="fv__circlemark">
      <img
        src="/images/fv__label_behind.png"
        className="behind_label anim_rotate"
        alt="labelback"
      />
      <img src="/images/fv__label_front.png" alt="国税庁OB在籍" />
    </div>
    <div className="fv__catch">
      {list_catch.map((item, index) => <span key={index}>{item}</span>)}
    </div>
    <div className="fv__subtitle">
      <h4 className="lined_tb"><strong>税務調査</strong>の対応・交渉</h4>
    </div>
  </div>
  <h1 className="fv__title" data-word="後悔する前に今すぐ専門家に相談を">
    <span><span className="labeled">後悔</span><small>する前に</small></span>
    <span className="lg:flex items-center">
      <span className="smallest">今すぐ</span><span className="text-split">専門家</span><small>に相談を。</small>
    </span>
  </h1>
  <div className="btn_row mt-10 mb-12 flex justify-center lg:justify-start">
    <Btn
      title="今すぐ無料相談"
      buttonIcon="right"
      buttonSize="btn--large"
      buttonClass="tracking-widest circled_arrow"
    />
  </div>
  </div>
  </>
}
export const Catch_02 =()=> {
  useEffect(()=>{
    splitText();
  }, []);
  return <>
  <div className="left-section">
  <div className="fv__title_above">
    <div className="fv__labeled_above">
      <span className="label">国税庁OB<small>による</small></span>
    </div>
    <div className="fv__subtitle">
      <h4 className="boxed_label"><strong>税務調査</strong>の対応・交渉</h4>
    </div>
  </div>
  <h1 className="fv__title" data-word="後悔する前に今すぐ専門家に相談を">
    <span><span className="labeled">後悔</span><small>する前に</small></span>
    <span className="lg:flex items-center">
      <span className="smallest">今すぐ</span><span className="text-split">専門家</span><small>に相談を。</small>
    </span>
  </h1>
  <div className="fv__catch mt-4 justify-center lg:justify-start">{list_catch.map((item, index) => <span key={index}>{item}</span>)}</div>
  <div className="btn_row mt-10 mb-12 flex justify-center lg:justify-start">
    <Btn
      title="今すぐ無料相談"
      buttonIcon="right"
      buttonSize="btn--large"
      buttonClass="tracking-widest circled_arrow"
    />
  </div>
  </div>
  </>
}

export const Catch_03 = () => {
  useEffect(()=>{
    splitText();
  }, []);
  return <>
  <div className="left-section">
    <div className="fv__catch justify-center lg:justify-start">{list_catch.map((item) => <span>{item}</span>)}</div>
    <h1 className="fv__title" data-word="専門家の交渉力で後悔のない税務調査の対応を">
      <span><small>専門家の<span className="text-split">交渉力</span>で</small></span>
      <span><span className="text-pincolor bigger">後悔</span>のない</span>
      <span><small>税務調査の対応を</small></span>
    </h1>
    <div className="btn_row mt-10 mb-12">
      <Btn
        title="今すぐ無料相談"
        buttonIcon="right"
        buttonSize="btn--large"
        buttonClass="tracking-widest circled_arrow"
      />
    </div>
    <div className="fv__catchs flex text-center">
      {list_catchs.map((item, index) => <div className="fv__catchs_item font-bold" key={index}><span className="en">{item.en}</span><span className="ja">{item.ja}</span></div>)}
    </div>
  </div>
  </>
}