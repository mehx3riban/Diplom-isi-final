import React, { useRef,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import ContactImg from '../../assets/images/headers-images/Contact-title.jpg'
// import Button from '../../components/Button/Button'
import { FaLocationDot } from '../../../node_modules/react-icons/fa6'
import { FiPhone } from '../../../node_modules/react-icons/fi'
import { HiOutlineMail } from '../../../node_modules/react-icons/hi'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import './contact.css'


const Contact = () => {

  const formEl = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a82z6w5', 'template_n6w9jwa', formEl.current, 'PDXyUUoAZ8p8D6dNe')
    .then((result) => {
        console.log(result.text);
        formEl.current.reset();
    }, (error) => {
        console.log(error.text);
    });
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PagesHeader classAdiTitle='header-content_title-33' classAdi='header-content-45' headerImg={ContactImg} headerText='Contact Us' strength='200' />

      <section className='contact-us bg-white'>
        <div className='row'>
          <div className='col-12 col-lg-6'>

            <div className='contact-heading'>
              <h2 className='contact-text'>WRITE US</h2>
              <div className='contact__divider'></div>
              <p className='class-p write-us-text'>
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetendis in mei. Mei an pericula euripidis, hinc partem
                ei est. Eos ei nisl graecis, vix aperiri nsequat an. Eius lorem
                tincidunt vix at, vel pertinax sensibus id.
              </p>
            </div>

            <div className='contact-form pt-5'>

            <Formik 
                initialValues={{
                  name: '',
                  surname: '',
                  email: '',
                  phone: '',
                  message: '',
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required('Name is required'),
                  surname: Yup.string().required('Surname is required'),
                  email: Yup.string()
                  .email('Invalid email address')
                  .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Invalid email address')
                  .required('Email is required'),
                  phone: Yup.string()
                  .matches(/^\s*(?:\+\d{1,3}\s?)?(?:(?:\(\d{3}\))|(?:\d{3}))[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}\s*$/
                  , 'Invalid phone number')
                  .required('Phone number is required'),
                  message: Yup.string().required('Message is required'),
                })}
                onSubmit={(values, {  setSubmitting }) => {
                  console.log(values);
                  setSubmitting(false);
                  // setTimeout(() => {
                  //   resetForm();
                  // }, 2000);
                }}
              >
                {({ dirty, isSubmitting }) => (
                  <Form ref={formEl} onSubmit={sendEmail}>
                    <div className="form-group" data-aos="fade-up"  >
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                      />
                      <ErrorMessage name="name" component="div" className="error-message" />
                    </div>

                    <div className="form-group" data-aos="fade-up"  >
                      <Field
                        type="text"
                        id="surname"
                        name="surname"
                        className="form-control"
                        placeholder="Your Surname"
                      />
                      <ErrorMessage name="surname" component="div" className="error-message" />
                    </div>

                    <div className="form-group" data-aos="fade-up"  >
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      <ErrorMessage name="email" component="div" className="error-message" />
                    </div>

                    <div className="form-group" data-aos="fade-up"  >
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Your Phone"
                      />
                      <ErrorMessage name="phone" component="div" className="error-message" />
                    </div>

                    <div className="form-group" data-aos="fade-up"  >
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        className="form-control"
                        placeholder="Your Message"
                        rows="6"
                      />
                      <ErrorMessage name="message" component="div" className="error-message" />
                    </div>

                    <div className='form-group d-flex justify-content-end pt-1 ' data-aos="fade-up" >
                      <button className='button-contact' type="submit" disabled={!dirty || isSubmitting}>
                        send
                      </button>
                    </div>
                    
                  </Form>
                )}
              </Formik>

            </div>
          </div>

          <div className='col-12 col-lg-6'>
            <div className='contact-heading pb-5'>
              <h2 className='contact-text'>LOCATIONS</h2>
              <div className='contact__divider'></div>
              <p className='class-p location-text'>
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetendis in mei. Mei an pericula euripidis, hinc partem
                ei est. Eos ei nisl graecis, vix aperiri nsequat an. Eius lorem
                tincidunt vix at, vel pertinax sensibus id.
              </p>
            </div>

            {/* ---Contact details---- */}
            <div className='contact-details'>

              <div className='row align-items-start pt-2 pb-lg-4 pb-2 ' data-aos="fade-up" data-aos-duration="1000"  >

                <div className='detail-item col-12 col-md-6 d-flex '>
                  <div className='mb-5'>
                    <FaLocationDot className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-1 mb-4'>
                    <h4 className='contact-detail-text mb-0'>ADDRESS</h4>
                    <p className='mt-2'>
                      198 West 21th Street, <br /> Suite 721 New York,<br /> NY 10010
                    </p>
                  </div>
                </div>

                <div className='detail-item col-12 col-md-6 d-flex '>
                  <div className='mb-5'>
                    <FaLocationDot className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-1 mb-4'>
                    <h4 className='contact-detail-text mb-0'>ADDRESS</h4>
                    <p className='mt-2'>
                      198 West 21th Street, <br /> Suite 721 New York,<br /> NY 10010
                    </p>
                  </div>
                </div>

              </div>

              <div className='row align-items-start pb-lg-4 pb-2' data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="50" >
                <div className='col-12 col-md-6 d-flex '>
                  <div className='mb-5'>
                    <FiPhone className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-1 mb-4'>
                    <h4 className='contact-detail-text mb-0'>PHONES</h4>
                    <p className='mt-2'>
                      Phone: +95 (0) 123 456 789 <br /> Cell: +95 (0) 123 456 789
                    </p>
                  </div>
                </div>
                <div className='col-12 col-md-6 d-flex '>
                  <div className='mb-5'>
                    <FiPhone className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-1 mb-4'>
                    <h4 className='contact-detail-text mb-0'>PHONES</h4>
                    <p className='mt-2'>
                      Phone: +95 (0) 123 456 789 <br /> Cell: +95 (0) 123 456 789
                    </p>
                  </div>
                </div>
              </div>

              <div className='row align-items-start pb-lg-4 pb-2 ' data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="100">
                <div className='col-12 col-md-6 d-flex '>
                  <div className='mb-5'>
                    <HiOutlineMail className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-1 mb-4'>
                    <h4 className='contact-detail-text mb-0'>EMAILS</h4>
                    <p className='mt-2'>
                      barista@qodeinteractive.com <br /> barista@qode.com barista
                    </p>
                  </div>
                </div>
                <div className='col-12 col-md-6 d-flex '>
                  <div className='mb-5'>  
                    <HiOutlineMail className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-1 '>
                    <h4 className='contact-detail-text mb-0'>EMAILS</h4>
                    <p className='mt-2'>
                      barista@qodeinteractive.com <br /> barista@qode.com barista
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      

      <div className='contact-map '>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388956.0537492701!2d49.23112720128096!3d40.39291630874411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1692267826582!5m2!1sen!2saz'
          width='100%'
          height='380'></iframe>
      </div>
    </>
  )
}

export default Contact