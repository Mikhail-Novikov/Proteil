import React, { useState } from 'react';
import { Header, InfoPillList, ModalForm } from '../components';

/**
 * Страница главная
 *
 * @returns {React.ReactElement} page component
 */
const Home: React.FC = (): React.ReactElement => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="page">
        <Header />

        <main className="main">
          <div className="services-grid">
            <section className="service-block service-block--manage">
              <div className="service-block__content">
                <InfoPillList
                  title="УПРАВЛЯЕМ ПРОСТО"
                  items={[
                    { number: 1, text: 'Единая система управления' },
                    { number: 2, text: 'Автоматическая настройка абонентского оборудования' },
                    { number: 3, text: 'Учёт и управление материальными активами' },
                    { number: 4, text: 'Веб-консоль управления' },
                  ]}
                />
              </div>
            </section>

            <section className="service-block service-block--efficient">
              <div className="service-block__content">
                <InfoPillList
                  title="ЭФФЕКТИВНО И КОМФОРТНО РАБОТАЕМ"
                  items={[
                    { number: 1, text: 'Видеоконференцсвязь' },
                    { number: 2, text: 'Корпоративный мессенджер' },
                    { number: 3, text: 'Аудиоконференции' },
                    { number: 4, text: 'Ядро IP-АТС' },
                  ]}
                />
              </div>
            </section>

            <section className="service-block service-block--notify">
              <div className="service-block__content">
                <InfoPillList
                  title="ОПЕРАТИВНО ОПОВЕЩАЕМ"
                  items={[
                    { number: 1, text: 'Пульт оперативной связи' },
                    { number: 2, text: 'Система оповещения' },
                    { number: 3, text: 'Голосовая почта' },
                    { number: 4, text: 'Fax2Email' },
                  ]}
                />
              </div>
            </section>

            <section className="service-block service-block--integrate">
              <div className="service-block__content">
                <InfoPillList
                  title="ИНТЕГРИРУЕМСЯ И АНАЛИЗИРУЕМ"
                  items={[
                    { number: 1, text: 'Интеграция с информационными системами' },
                    { number: 2, text: 'Журналы вызовов' },
                    { number: 3, text: 'Записи разговоров' },
                  ]}
                />
              </div>
            </section>

            <section className="service-block service-block--calls">
              <div className="service-block__content">
                <InfoPillList
                  title="УПРАВЛЯЕМ ВЫЗОВАМИ"
                  items={[
                    { number: 1, text: 'Контакт-центр' },
                    { number: 2, text: 'Многоуровневая система IVR' },
                    { number: 3, text: 'Записи разговоров' },
                  ]}
                />
              </div>
            </section>

            <section className="service-block service-block--security">
              <div className="service-block__content">
                <InfoPillList
                  title="ОБЕСПЕЧИВАЕМ НАДЁЖНОСТЬ И БЕЗОПАСНОСТЬ"
                  items={[
                    { number: 1, text: 'Пограничный контроллер сессий' },
                    { number: 2, text: 'Узел локальной отказоустойчивости' },
                    { number: 3, text: 'Аутентификация и авторизация' },
                    { number: 4, text: 'СОРМ' },
                  ]}
                />
              </div>
              <button className="cta-button" onClick={() => setModalIsOpen(true)}>
                Посмотреть АТС в действии
                <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none">
                  <rect
                    y="47.0001"
                    width="66.4681"
                    height="66.4681"
                    transform="rotate(-45 0 47.0001)"
                    fill="url(#pattern0_148_58)"
                  />
                  <defs>
                    <pattern id="pattern0_148_58" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_148_58" transform="scale(0.0111111)" />
                    </pattern>
                    <image
                      id="image0_148_58"
                      width="90"
                      height="90"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAESUlEQVR4nO3dy48VRRTH8SOogDokoIagokQNcUvYmghoeESJsPC5YCOoEJW/gIhxowsXgq/IClATVwTMqGGhJIoKw0NRwcQYAg4kPOQRIr6QLynvWUxMV99u5vbtOlX1SSaZQHfd7t/0nOmuruoWybIsswm4C1gJfADsBU4Bf+vXKf2394EVwJ1tb68pwFjgCWAH9VwCvgQed220vR9BA+YBPzF6B4D7296f4AATgHfpvbeB8W3vXxCAm4EhmrMTuElSRifkgzTvQLJha7kYqhDSEWAdsAC4B7hev9z3C4E3gF8rtPNNkmWkQk0eBpZVOYMArgaWA0e7tPmWJHh2UWYLMHAF7Q4AW0tbhrmS0Hly2SncWmDMKNofo6XG58ckzrOBJ0tC+LgXIWjY7rfC51GJXckV3/CVlIuSz5kIHPN81heSQN+Fu1Qu8lTJetcCLwC7gAvAGT0/fs79X8l6T3s+y23DdImVdhD5TuHGeta5FfiupAx8DUwuORtxvylFnpFYaS9ckXWe5ccD39Ld574/oMCbnnXek1hpt2aRhZ7lV1HdY542HvQsv1tipX3IRWZ4lnd1uKpPPW24K8giJyRWwF+enR7wLH++RtAnSy5iivwpsXI7V7TH4l++jks124k66BMNBk3Ndo5Lan8MpZ2ghyRWwKaAgt4gsQKeDSjo5RIrd9lbdAku/Q/abcM0iRmwPYCgP5PYuS7KAIJ+RGKnfcX7Wgx6/2huLJgCzB5Zq6V/Qf8L3Ccp0VtW/ylZppYK7bwuqQGu0e7NfgXtxuWNkxQBN7p63Yeg9/luDiQVtjQftPczMuld0FkXOeg+IR/ROeiokI/oHHRUyEd0mEEDE3W924HXdDbB7zqEzN1GexmY0qfNjzroT4BXuwxTcGNL7m1736wHXdVZ4I629y8YNMuNgpo0YtLSi8APwB9aaoZ0SFr8815o3hkdCuwbQYUGHveMLsKxzQ0BllgRlkE37Rl4WMenDOsQt8PAK8ANYhW2uBJ0nViEPS+JRdjzs1iEPRfFIgwSizBILMIgsQiDxCIMEoswSCzCoKYDmQqs1kHmh7Q3zE2OPw18D2wG1gBzyibJ/x8GSVP0ETsu1Kpc+OuBmRXaNqepkBeXPBaiavfjAzno7kG7Hqte2AMsAa7KR3Rx0HVKRhW7Rz7pAIN6WzOaD2KHe5oXBjUV9CLgl7Z3LvqgRzyRcY3ePU6eNM09KBv4KPWkpV9SLyfSTymXE2lDiuVE2pRSOZG2pVJOJBSxlxMJDbA0wqP7nIQImKVj12JxUEIF3AJ8RRwGJWR0norrRmRat0IsoPO857JB4SH7B7hNrMBu3X5HrKFzs7fuS8nadM5ts1iEnbrtntO0SKyj89q8k4Qb8vMSC2AK8KHuWEjl4iGJEXC3e9KXTjtui/thbzRbk+vQl5LN1+nI2/Xtbr81FOx5nVM+qG/dsHMKl2WZROoy0IjxgHNEzU4AAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
              </button>
            </section>
          </div>
        </main>
      </div>

      <ModalForm isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </>
  );
};

export default Home;
