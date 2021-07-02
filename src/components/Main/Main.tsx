import styles from "./Main.module.scss"
import { NavLink } from "react-router-dom"

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* <!-- Stories --> */}

        <div className={styles.stories}>
          <div className={styles.stories__item} data-modal="story-modal">
            <img className={styles.stories__preview} src="/images/stories/stories-1.webp" alt="" />
            <div className={styles.stories__title}>Отдыхаю на природе</div>
            <time className={styles.stories__date} dateTime="2020-09-21 19:21">2020-09-21</time>
          </div>
          {/* <!-- ./stories__item --> */}
          <div className={styles.stories__item}>
            <img className={styles.stories__preview} src="/images/stories/stories-2.webp" alt="" />
            <div className={styles.stories__title}>Заканчиваю сложный проект</div>
            <time className={styles.stories__date} dateTime="2020-09-15 16:14">2020-09-15</time>
          </div>
          {/* <!-- ./stories__item --> */}
          <div className={styles.stories__item}>
            <img className={styles.stories__preview} src="/images/stories/stories-3.webp" alt="" />
            <div className={styles.stories__title}>Переехал в новую квартиру</div>
            <time className={styles.stories__date} dateTime="2020-09-11 22:46">2020-09-11</time>
          </div>
          {/* <!-- ./stories__item --> */}
          <div className={styles.stories__item}>
            <img className={styles.stories__preview} src="/images/stories/stories-4.webp" alt="" />
            <div className={styles.stories__title}>Осень пришла!</div>
            <time className={styles.stories__date} dateTime="2020-08-28 13:50">28.08.2020</time>
          </div>
          {/* <!-- ./stories__item --> */}
        </div>
        {/* <!-- /.stories --> */}

        {/* <!-- Add post --> */}
        {/*                 <!-- It's for admin of the web-site. Textarea for fast posted someth -->
                <!-- This area must be unvisible for users without admin's permissions --> */}
        <div className={styles['add-post']}>
          <form className={styles['add-post__form']} action="/" method="post">
            <textarea className={styles['add-post__textarea']} name="post-text" placeholder="Напишите что-нибудь" data-autoresize></textarea>
            <div className={styles['add-post__form-actions']}>
              <label className={styles['add-post__file']} htmlFor="add-post-file" style={{ backgroundImage: "url('/images/add-photo.svg')" }}>
                <input type="file" id="add-post-file" />
              </label>
              <button className={styles['add-post__send']} type="submit" style={{ backgroundImage: "url('/images/send.svg')" }}>
                Отправить
              </button>
            </div>
          </form>
        </div>
        {/* <!-- /.add-post --> */}

        {/* <!-- Post 1 --> */}

        <div className={styles.post}>
          <div className={styles.post__content}>
            <p className={styles.post__description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ipsum voluptates labore
              reiciendis nostrum. Neque veritatis ut, commodi tenetur possimus distinctio deleniti sunt et natus pariatur non
              explicabo consectetur perspiciatis.</p>
          </div>
          <div className={styles.post__footer}>
            <ul className={styles.post__data}>
              <li className={styles['post__data-item']}>
                <time dateTime="2020-06-21 14:35">21.06.2020</time>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.post --> */}

        {/* <!-- Post 2 --> */}

        <article className={styles.post}>
          <div className={`${styles.post__header} ${styles['post__header--preview']}`}>
            <NavLink to="/post">
              <img className={styles.post__preview} src="/images/post-2.webp" alt="Как писать код быстро и безболезненно?" />
            </NavLink>
          </div>
          {/* <!-- /.post-header --> */}

          <div className={styles.post__content}>
            <h2 className={styles.post__title}>
              <NavLink to="/post">Как писать код быстро и качественно</NavLink>
            </h2>
            <p className={styles.post__description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ipsum voluptates labore
              reiciendis nostrum. Neque veritatis ut, commodi tenetur possimus distinctio deleniti sunt et natus pariatur non
              explicabo consectetur perspiciatis.</p>
          </div>
          {/* <!-- /.post_content --> */}

          <div className={styles.post__footer}>
            <ul className={styles.post__data}>
              <li className={styles['post__data-item']}>
                <time dateTime="2020-06-21 14:35">21.06.2020</time>
              </li>
              <li className={styles['post__data-item']}>
                <NavLink to="/post">создание сайтов</NavLink>
              </li>
            </ul>

            <NavLink to="/post" className={styles.post__read}>читать</NavLink>
          </div>
          {/* <!-- /.post_footer --> */}
        </article>
        {/* <!-- /.post --> */}



        {/* <!-- Post 3 --> */}

        <article className={styles.post}>
          <div className={styles.post__header}>
            <div className={styles.embed}>
              <iframe src="/videos/City_beach.webm" title="City beach" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
          {/* <!-- /.post-header --> */}

          <div className={styles.post__content}>
            <h2 className={styles.post__title}>
              <NavLink to="/post">Рассвет на Атлантическом побережье</NavLink>
            </h2>
          </div>
          {/* <!-- /.post__content --> */}

          <div className={styles.post__footer}>
            <ul className={styles.post__data}>
              <li className={styles['post__data-item']}>
                <time dateTime="2020-06-21 14:35">21.06.2020</time>
              </li>
              <li className={styles['post__data-item']}>
                <NavLink to="/post">продвижение видео</NavLink>
              </li>
            </ul>

            <NavLink to="/post" className={styles.post__read}>оставить комментарий</NavLink>
          </div>
          {/* <!-- /.post__footer --> */}
        </article>
        {/* <!-- /.post --> */}


        {/* <!-- Post 4 --> */}

        <article className={styles.post}>
          <div className={`${styles.post__header} ${styles['post__header--preview']}`}>
            <NavLink to="/post">
              <img className={styles.post__preview} src="/images/post-4.webp" alt="Как я сходил на FrontEnd Conf 2021" />
            </NavLink>
          </div>
          {/* <!-- /.post-header --> */}

          <div className={styles.post__content}>
            <h2 className={styles.post__title}>
              <NavLink to="/post">Как я сходил на FrontEnd Conf 2021</NavLink>
            </h2>
            <p className={styles.post__description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laborum explicabo illum
              laudantium rem nam incidunt voluptatibus voluptas debitis neque, eveniet non totam veniam, odit inventore nemo,
              provident officiis? Eligendi!</p>
          </div>
          {/* <!-- /.post__content --> */}

          <div className={styles.post__footer}>
            <ul className={styles.post__data}>
              <li className={styles['post__data-item']}>
                <time dateTime="2020-06-21 14:35">21.06.2020</time>
              </li>
              <li className={styles['post__data-item']}>
                <NavLink to="/post">создание сайтов</NavLink>
              </li>
            </ul>

            <NavLink to="/post" className={styles.post__read}>читать</NavLink>
          </div>
          {/* <!-- /.post__ooter --> */}
        </article>
        {/* <!-- /.post --> */}

        {/* <!-- Pagination --> */}

        <ul className={styles.pagination}>
          <li className={styles.pagination__item}>
            <NavLink to="#" className={styles.pagination__link}>&lt;</NavLink>
          </li>
          <li className={styles.pagination__item}>
            <NavLink to="#" className={styles.pagination__link}>1</NavLink>
          </li>
          <li className={styles.pagination__item}>
            <NavLink to="#" className={`${styles.pagination__link} ${styles.active}`}>2</NavLink>
          </li>
          <li className={styles.pagination__item}>
            <NavLink to="#" className={styles.pagination__link}>3</NavLink>
          </li>
          <li className={styles.pagination__item}>
            <NavLink to="#" className={styles.pagination__link}>&gt;</NavLink>
          </li>
        </ul>

        {/* <!-- ./pagination --> */}
      </div>
    </main >
  )
}
