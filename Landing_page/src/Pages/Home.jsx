import React from "react";
import arrow from "../Image/forward.png";
import sofa from "../Image/sofa.jpeg";
import Card from "../component/Card.jsx";
import wardrobe from "../Image/wardrobe.jpeg";
import shelf from "../Image/shelve.jpeg";
import crown from "../Image/crown.png"
import img from "../Image/img.png";
import image from "../Image/image.png";
import chair from "../Image/Chair.png";
import video from "../video/video.mp4";
import cart from "../Image/cart.png"

function Home() {
  const [email, setEmail ] = usestate("");

  const handleChange = (event) => {
     setEmail(event.target.value)
  }
  return (
    <div>
      <div className="bg-[#98D8EF]">

        <div className="  flex items-center justify-between text-white p-4">
          <h1 className=" font-OpenSans font-bold text-[#002B36] text-[25px]">
            .WGA
          </h1>
          <div className="flex items-center">
            <ul className="text-[#002B36] text-[13px] font-OpenSans hidden md:flex space-x-4">
              <li>Home</li>
              <li>About Us</li>
              <li>Product</li>
            </ul>
          </div>

          <img src={cart} className="h-[20px] ml-4"  alt=""></img>

          
        </div>

        <div className="mt-[5px] p-2 m-0">
          <div className="sm:justify-center sm:text-center">
            <p className="font-OpenSans text-[12px] text-[#002B36]">
              Elegant and high-quality furniture products
            </p>

            <div className="justify-items-center">
              <h2 className="font-Serif-italic  md:w-[700px]  text-[35px]">
                Make Your Home More Beautiful with Our Aesthetic Wood Furniture
                Collection.
              </h2>
            </div>
            
          </div>

          <div className="sm:justify-items-center">
            <div className="w-[250px] flex text-center justify-center gap-[5px] p-2 h-[40px] border-[1px] rounded-[10px] border-[#1D1616] border-opacity-50 bg-transparent">
              <p className="font-OpenSans">Browse Our Collection</p>
              <img src={arrow} alt="" />
            </div>
          </div>

        </div>

        <div className="flex">
          <img src={sofa} alt="" className="w-1/3 object-cover rounded-lg" />
          <img src={wardrobe} alt=""className="w-1/3 object-cover rounded-lg"/>
          <img src={shelf} alt="" className="w-1/3 object-cover rounded-lg" />
        </div>
        <div className="justify-items-center">
        <p className=" font-OpenSans  sm:text-center  mt-[2rem] md:text-[20px]">
          Welcome! Our passion for beautiful wood furniture drives us to offer
          exceptional quality at affordable prices. We're dedicated to enhancing
          your home with stunning pieces. Thank you for choosing us.
        </p>
        </div>
        

        <div className="mt-[2rem]">
          <img src={image} alt="" />
        </div>
        <p className="text-center font-bold font-OpenSans text-[30px] mt-[1rem]">
          Benefits
        </p>

        <div>
          <video src={video} autoPlay muted loop className="w-full h-96  object-cover rounded-lg"/>
        </div>
        <div className="justify-items-center mt-[1rem] sm:flex sm:justify-evenly  ">
          <Card
          icon={crown}
          title="Modern Quality"
          paragraph="Crafted with the finest materials for enduring quality."
          />
          <Card
          icon={chair}
          title="Aesthetic Design"
          paragraph="Designed with beauty and function in mind, our pieces are a testament to thoughtful design."
          />
          <Card
          icon={chair}
          title="Versatile"
          paragraph="From living rooms to bedrooms, our pieces find their place throughout your home."
          />
        </div>

        <div className="relative">
          <img src={img} className="w-full mt-[1rem] h-96 object-cover" alt="" />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-white text-[20px] font-bold font-OpenSans">Stay Updated</h2>
          
            {/* <div  className="absolute w-[250px] top-1/4 left-1/2 mt-[3rem] transform -translate-x-1/2 -translate-y-1/2 h-[40px] border-[1px] rounded-[10px] bg-transparent">
              <input type="email" placeholder="enter enail" value={email} onChange={handleChange} />
            </div> */}
            
            <button className="absolute w-[100px] top-1/5 left-1/2 mt-[6rem] transform -translate-x-1/2 -translate-y-1/2 h-[40px] border-[1px] bg-white rounded-[10px]">Subscribe
            </button>

          </div>
        </div>

      </div>
      <div className="bg-black h-[100px]">
        <footer className="relative">
          <div className="h-[1px] relative top-[4rem] bg-gray-200"></div>
          <div className="ont-OpenSans relative top-[2rem] text-[12px] text-white justify-evenly flex">
            <p>Terms of service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;

