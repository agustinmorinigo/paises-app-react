import { ThemeContext } from 'contexts/ThemeContext';
import { useContext } from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {

  const { theme } = useContext( ThemeContext );
  
  return (
    <footer className={ `p-5 ${ theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark' }` }>
      <p className={ `text-center p-0 m-0 fw-bold h6 text-uppercase ${ styles.footer }` }>
        Aplicación Web desarrollada por Agustín Morinigo.
      </p>
    </footer>
  )
}
