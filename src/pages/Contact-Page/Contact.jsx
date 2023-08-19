import React from 'react'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import ContactImg from '../../assets/images/headers-images/Contact-title.jpg'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import { FaLocationDot } from '../../../node_modules/react-icons/fa6'
import { FiPhone } from '../../../node_modules/react-icons/fi'
import { HiOutlineMail } from '../../../node_modules/react-icons/hi'
import './contact.css'


const Contact = () => {
  return (
    <>
      <PagesHeader headerImg={ContactImg} headerText={'Contact Us'} />

      <section className='contact-us bg-white'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='contact-heading'>
              <h2 className='contact-text'>WRITE US</h2>
              <p>
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetendis in mei. Mei an pericula euripidis, hinc partem
                ei est. Eos ei nisl graecis, vix aperiri nsequat an. Eius lorem
                tincidunt vix at, vel pertinax sensibus id.
              </p>
            </div>
            <div className='contact-form pt-4'>
              <form action='' className='row gy-3 flex-column'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Your Name'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Your Email'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    rows='6'
                    className='form-control'
                    placeholder='Your Message'
                  />
                </div>
                <div className='form-group d-flex justify-content-end'>
                  <Button icindekiYazi={'Send'} classAdi={'btn-brown-dark'} />
                </div>
              </form>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='contact-heading pb-4'>
              <h2 className='contact-text'>LOCATIONS</h2>
              <p>
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetendis in mei. Mei an pericula euripidis, hinc partem
                ei est. Eos ei nisl graecis, vix aperiri nsequat an. Eius lorem
                tincidunt vix at, vel pertinax sensibus id.
              </p>
            </div>
            <div className='contact-details'>
              <div className='row align-items-start pb-4'>
                <div className='col-12 col-md-6 d-flex align-items-center'>
                  <div className='mb-5'>
                    <FaLocationDot className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-3'>
                    <h4 className='contact-detail-text mb-0'>ADDRESS</h4>
                    <p className='mt-2'>
                      198 West 21th Street, Suite 721 New York, NY 10010
                    </p>
                  </div>
                </div>
                <div className='col-12 col-md-6 d-flex align-items-center'>
                  <div className='mb-5'>
                    <FaLocationDot className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-3'>
                    <h4 className='contact-detail-text mb-0'>ADDRESS</h4>
                    <p className='mt-2'>
                      198 West 21th Street, Suite 721 New York, NY 10010
                    </p>
                  </div>
                </div>
              </div>
              <div className='row align-items-start pb-4'>
                <div className='col-12 col-md-6 d-flex align-items-center'>
                  <div className='mb-5'>
                    <FiPhone className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-3'>
                    <h4 className='contact-detail-text mb-0'>PHONES</h4>
                    <p className='mt-2'>
                      Phone: +95 (0) 123 456 789 Cell: +95 (0) 123 456 789
                    </p>
                  </div>
                </div>
                <div className='col-12 col-md-6 d-flex align-items-center'>
                  <div className='mb-5'>
                    <FiPhone className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-3'>
                    <h4 className='contact-detail-text mb-0'>PHONES</h4>
                    <p className='mt-2'>
                      Phone: +95 (0) 123 456 789 Cell: +95 (0) 123 456 789
                    </p>
                  </div>
                </div>
              </div>
              <div className='row align-items-start pb-4'>
                <div className='col-12 col-md-6 d-flex align-items-center'>
                  <div className='mb-5'>
                    <HiOutlineMail className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-3'>
                    <h4 className='contact-detail-text mb-0'>EMAILS</h4>
                    <p className='mt-2'>
                      barista@qodeinteractive.com barista@qode.com barista
                    </p>
                  </div>
                </div>
                <div className='col-12 col-md-6 d-flex align-items-center'>
                  <div className='mb-5'>
                    <HiOutlineMail className='contact-icon' />
                  </div>
                  <div className='addres-detail pt-3'>
                    <h4 className='contact-detail-text mb-0'>EMAILS</h4>
                    <p className='mt-2'>
                      barista@qodeinteractive.com barista@qode.com barista
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
      <Footer />
    </>
  )
}

export default Contact