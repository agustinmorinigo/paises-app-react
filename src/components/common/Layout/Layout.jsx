import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from 'contexts/ThemeContext';
import { Navbar } from 'components/Common/Navbar/Navbar';
import { Footer } from 'components/Common/Footer/Footer';
import styles from './Layout.module.scss';

export const Layout = () => {

  const { theme } = useContext( ThemeContext );

  return (
    <>

      <Navbar />

      <main 
        className={ `page-container text-dark h-100 mb-5 ${styles.mainColor} ${ styles[theme] }` }
        style={{ paddingTop: '96px' }}
      >
          <div className="w-75 mx-auto h-100 overflow-hidden">
            <Outlet />
          </div>
      </main>

      <Footer />
      
    </>
  );

}
