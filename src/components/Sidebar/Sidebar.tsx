import { NavLink } from "react-router-dom"

import styles from "./Sidebar.module.scss"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <img src="/images/sidebar_header_2.webp" alt="img: sidebar header" />
      </div>

      <div className={styles.sidebar__content}>
        <div className={styles.profile}>
          <img className={styles.profile__avatar} src="/images/author_100x100.jpg" alt="author's avatar" />
          <div className={styles.profile__header}>
            <div className={styles.profile__name}>Павел Кириллов</div>
            <div className={styles.profile__prof}>Pro front-end разработчик</div>
          </div>

          {/* <!-- Social links --> */}
          <ul className={styles.social}>
            <li className={styles.social__item}>
              <NavLink to="#" className={styles.social__link} target="_blank">
                <img src="/images/instagram.svg" alt="Павел Кириллов instagram" />
              </NavLink>
            </li>
            <li className={styles.social__item}>
              <NavLink to="#" className={styles.social__link} target="_blank">
                <img src="/images/vk.svg" alt="Павел Кириллов vk" />
              </NavLink>
            </li>
            <li className={styles.social__item}>
              <NavLink to="#" className={styles.social__link} target="_blank">
                <img src="/images/pinterest.svg" alt="Павел Кириллов pinterest" />
              </NavLink>
            </li>
          </ul>
          {/* <!-- /.social --> */}

          <div className={styles.profile__text}>
            <p>Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь с 2012 года. Работал в нескольких
              ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.</p>
          </div>

        </div>
        {/* <!-- /.profile --> */}

        {/* <!-- nav--mobile --> */}
        <nav className={`${styles.nav} ${styles['nav--mobile']}`}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="index.html">Главная</a>
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
              <NavLink to="/text" className={styles.nav__link}>Обо мне</NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to="/text" className={styles.nav__link}>Реклама</NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to="/profile" className={styles.nav__link}>Профиль</NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to="/" className={styles.nav__link}>Выйти</NavLink>
            </li>
          </ul>
          {/* <!-- /.nav_list --> */}
        </nav>
        {/* <!-- /.nav nav--mobile--> */}
      </div>
      {/* <!-- /.sidebar__content --> */}

      <div className={styles.sidebar__footer}>
        <NavLink to="/works" className={`${styles.btn} ${styles['btn--red']}`}>Мои работы</NavLink>
        {/* <button className={`${styles.btn} ${styles['btn--blue']}`} type="button" data-modal="contact-modal">Написать мне</button> */}
      </div>
    </aside>
    //  {/* <!-- /.sidebar --> */ }
  )
}
