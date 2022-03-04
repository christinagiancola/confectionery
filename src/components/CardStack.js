import React, { useState } from "react"
import Slider from "react-slick"
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const CardStack = ({ cards, currentClickId }) => {
  console.log(cards)
  const imgUrls = cards.map(card => card.file.url)
  const [imgIndex, setImgIndex] = useState(0)
  const contactCardIndex = cards.length - 1
  const infoCardIndex = 0
  let cardArray = [
    <img src="https://images.ctfassets.net/jotoby554kx0/4bhIAoUyQeYysPWgIe5SCK/4c223a881085f01d75dd5c440bf6fde1/CARD01.jpg"></img>,
    <img src="https://images.ctfassets.net/jotoby554kx0/3wzwAUSG70EhPvHVphmKJw/e161255869e20cc89e8dd2aba42d1206/CARD02.jpg"></img>,
    <img src="https://images.ctfassets.net/jotoby554kx0/4CPyxfldz8iqMERcrakx4u/59e8d7786dac2ed2677a5d3c98a5a818/CARD_03.jpg"></img>,
    <img src="https://images.ctfassets.net/jotoby554kx0/4SWFGjRIXZwtcB1GgF3sk6/b0a3dcf52e8512c975c63fef3728b4ba/CARD_04.jpg"></img>,
    <img src="https://images.ctfassets.net/jotoby554kx0/4GExflYYHixT6c0bgnu4OI/23d950c158ec15d0a2f49e660b8ed51b/CARD_05.jpg"></img>,
  ]

  console.log("<CardStack> imageUrls:", imgUrls)
  console.log("<CardStack> cardArray:", cardArray)

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    accessibility: true,
    arrows: true,
    autoplay: false,
    centerMode: true,
    centerPadding: 0,
    draggable: true,
    swipeToSlide: true,
    initialSlide: 0,
    slidesToShow: 3,
  }

  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow next" onClick={onClick}>
  //       <FaArrowRight />
  //     </div>
  //   )
  // }

  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow prev" onClick={onClick}>
  //       <FaArrowLeft />
  //     </div>
  //   )
  // }

  console.log("CardStack")

  return (
    <div className="container">
      <Slider {...settings}>
        {imgUrls.map((img, index) => (
          <div className={index === imgIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={index} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CardStack
