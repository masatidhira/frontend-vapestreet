import { useRef, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import axios from '../../api/axios';
import './LoginPage.scss';

// const LOGIN_URL = '/auth';

const LoginPage = () => {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post(
      //   LOGIN_URL,
      //   JSON.stringify({ user, pwd }),
      //   {
      //     headers: { 'Content-type': 'application/json' },
      //     withCredentials: true,
      //   }
      // );
      // console.log(response?.data);
      setAuth({ user, pwd });
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setErrMsg(err.message);
      // if (!err?.response) {
      //   setErrMsg('Server tidak merespon');
      // } else if (err.response?.status === 400) {
      //   setErrMsg('Tolong isi username dan password');
      // } else if (err.response?.status === 401) {
      //   setErrMsg('Username tidak dikenali');
      // } else {
      //   setErrMsg('Login gagal');
      // }
    }
  };

  return (
    <>
      {success ? (
        <Navigate to="/" />
      ) : (
        <main className="loginpage">
          <section className="content">
            <div className="logo">LOGIN VAPES STREET</div>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                placeholder="Username"
                value={user}
                required
              />
              <input
                type="password"
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Password"
                value={pwd}
                required
              />
              <p
                ref={errRef}
                className={errMsg ? 'text-error' : 'text-error hidden'}
              >
                {errMsg}
              </p>
              <button className="btn-login">LOGIN</button>
            </form>
          </section>
        </main>
      )}
    </>
  );
};

export default LoginPage;
