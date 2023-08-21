import React, {useState , useEffect} from 'react'
import './OurMenu.scss'
import axios from 'axios'
import Caffe from '../../components/MenuSection/Caffe'
import menuHeaderImg from '../../assets/images/our-menu-page/Team-title-area-parallax-img-2.jpg'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import menuLogo from '../../assets/images/our-menu-page/Craft-logo-2 (1).png'
const OurMenu = () => {

    const [menuMelumatlari , setMenuMelumatlari] = useState (null)

    useEffect(()=>{
      axios.get ('/src/json/menu.json')
      .then (menununGelenMelumati=> setMenuMelumatlari(menununGelenMelumati.data) )
    },[])
  return (

    <div>
        <PagesHeader headerImg={menuHeaderImg} headerText='Our menu' strength='200' />
        
        <div className='our-menu-section'>


            <div className='row our-menu-container' >

                <div className='col-12 col-lg-6'>
                    <div className='our-menu-title'>
                        <h2 className='our-menu-title__h2'>COFFEE MENU NO 1</h2>
                        <div className='our-menu__divider'></div>
                    </div>
                    <div >
                        {menuMelumatlari &&
                        menuMelumatlari.slice(0, 7).map((birMenuMelumati) => (
                            <div>  
                            <Caffe
                                caffeClassAdi=' dark-text'
                                CaffeDivLine='dark-line'
                                newInMenu={ birMenuMelumati.isNew ? 'New' : '' }
                                caffeImg={birMenuMelumati.CaffeImg}
                                caffeName={birMenuMelumati.CaffeName}
                                caffePrice={birMenuMelumati.CaffePrice}
                                caffeDesc={birMenuMelumati.CaffeDesc}
                            />
                            </div>
                        ))}

                    </div>
                </div>
                
                <div className='col-12 col-lg-6'>
                    <div className='our-menu-title'>
                        <h2 className='our-menu-title__h2'>COFFEE MENU NO 2</h2>
                        <div className='our-menu__divider'></div>
                    </div>
                    <div  >
                        {menuMelumatlari &&
                        menuMelumatlari.slice(7, 12).map((birMenuMelumati) => (
                            <div>  
                            <Caffe
                                caffeClassAdi=' dark-text'
                                CaffeDivLine='dark-line'
                                newInMenu={ birMenuMelumati.isNew ? 'New' : '' }
                                caffeImg={birMenuMelumati.CaffeImg}
                                caffeName={birMenuMelumati.CaffeName}
                                caffePrice={birMenuMelumati.CaffePrice}
                                caffeDesc={birMenuMelumati.CaffeDesc}
                            />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            
      
            <div className='our-menu-parallax'>
                <div className='our-menu__logo-div'>
                    <img src={menuLogo} alt="" className='our-menu__logo' />
                </div>
            </div>

            <div className='row our-menu-container' >

                <div className='col-12  col-lg-6'>
                    <div className='our-menu-title'>
                        <h2 className='our-menu-title__h2'>COFFEE MENU NO 1</h2>
                        <div className='our-menu__divider'></div>
                    </div>
                    <div >
                        {menuMelumatlari &&
                        menuMelumatlari.slice(0, 7).map((birMenuMelumati) => (
                            <div>  
                            <Caffe
                                caffeClassAdi=' dark-text'
                                CaffeDivLine='dark-line'
                                newInMenu={ birMenuMelumati.isNew ? 'New' : '' }
                                caffeImg={birMenuMelumati.CaffeImg}
                                caffeName={birMenuMelumati.CaffeName}
                                caffePrice={birMenuMelumati.CaffePrice}
                                caffeDesc={birMenuMelumati.CaffeDesc}
                            />
                            </div>
                        ))}

                    </div>
                </div>
                
                <div className='col-12  col-lg-6'>
                    <div className='our-menu-title'>
                        <h2 className='our-menu-title__h2'>COFFEE MENU NO 2</h2>
                        <div className='our-menu__divider'></div>
                    </div>
                    <div  >
                        {menuMelumatlari &&
                        menuMelumatlari.slice(7, 12).map((birMenuMelumati) => (
                            <div>  
                            <Caffe
                                caffeClassAdi=' dark-text'
                                CaffeDivLine='dark-line'
                                newInMenu={ birMenuMelumati.isNew ? 'New' : '' }
                                caffeImg={birMenuMelumati.CaffeImg}
                                caffeName={birMenuMelumati.CaffeName}
                                caffePrice={birMenuMelumati.CaffePrice}
                                caffeDesc={birMenuMelumati.CaffeDesc}
                            />
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>

        
        
    </div>
  )
}

export default OurMenu