import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../assets/images/logo.svg';

/**
 * Компонент шапки сайта.
 *
 * @returns {React.ReactElement} Компонент Header
 */
const Header = (): React.ReactElement => (
  <header className="header">
    <div className="header__container">
      <NavLink to="/" className="header__back-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92" fill="none">
          <path d="M3 46L54.5 3" stroke="white" strokeWidth="5" strokeLinecap="round" />
          <path d="M91 46H3" stroke="white" strokeWidth="5" strokeLinecap="round" />
          <path d="M3 46.5L54.5 89.5" stroke="white" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </NavLink>
      <button className="header__home-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="100" viewBox="0 0 106 100" fill="none">
          <path
            d="M53.002 2.5C53.1644 2.5 53.3256 2.53161 53.4756 2.59375C53.6255 2.65589 53.7615 2.7477 53.876 2.8623L53.8779 2.86426L102.04 50.9502C103.986 52.895 103.985 56.0442 102.047 57.9883L102.044 57.9922C101.116 58.9268 99.8514 59.4501 98.5215 59.4502H90.9463V96.2617C90.9462 96.9467 90.3959 97.5 89.7051 97.5H61.1143V71.3311H43.0186V97.5H16.2998C15.609 97.5 15.0577 96.9468 15.0576 96.2617V59.4502H7.4834C4.73465 59.4502 2.5 57.2139 2.5 54.4727C2.50007 53.155 3.02733 51.8853 3.96387 50.9492L3.96484 50.9502L52.126 2.86426L52.1289 2.8623C52.2434 2.74773 52.3794 2.65589 52.5293 2.59375C52.6791 2.53176 52.8397 2.50003 53.002 2.5Z"
            stroke="white"
            strokeWidth="5"
          />
        </svg>
      </button>
      {/* todo: убрать в отдельный компонент */}
      <nav className="header__nav" aria-label="Main navigation">
        <NavLink to="/pbx" className="nav-btn nav-btn--active">
          АТС малой ёмкости
        </NavLink>
        <NavLink to="/pbx" className="nav-btn">
          АТС средней ёмкости
        </NavLink>
        <NavLink to="/pbx" className="nav-btn">
          АТС большой ёмкости
        </NavLink>
        <NavLink to="/pbx" className="nav-btn">
          VIP-АТС
        </NavLink>
        <NavLink to="/pbx" className="nav-btn">
          СОРМ
        </NavLink>
      </nav>
      <button className="header__info-btn">
        <span className="info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <g clipPath="url(#clip0_148_80)">
              <path
                d="M16 0.5C7.16429 0.5 0 7.66429 0 16.5C0 25.3357 7.16429 32.5 16 32.5C24.8357 32.5 32 25.3357 32 16.5C32 7.66429 24.8357 0.5 16 0.5ZM16 29.7857C8.66429 29.7857 2.71429 23.8357 2.71429 16.5C2.71429 9.16429 8.66429 3.21429 16 3.21429C23.3357 3.21429 29.2857 9.16429 29.2857 16.5C29.2857 23.8357 23.3357 29.7857 16 29.7857Z"
                fill="white"
              />
              <path
                d="M19.9852 9.52486C18.9137 8.58558 17.4994 8.07129 15.9994 8.07129C14.4994 8.07129 13.0852 8.58915 12.0137 9.52486C10.8994 10.4999 10.2852 11.8106 10.2852 13.2141V13.4856C10.2852 13.6427 10.4137 13.7713 10.5709 13.7713H12.2852C12.4423 13.7713 12.5709 13.6427 12.5709 13.4856V13.2141C12.5709 11.6391 14.1102 10.357 15.9994 10.357C17.8887 10.357 19.428 11.6391 19.428 13.2141C19.428 14.3249 18.6423 15.3427 17.4244 15.8106C16.6673 16.0999 16.0244 16.607 15.5637 17.2713C15.0959 17.9499 14.853 18.7641 14.853 19.5891V20.357C14.853 20.5141 14.9816 20.6427 15.1387 20.6427H16.853C17.0102 20.6427 17.1387 20.5141 17.1387 20.357V19.5463C17.1406 19.1996 17.2469 18.8615 17.4437 18.5761C17.6406 18.2907 17.9189 18.0712 18.2423 17.9463C20.3494 17.1356 21.7102 15.2784 21.7102 13.2141C21.7137 11.8106 21.0994 10.4999 19.9852 9.52486ZM14.5709 24.357C14.5709 24.7359 14.7214 25.0992 14.9893 25.3672C15.2572 25.6351 15.6206 25.7856 15.9994 25.7856C16.3783 25.7856 16.7417 25.6351 17.0096 25.3672C17.2775 25.0992 17.428 24.7359 17.428 24.357C17.428 23.9781 17.2775 23.6148 17.0096 23.3469C16.7417 23.0789 16.3783 22.9284 15.9994 22.9284C15.6206 22.9284 15.2572 23.0789 14.9893 23.3469C14.7214 23.6148 14.5709 23.9781 14.5709 24.357Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_148_80">
                <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
        </span>
        Что такое АТС нового поколения?
      </button>
      <NavLink to="/" className="header__logo" title="Протей Технологии">
        <img src={logo} width="307" height="75" alt="Протей Технологии" />
      </NavLink>
    </div>
  </header>
);

export default Header;
