import { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import styles from './ThemeIcon.module.scss';

export const ThemeIcon = () => {

    const { isDarkTheme, changeTheme } = useContext( ThemeContext );
    const { theme } = useContext( ThemeContext );
    
    return(

      <div className="form-check form-switch ms-auto p-0 m-md-0 d-md-flex justify-content-md-center align-items-md-center">
        <input
          className="d-none"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={ isDarkTheme }
          onChange={ changeTheme }
        />
        <label htmlFor="flexSwitchCheckDefault" className={ `${styles.miLabel} ${ theme === 'dark' ? `${styles.miDark}` : '' } m-md-0` }>
          <i className="fa-solid fa-moon"></i>
        </label>
      </div>
      
    );
    
}