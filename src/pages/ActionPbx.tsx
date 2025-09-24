import React from 'react';
import { Header, PBXCard } from '../components';
import lowCapacity from './../assets/images/low-capacity.svg';
import mediumCapacity from './../assets/images/medium-capacity.svg';
import highCapacity from './../assets/images/high-capacity.svg';

/**
 * Страница ActionPbx
 *
 * @returns {React.ReactElement} page component
 */
const ActionPbx: React.FC = (): React.ReactElement => (
  <div className="page">
    <Header />

    <main>
      <section className="hero-section">
        <div className="hero-section__container">
          <h1 className="hero-section__title">
            Забудьте о&nbsp;разрозненных решениях&nbsp;&mdash; внедрите
            <br />
            единую платформу для всех коммуникаций
          </h1>
          <p className="hero-section__subtitle">Попробуйте коммуникации будущего с&nbsp;АТС нового поколения</p>
        </div>
      </section>

      <section className="pbx-types">
        <div className="pbx-types__container">
          <div className="pbx-types__grid">
            <PBXCard image={lowCapacity} description="до 1 000 абонентов" title="АТС малой ёмкости" />

            <PBXCard image={mediumCapacity} description="до 10 000 абонентов" title="АТС средней ёмкости" />

            <PBXCard image={highCapacity} description="от 10 000 абонентов" title="АТС большой ёмкости" />
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default ActionPbx;
