import styles from "./FormCustom.module.css";
import { FormCustomProps } from "./FormCustomProps";
import { useState } from "react";
// import { ButtonProps } from './Button.props'
import cn from "classnames";
// import ArrowIcon from './arrow.svg';

// export const Button = ({ appearance, arrow = 'none',  children, className, ...props }: ButtonProps): JSX.Element => {
// 	return (
// 	<button  className={cn(s.button, className, {
// 		[s.primary]: appearance == 'primary',
// 		[s.ghost]: appearance == 'ghost',
// 	})}
// 	{...props}
// 	>
// 		{children}
// 		{arrow != 'none' && <span className={cn(s.arrow, {
// 				[s.down]: arrow == 'down'
// 			})}>
// 				<ArrowIcon />
// 			</span>}

// 	</button>)
// }

export const FormCustom = ({}: FormCustomProps): JSX.Element => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [messenger, setMessenger] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorMessenger, setErrorMessenger] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return "Не корректный номер";
    }
    return "";
  };

  const handleChangePhone = (e: any) => {
    setPhone(e.target.value);
    setErrorPhone(validatePhoneNumber(e.target.value));
  };

  const handleChangeName = (e: any) => {
    setName(e.target.value);
    //setErrorName();
  };

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => console.log(json))

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      errorPhone === "" &&
      phone !== "" &&
      name !== "" &&
      message !== "" &&
      messenger !== ""
    ) {
      console.log("Sending");
      const newPhone = `${phone}. Предпочитаемый способ связи "${messenger}"`;

      let data = {
        name,
        newPhone,
        message,
        messenger,
      };

      console.log("Запустить скрипть который появление и исчесновения");
  
      setVisible((el) => !el);
      setTimeout(() => {
        setVisible((el) => !el);
      }, 5000);

      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        console.log(res.status);
        if (res.status === 200) {
          console.log("Response succeeded!");

          setName("");
          setPhone("");
          setMessenger("");
          setMessage("");
          //setBody('')
        }
      });
    } else {
      if (phone === "") {
        setErrorPhone("Введите номер телефона");
      }
      if (name === "") {
        setErrorName("Введите ваше имя");
      }
      if (messenger === "") {
        setErrorMessenger("Выберите удобный способ связи");
      }
      if (message === "") {
        setErrorMessage("Введите сообщение");
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.main}>
        <div className={styles.inputGroup}>
          <label htmlFor="messenger">Выберите способ связи:</label>
          <select
            placeholder="Привет"
            id="messenger"
            onFocus={() => setErrorMessenger("")}
            value={messenger}
            name="messenger"
            onChange={(e) => {
              setMessenger(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="telegram">Telegram</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
          <div className={styles.errors}>{errorMessenger}</div>
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            onFocus={() => setErrorName("")}
            onChange={handleChangeName}
            value={name}
            name="name"
            className={styles.inputField}
            required
          />
          <div className={styles.errors}> {errorName}</div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phone">Телефон</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChangePhone}
            className={styles.inputField}
          />
          <div className={styles.errors}>{errorPhone}</div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message">Сообщение</label>
          <textarea
            rows={4}
            onFocus={() => setErrorMessage("")}
            maxLength={600}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            className={styles.inputField}
          />
          <div className={styles.errors}>{errorMessage}</div>
        </div>
        <input
          className={styles.submit}
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
      <div className={cn(styles.catContainer, { [styles.visible]: visible })}>
        <div className={styles.thought}>P-p-p-Мяу, сообщение отправлено.</div>
        <div className={cn(styles.cat)}></div>
      </div>
    </div>
  );
};

// import React from 'react';
// import { Button, Checkbox, Form, Input } from 'antd';
// import ReactWhatsapp from 'react-whatsapp';

// const onFinish = (values: any) => {
// 	console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo: any) => {
// 	console.log('Failed:', errorInfo);
// };
// function handlerForm(e) {
// 	e.preventDefault()
// 	console.log(e.currentTarget);

// }

// const FormCustom: React.FC = () => (

// 	<Form
// 		className={s.form}
// 		name="basic"
// 		// labelCol={{ span: 8 }}
// 		// wrapperCol={{ span: 16 }}
// 		style={{ maxWidth: 600 }}
// 		initialValues={{ remember: true }}
// 		onFinish={onFinish}
// 		onFinishFailed={onFinishFailed}
// 		autoComplete="off"
// 	>
// 		<form action="" onClick={handlerForm}>
// 			<input type="text"  name="" id="" />
// 			<button>нажми</button>
// 		</form>
// 		<Form.Item
// 			className={s.inpt}
// 			// label="Имя"
// 			name="username"
// 			rules={[{ required: true, message: 'Введите ваше имя!' },

// 			]}
// 		>
// 			<Input />
// 		</Form.Item>
// 		<Form.Item
// 			name="Phone Number"
// 			// label="Телефон"
// 			rules={[{ required: true, message: 'Введите номер телефона!' },
// 			{
// 				pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
// 				message: 'Введите коректный номер телефона'
// 			}

// 			]}
// 		>
// 			<Input style={{ width: '100%' }} />
// 		</Form.Item>
// 		<Form.Item
// 			name="Текст"
// 			// label="Intro"
// 			rules={[
// 				{ required: true, message: 'Введите текст сообщения' }

// 			]}
// 		>
// 			<Input.TextArea className={s.textarea} bordered={false} autoSize={true}  rows={10} showCount maxLength={600} />
// 		</Form.Item>

// 		<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
// 			<Button type="primary"  htmlType="submit">
// 				Отправить
// 			</Button>
// 		</Form.Item>
// 	</Form>
// );

// export default FormCustom
