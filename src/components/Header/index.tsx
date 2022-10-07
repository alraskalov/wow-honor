import { FC, useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import rules from '../../assets/rules.png';
import { MediumButtonMenu, SmallButtonMenu } from '../../UI';
import { ExtraSmallButtonMenu } from '../../UI/ExtraSmallButtonMenu/ExtraSmallButtonMenu';
import { menu, other } from '../../utils/data';
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
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  const listsFromLocalStorage = getListsFromLocalStorage();

  const handleClickMenuSettings = () => setSettingsIsActive(!settingsIsActive);
  const handleClickBurger = () => setMenuIsActive(!menuIsActive);

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
        <div
          onMouseLeave={() => setSettingsIsActive(false)}
          className={`${styles.nav__main} main`}
        >
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
                      key={title}
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
        <div className={`${styles['nav__mobile-menu']} mobile-menu'`}>
          <div className="flex justify-between">
            <button
              onClick={handleClickBurger}
              type="button"
              className={`${styles['mobile-menu__burger']}`}
            >
              <i className="fas fa-bars text-2xl" />
            </button>
            <div className="flex items-center">
              <a href="/" aria-current="page" className="text-2xl font-bold">
                Jailer
              </a>
            </div>
            <div />
          </div>
          <div
            className={`${styles['mobile-menu__container']} ${
              menuIsActive ? styles['mobile-menu__container_active'] : ''
            }`}
          >
            {menu.map(({ list, title }) => (
              <div className="group text-center">
                <div className={`${styles['mobile-menu__title']}`}>
                  <p>{title}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2">
                  {list.map(({ image, name }) => (
                    <ExtraSmallButtonMenu
                      key={name}
                      name={name}
                      image={image}
                    />
                  ))}
                </div>
              </div>
            ))}
            {other.map(({ title, list }) => (
              <div className="group text-center">
                <div className={`${styles['mobile-menu__title']}`}>
                  <p>{title}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 p-2">
                  {list.map(({ image, name }) => (
                    <ExtraSmallButtonMenu
                      key={name}
                      name={name}
                      image={image}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
