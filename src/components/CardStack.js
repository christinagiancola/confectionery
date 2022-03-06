import React, { useState } from "react"
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const CardStack = ({ cards, imageUrls, showCards, currentClickId }) => {
  // const infoCard = cards[0]
  // const contactCard = cards.length - 1

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  const [imgIndex, setImgIndex] = useState(0)

  const settings = {
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    draggable: true,
    // swipeToSlide: true,
    nextArrow: <NextArrow />, //imported from 'react-icons'
    prevArrow: <PrevArrow />, //imported from 'react-icons'
    beforeChange: (current, next) => setImgIndex(next),
  }

  // let cardArray = [
  //   <img
  //     className="card"
  //     src="https://images.ctfassets.net/jotoby554kx0/4bhIAoUyQeYysPWgIe5SCK/4c223a881085f01d75dd5c440bf6fde1/CARD01.jpg"
  //     alt="1"
  //   />,
  //   <img
  //     className="card"
  //     src="https://images.ctfassets.net/jotoby554kx0/3wzwAUSG70EhPvHVphmKJw/e161255869e20cc89e8dd2aba42d1206/CARD02.jpg"
  //     alt="2"
  //   />,
  //   <img
  //     className="card"
  //     src="https://images.ctfassets.net/jotoby554kx0/4CPyxfldz8iqMERcrakx4u/59e8d7786dac2ed2677a5d3c98a5a818/CARD_03.jpg"
  //     alt="3"
  //   />,
  //   <img
  //     className="card"
  //     src="https://images.ctfassets.net/jotoby554kx0/4SWFGjRIXZwtcB1GgF3sk6/b0a3dcf52e8512c975c63fef3728b4ba/CARD_04.jpg"
  //     alt="4"
  //   />,
  //   <img
  //     className="card"
  //     src="https://images.ctfassets.net/jotoby554kx0/4GExflYYHixT6c0bgnu4OI/23d950c158ec15d0a2f49e660b8ed51b/CARD_05.jpg"
  //     alt="5"
  //   />,
  // ]

  return (
    <div>
      <Slider {...settings}>
        {imageUrls.map((img, idx) => (
          <div key={idx}>
            <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
              <img className="card" src={img} alt={idx} key={idx}></img>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CardStack
