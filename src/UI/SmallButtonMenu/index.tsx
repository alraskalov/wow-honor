import { FC } from 'react';
import styles from './SmallButtonMenu.module.scss';

interface ISmallButtonMenu {
  route: string;
  image: string;
  title: string;
}

export const SmallButtonMenu: FC<ISmallButtonMenu> = ({ route, image, title }): JSX.Element => {
  return (
    <a href={route} className={styles.button}>
      <img className={styles.button__image} src={image} alt="" />
      <span className="cut-text capitalize">{title}</span>
    </a>
  );
};