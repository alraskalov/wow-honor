import { FC, useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import rules from '../../assets/rules.png';
import { MediumButtonMenu, SmallButtonMenu } from '../../UI';
import { menu } from '../../utils/data';
import { MainMenu } from '../types';
import styles from './Header.module.scss';

const getListsFromLocalStorage = (): Array<MainMenu> | [] => {
  if (localStorage.getItem('menu')) {
    return JSON.parse(localStorage.getItem('menu') || '[]');
  }
  return [];
};

export const Header: FC = (): JSX.Element => {
  const [mainMenu, setMainMenu] = useState<MainMenu[]>([]);
  const [settingsIsActive, setSettingsIsActive] = useState<boolean>(false);
  const listsFromLocalStorage = getListsFromLocalStorage();

  const handleClickMenuSettings = () => setSettingsIsActive(!settingsIsActive);

  useEffect(() => {
    setMainMenu(listsFromLocalStorage);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={`${styles.header__nav} nav`}>
        <div className={`${styles.nav__info} container-xl info`}>
          <ul className={styles.info__container}>
            <li className={styles.info__element}>Еженеделный сброс:</li>
            <li className={styles.info__element}>Ежедневный сброс:</li>
          </ul>
        </div>
        <div className={`${styles.nav__main} main`}>
          <div className={styles.main__container}>
            <div className={`${styles.main__wrapper}`}>
              <a className={`${styles.main__logo} logo`} href="/">
                <img src={logo} className={styles.logo__img} alt="Логотип" />
                <p>Jailer</p>
              </a>
              <div className={`${styles.main__menu} menu`}>
                <div className={styles.menu__container}>
                  {mainMenu.map(({ route, image, title }) => (
                    <SmallButtonMenu
                      route={route}
                      image={image}
                      title={title}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={`${styles.nav__submenu} submenu`}>
              <div className={styles.submenu__container}>
                <div className={`${styles.submenu__main} container-xl`}>
                  {menu.map(({ title, list }) => (
                    <div
                      key={title}
                      className={`${styles.submenu__element} element`}
                    >
                      <p className={styles.element__title}>{title}</p>
                      <div className={`${styles.element__list} list`}>
                        {list.map(({ image, name, description }) => (
                          <MediumButtonMenu
                            key={name}
                            route="/"
                            image={image}
                            title={name}
                            description={description}
                            settingsIsActive={settingsIsActive}
                            mainMenu={mainMenu}
                            setMainMenu={setMainMenu}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="nav__other other container-xl">
                  <div className={styles.other__container}>
                    <a href="/" className={`${styles.other__link} link`}>
                      <div className={`${styles.link__container} cut-text`}>
                        <div className="flex-none">
                          <img
                            src={rules}
                            alt="Правила"
                            className={styles.link__img}
                          />
                        </div>
                        <p className={`${styles.link__text} cut-text`}>
                          Заглушка
                        </p>
                      </div>
                    </a>
                    <button
                      className={`${styles.other__link_settings} ${
                        settingsIsActive
                          ? styles.other__link_settings_active
                          : ''
                      }`}
                      type="button"
                      onClick={handleClickMenuSettings}
                    >
                      <div className={`${styles.link__container} cut-text`}>
                        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-granite-500 p-1">
                          <i className="fa-solid fa-thumbtack block opacity-75" />
                        </div>
                        <p className={`${styles.link__text} cut-text`}>
                          Настройка меню
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};