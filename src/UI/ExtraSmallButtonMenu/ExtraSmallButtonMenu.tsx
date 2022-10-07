import { FC } from 'react';
import styles from './ExtraSmallButtonMenu.module.scss';

interface IExtraSmallButtonMenu {
  image: string;
  name: string;
}

export const ExtraSmallButtonMenu: FC<IExtraSmallButtonMenu> = ({
  image,
  name,
}): JSX.Element => {
  return (
    <div>
      <a href="/" className={styles.button}>
        <div className={`cut-text ${styles.button__container}`}>
          <img src={image} alt={name} className={styles.button__image} />
          <p className="cut-text">{name}</p>
        </div>
      </a>
    </div>
  );
};
