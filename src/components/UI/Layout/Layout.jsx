import { Navbar } from 'components/common/Navbar/Navbar';
import { Footer } from 'components/common/Footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export const Layout = () => {

  return (
    <>

      <Navbar />

      <main className={ `page-container text-dark py-5 mt-5 ${ styles.mainColor }` }>
          <div className="w-75 mx-auto mt-5 overflow-hidden">
            <Outlet />
          </div>
      </main>

      <Footer />
      
    </>
  );

}
