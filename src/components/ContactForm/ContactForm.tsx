import React, { useRef } from 'react';
import styles from './ContactForm.module.scss';

import emailjs from '@emailjs/browser';
import { API } from '../../constants/API';

import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const formRef: React.RefObject<HTMLFormElement> = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = () => {
    if (formRef.current) {
      emailjs
        .sendForm(API.emailService, API.emailTemplate, formRef.current, {
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

  console.log(errors);

  return (
    <div className={styles.contactForm}>
      <h3 className={styles.contactFormTitle}>Write me an email</h3>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <div>
          <input
            type='text'
            placeholder='Write your fullname'
            className='input'
            {...register('from_name', { required: true, minLength: 3 })}
          />
          {errors.from_name?.type === 'required' && (
            <span className={styles.formError}>This field is required</span>
          )}
          {errors.from_name?.type === 'minLength' && (
            <span className={styles.formError}>
              Minimum 3 characters required
            </span>
          )}
        </div>

        <div>
          <input
            type='email'
            placeholder='Write your email'
            className='input'
            {...register('user_email', {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.user_email?.type === 'required' && (
            <span className={styles.formError}>This field is required</span>
          )}
          {errors.user_email?.type === 'pattern' && (
            <span className={styles.formError}>Invalid email format</span>
          )}
        </div>

        <div>
          <textarea
            placeholder='Write your text'
            className={styles.formTextArea + ' input'}
            {...register('message', { required: true })}
          />
          {errors.message?.type === 'required' && (
            <span className={styles.formError}>This field is required</span>
          )}
        </div>

        <button
          type='submit'
          className='button'
          disabled={Object.entries(errors).length > 0}
        >
          Send
        </button>
      </form>
      <ToastContainer autoClose={1500} />
    </div>
  );
};
