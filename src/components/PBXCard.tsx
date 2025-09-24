import React from 'react';

type PBXCardProps = {
  /** изображение в карточке */
  image?: string;
  /** заголовок в карточке */
  title: string;
  /** описание в карточке */
  description?: string;
};

/**
 * Карточка с информацией о ПБХ
 *
 * @param image - изображение в карточке
 * @param title - заголовок в карточке
 * @param description - описание в карточке для заголовка
 */
export const PBXCard: React.FC<PBXCardProps> = ({ image, title, description }) => {
  return (
    <section className="pbx-card" aria-label={title} role="link" tabIndex={0}>
      {image && <img className="pbx-card__image" src={image} aria-label={description} />}

      <div className="pbx-card__content">
        <h3 className="pbx-card__title">{title}</h3>
        <p className="pbx-card__description">({description})</p>
      </div>
    </section>
  );
};

export default PBXCard;
