
import styles from './Register.module.css'
export default function Register() {
  
    return (
    <div className={styles.registerContainer}>
      <form >
        <input type="text" placeholder='enter your name'/>
        <input type="email" placeholder='enter your email' required/>
        <input type="password" placeholder='enter your password' required/>
        <button>Submit</button>
    
      </form>
    </div>
  )
}
