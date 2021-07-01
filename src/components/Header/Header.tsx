import { NavLink } from "react-router-dom"

import styles from "./Header.module.scss"

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <NavLink to="#" className={styles.nav__link}>Главная</NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to="#" className={`${styles.nav__link} ${styles.hasSubnav}`}>Статьи</NavLink>
              <ul className={styles.subnav}>
                <li>
                  <NavLink to="#" className={styles.subnav__link}>Создание сайтов</NavLink>
                </li>
                <li>
                  <NavLink to="#" className={styles.subnav__link}>Интернет-маркетинг</NavLink>
                </li>
                <li>
                  <NavLink to="#" className={styles.subnav__link}>Продвижение видео</NavLink>
                </li>
              </ul>
              {/* <!-- /.subnav --> */}
            </li>
            <li className={styles.nav__item}>
              <NavLink to="#" className={styles.nav__link}>Обо мне</NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to="#" className={styles.nav__link}>Реклама</NavLink>
            </li>
          </ul>
          {/* <!-- /.nav_list --> */}
        </nav>
        {/* <!-- /.nav --> */}

        {/* <!--burger-menu ↓ --> */}
        <button className={`${styles.burger} ${styles.active}`} type="button">
          <span>Открыть навигацию</span>
        </button>

      </div>
      {/* <!-- /.header_left --> */}

      <div className={styles.header__right}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <NavLink to="#" className={styles.nav__link}>Профиль</NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to="#" className={styles.nav__link}>Выйти</NavLink>
            </li>
          </ul>
          {/* <!-- /.nav_list --> */}
        </nav>
        {/* <!-- /.nav --> */}
        <div className={styles.search}>It's place for Search form</div>
        {/* <form className="search" action="search.html" method="get">
          <input className="search__input" type="text" placeholder="Поиск по блогу">
        </form> */}
      </div>
      {/* <!-- /.header_right --> */}
    </header >
  )
}
