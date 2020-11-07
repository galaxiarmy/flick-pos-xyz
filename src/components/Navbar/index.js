import React from 'react';
import Modal from 'react-modal';
import { Close, LoginIllus } from '../../assets';
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

const Navbar = () => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
  
   
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="home-navbar">
            <div>
                <p className="title">xyz<strong>POS</strong></p>
            </div>
            <div className="menu-bar">
              <p className="title-nav">Fitur</p>
               <p className="title-nav">Berlangganan</p>
               <button onClick={openModal} className="button-masuk">Masuk</button>
            </div>
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
                    <p style={{fontSize: 32, fontWeight: "bold"}}>Masuk</p>
                    <input security placeholder="Email" className="inputan" />
                    <input security placeholder="Password" className="inputan" />
    
                    <button className="btn-daftar">Masuk</button>
                    <p onClick >Belum punya akun? <p>Daftar</p></p>


                    
                </div>
                
            </div>
          
          
        </Modal>
            
        </div>
    )
}

export default Navbar

