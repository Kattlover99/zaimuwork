import { EnvelopeIcon } from '@heroicons/react/24/solid/index';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid/index';
import { ChevronDownIcon } from '@heroicons/react/24/solid/index';
import React from "react";
import '../../styles/components/Button.scss'

const STYLES = ["primary", "secondary", "outline", "lined"];
const CORNERS = ["btn--radius", "btn--radius-rt-lb"];
const SIZES = ["btn--medium", "btn--large", "btn--small"];
const ICONS = ["left", "right", "no"];

export const Btn = (props) => {
  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];
  const checkButtonCorner = CORNERS.includes(props.buttonRadius) ? props.buttonRadius : "";
  const checkButtonIcon = ICONS.includes(props.buttonIcon) ? props.buttonIcon : ICONS[2];
  const checkButtonClass = props.buttonClass ? props.buttonClass : "";
  let text = props.title;
  const HrefTo = () => {
    if (text === "実績例をチェック") {
      return '#jisseki';
    }
    return '#lpform';
  }
  const IconButton = () => {
    if (text === "今すぐ無料相談") {
      return <ArrowLongRightIcon className="h-5 w-5" />;
    }
    if (text === "相談フォーム") {
      return <EnvelopeIcon className="h-5 w-5" />;
    }
    return <ChevronDownIcon className="h-5 w-5" />;
  }
  const buttonText = () => {
    if (checkButtonIcon === "left") {
      return <><span className='btn_icon'>{IconButton()}</span>{text}</>;
    }
    if (checkButtonIcon === "right") {
      return <>{text}<span className='btn_icon'>{IconButton()}</span></>;
    }
    return text
  }
  const Shine = () => {
    if(props.title === "今すぐ無料相談") {
      return <span className="shine"></span>;
    }
    return null
  }
  
  return (
    <>
      <a
        href={HrefTo()}
        className={`btn btn--${checkButtonStyle} ${checkButtonSize} ${checkButtonCorner} icon_${checkButtonIcon} ${checkButtonClass}`}
      >
        {Shine()}{buttonText()}
      </a>
    </>
  );
};