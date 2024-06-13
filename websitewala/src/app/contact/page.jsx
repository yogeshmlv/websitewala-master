'use client';
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./contact.module.css";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string(),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID);
        toast.success("Message sent successfully!");
        resetForm(); // Reset the form values
      } catch (error) {
        toast.error("Error sending message. Please try again later.");
        console.error("Email could not be sent:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });
  

  return (
    <div className={styles.container} style={{marginBottom:'44px'}}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="Contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={styles.error}>{formik.errors.name}</div>
          ) : null}

          <input
            type="text"
            name="email"
            placeholder="Enter Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number (Optionally)"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter Custom Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className={styles.error}>{formik.errors.message}</div>
          ) : null}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <ToastContainer /> {/* This is where the toast messages will be displayed */}
    </div>
  );
};

export default ContactPage;