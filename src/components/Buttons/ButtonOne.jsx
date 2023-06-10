/* eslint-disable react/prop-types */
import './Buttons.scss';

const ButtonOne = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <button
      className={'button button-one ' + props.className}
      onClick={props.onClick ? (e) => handleClick(e) : null}
    >
      {props.children}
    </button>
  );
};

export default ButtonOne;
