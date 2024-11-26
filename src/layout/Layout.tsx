import { Outlet } from "react-router-dom";
import styles from './layout.module.css';
import Header from "../сomponents/header/Header";
import Footer from "../footer/Footer";

export default function Layout() {
    
  return (
    <>
      {/* здесь вызов компонента header для верстки шапки сайта */}
      <Header/>
      <main>
        {/* за место компонента Outlet будут приходить переключаемые компоненты из маршрутизации */}
        <Outlet />


      </main>
      <Footer/>
    </>
  );
}
