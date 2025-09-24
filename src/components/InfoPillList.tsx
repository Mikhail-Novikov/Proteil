import React from 'react';

type Item = {
  /* номер панели */
  number: number;
  /* текст панели */
  text: string;
};

/**
 * Компонент для отображения списка информационных панелей.
 *
 * @param {Item[]} items - Массив текстов с информацией о панелях.
 */
export const InfoPillList: React.FC<{ items: Item[]; title: React.ReactNode }> = ({ items, title }) => {
  return (
    <div className="info-pill-list" aria-label="Информационные панели">
      <h3 className="service-block__title">{title}</h3>
      {items.map((it) => (
        <div key={it.number} className="info-pill">
          <span className="info-pill__icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <g clipPath="url(#clip0_24_127)">
                <path
                  d="M16 0C7.16429 0 0 7.16429 0 16C0 24.8357 7.16429 32 16 32C24.8357 32 32 24.8357 32 16C32 7.16429 24.8357 0 16 0ZM16 29.2857C8.66429 29.2857 2.71429 23.3357 2.71429 16C2.71429 8.66429 8.66429 2.71429 16 2.71429C23.3357 2.71429 29.2857 8.66429 29.2857 16C29.2857 23.3357 23.3357 29.2857 16 29.2857Z"
                  fill="white"
                />
                <path
                  d="M14.2861 9.71429C14.2861 10.1689 14.4667 10.605 14.7882 10.9265C15.1097 11.248 15.5458 11.4286 16.0004 11.4286C16.4551 11.4286 16.8911 11.248 17.2126 10.9265C17.5341 10.605 17.7147 10.1689 17.7147 9.71429C17.7147 9.25963 17.5341 8.82359 17.2126 8.5021C16.8911 8.18061 16.4551 8 16.0004 8C15.5458 8 15.1097 8.18061 14.7882 8.5021C14.4667 8.82359 14.2861 9.25963 14.2861 9.71429ZM16.8576 13.7143H15.1433C14.9861 13.7143 14.8576 13.8429 14.8576 14V23.7143C14.8576 23.8714 14.9861 24 15.1433 24H16.8576C17.0147 24 17.1433 23.8714 17.1433 23.7143V14C17.1433 13.8429 17.0147 13.7143 16.8576 13.7143Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_24_127">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="info-pill__text">{it.text}</span>
        </div>
      ))}
    </div>
  );
};

export default InfoPillList;
