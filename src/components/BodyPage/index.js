import React from 'react';
import Modal from 'react-modal';
import { Close, HeroIllus, LoginIllus } from '../../assets';
import './index.css';

const customStyles = {
    content : {
      top                   : '10%',
      left                  : '20%',
      right                 : '20%',
      bottom                : '20%',
      backgroundColor:      "#FFFFFF",
    },
    overlay : {
        backgroundColor: "#707070",
      
    }
  };


const BodyPage = () => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 

 
  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className="container2">
            <div>
            <p className="title">Solusi terbaik untuk<p className="title-usaha">mengelola usaha</p>kamu!</p>
            <button onClick={openModal} className="button-daftar">Daftar Sekarang</button>
            <button className="button-daftar1">Pelajari Dulu!</button>
            
            </div>
            
            <img src={HeroIllus} />
            <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          
          onRequestClose={closeModal}
       
          contentLabel="Example Modal"
        >
            <a className="link-close" onClick={closeModal}><img src={Close}/></a>
            <div className="box-modal">
                <img src={LoginIllus}/>
                <div style={{flexDirection: "column"}}>
                    <p style={{fontSize: 32, fontWeight: "bold"}}>Buat Akun</p>
                    <input placeholder="Nama" className="inputan"/>
                    <input security placeholder="Email" className="inputan" />
                    <input security placeholder="Password" className="inputan" />
    
                    <button className="btn-daftar">Daftar</button>
                    <p onClick >Belum punya akun? <p>Daftar</p></p>


                    
                </div>
                
            </div>
          
          
        </Modal>
        </div>
    )
}

export default BodyPage
