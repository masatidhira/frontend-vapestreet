import { useRef, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './LoginPage.scss';

const LoginPage = () => {
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
    setUser('');
    setPwd('');
    setErrMsg('');
    setSuccess(true);
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
