import React from "react";

export const BgDefault =(props)=> {
  const checkImg = props.imgsrc ? props.imgsrc : "FV";
  return <>
    <picture>
        <source
          srcSet={`/images/${checkImg}_large.webp`}
          type="image/webp"
          media="(min-width: 1024px)"
        />
        <source srcSet={`/images/${checkImg}_large.jpeg`} media="(min-width: 1024px)" />
        <source srcSet={`/images/${checkImg}_sp.webp`} type="image/webp" />
        <img src={`/images/${checkImg}_sp.jpeg`} alt="税務調査の対応・交渉" />
      </picture>
  </>
}