
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!email || !password) {
      setError('Por favor, preencha todos os campos!');
      return;
    }
    if (!email.includes('@')) {
      setError('Insira um email válido.');
      return;
    }

    setError('');
    alert('Login realizado com sucesso!');
    //add autentificacao
  };

  return (
    <div>
    
      
      <div style={styles.container}>
        <img src="./Texto_do_seu_parágrafo-removebg-preview.png" className="max-w-sm h-auto "/>
        <h1 className="font-bold text4xl text-orange-400">Já tem uma conta?</h1>
        <h1>Faça seu login:</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>Login</h2>

          {error && <p style={styles.error}>{error}</p>}

          <div style={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>

        <div style={styles.register}>
          <p>Não tem uma conta? <a href="/register" style={styles.registerLink}>Registrar agora</a></p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
  },
  form: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '975px',
    width: '100%',
  },
  title: {
    marginBottom: '20px',
    fontSize: '1.5rem',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '5px',
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#ff4700',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  register: {
    marginTop: '15px',
    textAlign: 'center',
  },
  registerLink: {
    color: '#ff4700',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Login;
