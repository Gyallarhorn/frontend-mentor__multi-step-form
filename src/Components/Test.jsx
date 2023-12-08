import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function MyForm() {
  const [fields, setFields] = useState({
    // Инициализация полей формы
    username: '',
    password: '',
    // ... другие поля формы
  });

  const [areFieldsFilled, setAreFieldsFilled] = useState(false);
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Обновление состояния полей формы
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleValidation = () => {
    // Проверка наличия значений во всех полях
    const areAllFieldsFilled = Object.values(fields).every((value) => value.trim() !== '');
    setAreFieldsFilled(areAllFieldsFilled);

    return areAllFieldsFilled;
  };

  const handleNavLinkClick = () => {
    // При нажатии на NavLink производим валидацию
    if (handleValidation()) {
      // Если все поля заполнены, переходим на другую страницу
      history.push('/other-page');
    } else {
      // В противном случае можно показать сообщение об ошибке
      alert('Заполните все поля формы!');
      // Или выполнить другие действия по вашему усмотрению
    }
  };

  return (
    <div>
      <input type="text" name="username" value={fields.username} onChange={handleChange} />
      <input type="password" name="password" value={fields.password} onChange={handleChange} />

      {/* Пример NavLink с обработчиком события */}
      <NavLink to="/" onClick={handleNavLinkClick}>
        Go to Other Page
      </NavLink>
    </div>
  );
}

export default MyForm;
