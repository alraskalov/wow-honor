/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, FC, MouseEvent, SetStateAction, useEffect } from 'react';
import { MainMenu } from '../../components/types';
import styles from './MediumButtonMenu.module.scss';

interface IMediumButtonMenu {
  route: string;
  image: string;
  title: string;
  description: string;
  settingsIsActive: boolean;
  mainMenu: MainMenu[];
  setMainMenu: Dispatch<SetStateAction<MainMenu[]>>;
}

const setListsToLocalStorage = (menu: Array<MainMenu>) => {
  localStorage.setItem('menu', JSON.stringify(menu));
};

export const MediumButtonMenu: FC<IMediumButtonMenu> = ({
  route,
  image,
  title,
  description,
  settingsIsActive,
  mainMenu,
  setMainMenu,
}): JSX.Element => {
  const checkMenu = mainMenu.some((el) => el.title === title);

  const handleClickIcon = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return checkMenu
      ? setMainMenu(mainMenu.filter((el) => el.title !== title))
      : setMainMenu([...mainMenu, { route, image, title }]);
  };

  const icon = (
    <button
      type="button"
      onClick={handleClickIcon}
      className={`${styles.icon}
      ${checkMenu ? styles.icon_cross : styles.icon_plus} 
      ${!checkMenu && mainMenu.length >= 5 ? styles.icon_disabled : ''}`}
    >
      {!checkMenu && mainMenu.length < 5 && (
        <i className="fas fa-plus text-sm" />
      )}
      {checkMenu && <i className="fas fa-times text-sm" />}
    </button>
  );

  useEffect(() => {
    setListsToLocalStorage(mainMenu);
  }, [mainMenu]);

  return (
    <a href={route} className={`${styles.button}`}>
      {settingsIsActive && icon}
      <div className={styles.button__container}>
        <div className="flex-none">
          <img className={styles.button__image} src={image} alt={title} />
        </div>
        <div className={`${styles.button__text} text cut-text`}>
          <p className={`${styles.text__title} cut-text`}>{title}</p>
          <p className={`${styles.text__subtitle} cut-text`}>{description}</p>
        </div>
      </div>
    </a>
  );
};