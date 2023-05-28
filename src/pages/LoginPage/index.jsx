import { useState } from 'react';
import './LoginPage.scss';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const clearForm = () => {
    setUsername('');
    setPassword('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);

    if (username !== 'admin' || password !== 'admin') {
      setError(true);
    } else {
      setError(false);
    }

    clearForm();
  };

  return (
    <div className="loginpage">
      <div className="content">
        <div className="logo">LOGIN VAPES STREET</div>
        <form className="form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={error ? 'text-error' : 'text-error hidden'}>
            *Username atau password salah.
          </p>
          <input type="submit" className="btn-login" value="LOGIN" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
