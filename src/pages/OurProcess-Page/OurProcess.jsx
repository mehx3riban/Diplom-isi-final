import React from 'react'
import './OurProcess.scss'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import OurProcessImg from '../../assets/images/headers-images/What-we-offer-title-img-800.jpg'
import div1Img from '../../assets/images/our-process-imgs/Process-img-1.jpg'
import div2Img from '../../assets/images/our-process-imgs/Process-img-2.jpg'
import div3Img from '../../assets/images/our-process-imgs/Process-img-3.jpg'
import div4Img from '../../assets/images/our-process-imgs/Process-img-4.jpg'
import {BsCheck} from 'react-icons/bs'
import Progress from '../../components/ProgressBar/Progress'
import Button from '../../components/Button/Button'

const OurProcess = () => {

  return (
    <div >
        <PagesHeader  classAdi='header-content-90' headerImg={OurProcessImg} headerText='OUR PROCESS' strength='200' classAdiTitle='header-content_title-55' />

      <div className='our-process'>

{/* -------------------DIV1--------------------- */}

        <div className='raw our-process__div bg-white'>
          <div className='row d-flex align-items-center'>
            <div className='col-12 col-lg-6 our-process__img process-img-left'>
              <img src={div1Img} alt="" />
            </div>

            <div className='col-12 col-lg-6 our-process__content content-right'>
              <h2 className='class-h2 process-h2'>RAW COFFEE BEANS</h2>
              <div className='process__divider'></div>
              <p className='class-p process-text'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas.</p>
              <div className='process-check'>
                <p ><span><BsCheck size={27} /></span> Balanced, Vibrant Taste</p>
                <p><span><BsCheck size={27}/></span> Rich And Fresh Aroma, Deep Flavor</p>
                <p><span><BsCheck size={27}/></span> Complex, Bold Taste</p>
                
              </div>
            </div>
          </div>
        </div>

{/* -------------------DIV2--------------------- */}
        <div className='coffee-roastery our-process__div'>
          <div className='row d-flex align-items-center'>

            <div className='col-12 col-lg-6 our-process__content content-left'>
              <h2 className='class-h2 process-h2'>COFFEE ROASTERY</h2>
              <div className='process__divider'></div>
              <p className='class-p process-text'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.</p>
              
              <Progress skillName='DESIGN' percentage='92'/>
              <Progress skillName='DEVELOPMENT' percentage='67'/>

            </div>

            <div className='col-12 col-lg-6 our-process__img process-img-right'>
              <img src={div2Img} alt="" />
            </div>

          </div>
        </div>

{/* -------------------DIV3--------------------- */}

        <div className='roasting our-process__div bg-white'>
        <div className='row d-flex align-items-center'>
            <div className='col-12 col-lg-6 our-process__img process-img-left'>
              <img src={div3Img} alt="" />
            </div>

            <div className='col-12 col-lg-6 our-process__content content-right'>
              <h2 className='class-h2 process-h2'>ROASTING COFFEE BEANS</h2>
              <div className='process__divider'></div>
              <p className='class-p process-text'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas.</p>
              <div className='process-button pt-4'>
                
                <Button to='/our-process' icindekiYazi='read more' classAdi='btn-brown-dark' />
                
              </div>
            </div>
          </div>
        </div>


{/* -------------------DIV4--------------------- */}

        <div className='packaging our-process__div'>
          <div className='row d-flex align-items-center'>

            <div className='col-12 col-lg-6 our-process__content content-left'>
              <h2 className='class-h2 process-h2'>PACKAGING COFFEE</h2>
              <div className='process__divider'></div>
              <p className='class-p process-text'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas.</p>
              <div className='process-check'>
                <p ><span><BsCheck size={27} /></span> Balanced, Vibrant Taste</p>
                <p><span><BsCheck size={27}/></span> Rich And Fresh Aroma, Deep Flavor</p>
                <p><span><BsCheck size={27}/></span> Complex, Bold Taste</p>
                
              </div>

            </div>

            <div className='col-12 col-lg-6 our-process__img process-img-right'>
              <img src={div4Img} alt="" />
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default OurProcess