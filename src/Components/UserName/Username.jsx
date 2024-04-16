import styles from './Username.module.css';
import { useNavigate } from 'react-router-dom';

function Username() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const inputName = e.target[0].value;
    if (inputName) {
      localStorage.setItem('userName', inputName);
      navigate('/greeting');
    } else {
      alert('Please enter your name');
    }
  };

  return (
    <div className={styles.udiv}>
      <h1 className>
        Hey Dev, <br /> Please Enter Your Name
      </h1>
      <form onSubmit={submitHandler}>
        <div className={styles.nameForm}>
          <input type="text" placeholder="Enter Your Name" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Username;