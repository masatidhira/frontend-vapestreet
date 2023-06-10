/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Buttons.scss';

const ButtonLogout = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { setAuth } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    setAuth({});
    navigate(from, { replace: true });
  };

  return (
    <button
      className={'button button-logout ' + props.className}
      onClick={(e) => handleLogout(e)}
    >
      {props.children}
    </button>
  );
};

export default ButtonLogout;
