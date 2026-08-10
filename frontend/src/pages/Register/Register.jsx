import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from './Register.module.css'
import { useState } from 'react'
export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        name: name,
        email: email,
        password: password
      })
      console.log(response.data)
    }
    catch (error) {
      console.error('the error is', error)
    }
  }
  return (
    <div className={styles.registerContainer} >
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit} className={styles.formDiv}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='enter your name' />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email' required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter your password' required />
        <button>Submit</button>
        <Link to='/login'>Login Here</Link>
      </form>
    </div>
  )
}
