import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../css/11Slider.css"
export const Slider = () => (
  <Swiper  className = 'myclassSliderBatya'  spaceBetween={50} slidesPerView={1} autoplay={{ delay: 2000 }}>
    <SwiperSlide className = "MyclassSlider" > <img src="https://i.ytimg.com/vi/KJ1Yl0VLqaE/maxresdefault.jpg" alt="" className = "img" /> </SwiperSlide>
    <SwiperSlide className = "MyclassSlider" > <img src = "https://www.shutterstock.com/image-photo/aidriven-healthcare-medical-technology-concept-600nw-2516517071.jpg" alt = "" className = "img" /> </SwiperSlide>
    <SwiperSlide className = "MyclassSlider" > <img src="https://i.pinimg.com/736x/f4/d4/31/f4d431a258e514990eb634b5be674b2d.jpg" alt="" srcset="" className = "img" /></SwiperSlide>
    <SwiperSlide className = "MyclassSlider" > <img src="https://media.istockphoto.com/id/1388254153/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%BD%D1%96%D0%BC%D0%BE%D0%BA-%D0%B4%D0%B8%D1%82%D0%B8%D0%BD%D0%B8-%D1%8F%D0%BA%D0%B0-%D1%81%D0%B8%D0%B4%D1%96%D0%BB%D0%B0-%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BB%D1%96%D0%BD%D0%B0%D1%85-%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D1%96-%D0%BF%D1%96%D0%B4-%D1%87%D0%B0%D1%81-%D0%BE%D0%B3%D0%BB%D1%8F%D0%B4%D1%83-%D0%BB%D1%96%D0%BA%D0%B0%D1%80%D0%B5%D0%BC.jpg?s=2048x2048&w=is&k=20&c=AetS7AAARE-fTn3BACg-YJxaVmsKfjNQCwZECIcfi4A=" alt="" srcset="" className = "img" /></SwiperSlide>
    <SwiperSlide className = "MyclassSlider" > <img src="https://media.istockphoto.com/id/1473559425/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B6%D1%96%D0%BD%D0%BA%D0%B0-%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D1%8E%D1%87%D0%B8%D0%B9-%D0%BB%D1%96%D0%BA%D0%B0%D1%80-%D0%B7%D0%B0%D1%81%D0%BF%D0%BE%D0%BA%D0%BE%D1%8E%D1%94-%D0%BF%D0%B0%D1%86%D1%96%D1%94%D0%BD%D1%82%D0%BA%D1%83.jpg?s=2048x2048&w=is&k=20&c=aC7L0NatyFOm_IktADipOnB7T6XQ0tSXM2C7Sn253lM=" alt="" srcset="" className = "img" /></SwiperSlide>
    <SwiperSlide className = "MyclassSlider" > <img src="https://media.istockphoto.com/id/1515156732/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B9-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BC%D0%B5%D0%B4%D0%B8%D1%87%D0%BD%D0%B8%D0%BC-%D0%BF%D1%80%D0%B0%D1%86%D1%96%D0%B2%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC.jpg?s=612x612&w=0&k=20&c=YprsipTWo69v1v75vra0iRwerj7bftpil_o1z28ZZgQ=" alt="" srcset="" className = "img" /></SwiperSlide>
    <SwiperSlide className = "MyclassSlider" > <img src="https://media.istockphoto.com/id/1372351879/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/4k-%D0%B2%D1%96%D0%B4%D0%B5%D0%BE%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B3%D0%BE-%D0%BB%D1%96%D0%BA%D0%B0%D1%80%D1%8F-%D1%8F%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%BC-%D0%B7-%D0%BF%D0%B0%D1%86%D1%96%D1%94%D0%BD%D1%82%D0%BE%D0%BC.jpg?s=640x640&k=20&c=YOYO_DCKiTggB9Vhtnb7ofQIdjr9LEJZpgd3kAZvMVA=" alt="" srcset="" className = "img" /></SwiperSlide>

  
  </Swiper>
);

export default Slider;


export  function News({children}) {


    return(
        <>
          <div className = 'VolonterBlock'>
            <p className = 'Blog'> Medicine Galery news </p> 
            {/* <img  className = 'medTalk' src = "https://www.kmhealthandcareacademy.co.uk/wp-content/uploads/2024/05/HCA-ambassadors-poster-3.jpg" alt = "med picture" /> */}
            <Slider/>
          </div>
        </>
    )
}