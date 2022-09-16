import { FC } from 'react';
// import logo from '../../assets/icon.png';
import svg from '../../assets/image.svg';

const Header: FC = (): JSX.Element => {
  return (
    <header className="text-white">
      <nav className="z-99 relative bg-bluish-black">
        <div className="container-xl hidden h-7 text-sm lg:block">
          <ul className="flex h-7 items-center justify-between gap-3 opacity-100 transition">
            <li className="text-center">Weekly reset</li>
            <li className="text-center">Daily reset</li>
          </ul>
        </div>
        <div className="transition lg:block">
          <div className="border-b-2 border-granite-500 bg-black-gray-700">
            <div className="px-4 py-1">
              <a
                className="flex items-center gap-1 font-poppins text-3xl font-bold hover:text-turquoise"
                href="/"
              >
                <img src={svg} alt="Логотип" />
                <p className="">Jailer</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
