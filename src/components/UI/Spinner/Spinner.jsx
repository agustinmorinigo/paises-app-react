import { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';

export const Spinner = () => {

  const { theme } = useContext( ThemeContext );
  
  return (
    <div 
      className={ `d-flex justify-content-center align-items-center fa-4x w-100 h-100 ${ theme === 'dark' ? 'text-light' : 'text-dark' }` }
    >
        <i className="fa-solid fa-circle-notch fa-spin"></i>
    </div>
  );
  
}