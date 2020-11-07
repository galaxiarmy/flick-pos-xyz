import React from 'react'
import './index.css'
import { CheckCircle, HeroIllus, Report, Close, LoginIllus } from '../../assets'
import Modal from 'react-modal';

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


const LanggananPage = () => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
  
   
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div style={{backgroundColor: "#F9F9F9", paddingLeft: 200, paddingRight: 196, paddingBottom: 20}}>
            <p className="title-langganan">Daftar sekarang dan dinikmati fiturnya!</p>
            <div className="box">
                <div style={{
                    width: "30%",
                    height: 500,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 10,
                    opacity: 5,
                    flexDirection: "column",
                    
                

                }}>
                    <p style={{color: "#EB414F", textAlign: "center"}} className="title-box">Basic</p>
                    <p className="price-box">Rp. 45.000 / bulan </p>
                    <div className="list-product"><img src={CheckCircle}/><p>Kelola Stok Product Dengan Murah</p></div>
                    <div className="list-product"><img src={CheckCircle}/><p>Laporan Penjualan</p></div>

                    <div className="list-product"><img src={CheckCircle}/><p>Jual Product Digital</p></div>
                    <div className="but-box">
                    <button onClick={openModal} className="button-box">Aku Mau!</button>
                    </div>

                </div>
                <div style=
                {{
                    width: "30%",
                    height: 500,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 10,
                    opacity: 10,
                }} >
                <div style={{width: "100%", height: 40, backgroundColor: "#EB414F", textAlign:"center"}}><p className="title-center">Best Seller!</p></div>
                <p className="title-box" style={{color: "#EB414F", textAlign: "center"}}>Premium</p>
                <p className="price-box">Rp. 70.000 / bulan </p>
                    <div className="list-product"><img src={CheckCircle}/><p>Semua fitur pada paket premium</p></div>
                    <div className="list-product"><img src={CheckCircle}/><p>Laporan Penjualan</p></div>

                    <div className="list-product"><img src={CheckCircle}/><p>Jual Product Digital</p></div>
                    <div className="but-box">
                    <button onClick={openModal} className="button-box">Aku Mau!</button>
                    </div>

                </div>
                <div style={{
                    width: "30%",
                    height: 500,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 10,
                    opacity: 10,
                }}>
                <p className="title-box" style={{color: "#EB414F", textAlign: "center"}}>Super POS!</p>
                <p className="price-box">Rp. 70.000 / bulan </p>
                    <div className="list-product"><img src={CheckCircle}/><p>Semua fitur pada paket premium</p></div>
                    <div className="list-product"><img src={CheckCircle}/><p>Laporan Penjualan</p></div>

                    <div className="list-product"><img src={CheckCircle}/><p>Jual Product Digital</p></div>
                    <div className="but-box">
                    <button onClick={openModal} className="button-box">Aku Mau!</button>
                    </div>
                </div>
                

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

export default LanggananPage
