/* eslint-disable react/prop-types */

const Button = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <button
      className={'button ' + props.className}
      onClick={props.onClick ? (e) => handleClick(e) : null}
    >
      {props.children}
    </button>
  );
};

export default Button;
