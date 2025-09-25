import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    padding: '80px',
    borderRadius: '60px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

Modal.setAppElement('#root');

// todo типизировать props и методы
/**
 * Компонент модального окна
 *
 * @param isOpen - флаг открытия модального окна
 * @param onClose - функция закрытия модального окна
 * */
const ModalForm = ({ isOpen, onClose }: any) => {
  const initialFormData = { firstName: '', lastName: '', email: '' };

  const [formData, setFormData] = useState(initialFormData);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';
  const API_ENDPOINT = API_BASE_URL ? `${API_BASE_URL}/api/register` : '/api/register';

  // Обработчик изменения полей ввода
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(API_ENDPOINT, formData);
      alert('Регистрация успешна!');
      onClose();
      setFormData(initialFormData);
    } catch (err) {
      console.error(err?.message);
      alert('Ошибка при отправке данных.');
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <h2 className="modal-form__title">Форма регистрации</h2>

      <form className="modal-form__form" onSubmit={handleSubmit}>
        <div className="modal-form__field">
          <label htmlFor="firstName">Имя:</label>
          <input
            type="text"
            placeholder="Введите имя"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            minLength={2}
            required
          />
        </div>
        <div className="modal-form__field">
          <label htmlFor="lastName">Фамилия:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="modal-form__field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Введите email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            minLength={6}
            required
          />
        </div>

        <button className="modal-form__submit" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </Modal>
  );
};

export default ModalForm;
