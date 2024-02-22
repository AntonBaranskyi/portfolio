import React, { useRef } from 'react';
import styles from './ContactForm.module.scss';

import emailjs from '@emailjs/browser';
import { API } from '../../constants/API';

import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';

export const ContactForm = () => {
  const formRef: React.RefObject<HTMLFormElement> = useRef(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(API.emailService, API.emailTemplate, formRef?.current, {
          publicKey: API.emailPublicKey,
        })
        .then(
          () => {
            toast.success('Email send successfully', {
              position: 'top-right',
            });
            formRef.current?.reset();
          },
          () => {
            toast.error('Failed');
          }
        );
    }
  };

  return (
    <div className={styles.contactForm}>
      <h3 className={styles.contactFormTitle}>Write me an email</h3>
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div>
          <input
            type='text'
            placeholder='Write your fullname'
            className='input'
            name='from_name'
          />
        </div>

        <div>
          <input
            type='email'
            placeholder='Write your email'
            className='input'
            name='user_email'
          />
        </div>

        <div>
          <textarea
            placeholder='Write your text'
            className={styles.formTextArea + ' input'}
            name='message'
          />
        </div>

        <button type='submit' className='button'>
          Send
        </button>
      </form>
      <ToastContainer autoClose={1500} />
    </div>
  );
};
