import styles from './button.module.css';

const Button = ({ type = 'submit' }) => {
  return <button type={type}></button>;
};

export default Button;
