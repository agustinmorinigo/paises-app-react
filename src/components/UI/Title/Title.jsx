import { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import styles from './Title.module.scss';

export const Title = ({ children }) => {

    const { theme } = useContext( ThemeContext );

    return(
        <h1 className={ `text-uppercase text-center display-3 fw-bold mt-5 mb-5 pb-5 animate__animated animate__bounceIn animate__faster ${ styles.title } ${ theme === 'dark' ? 'text-light' : 'text-dark' }` }>
            <span className="d-inline-block mx-5">{ children }</span>
        </h1>
    );
    
}