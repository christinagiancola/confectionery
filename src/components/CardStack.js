import React, { useEffect, useRef } from "react"
import Slider from "react-slick"
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const CardStack = ({ cards, currentClickId }) => {
  console.log(cards)
  const imageUrls = cards.map(card => card.file.url)
  const contactCardIndex = cards.length - 1
  let cardArray = [
    <img src="https://images.ctfassets.net/jotoby554kx0/4bhIAoUyQeYysPWgIe5SCK/4c223a881085f01d75dd5c440bf6fde1/CARD01.jpg"></img>,
    <img src="https://images.ctfassets.net/jotoby554kx0/3wzwAUSG70EhPvHVphmKJw/e161255869e20cc89e8dd2aba42d1206/CARD02.jpg"></img>,
    <img src="https://images.ctfassets.net/jotoby554kx0/4CPyxfldz8iqMERcrakx4u/59e8d7786dac2ed2677a5d3c98a5a818/CARD_03.jpg"></img>,
    <img src="https://images.ctfassets.net/jotoby554kx0/4SWFGjRIXZwtcB1GgF3sk6/b0a3dcf52e8512c975c63fef3728b4ba/CARD_04.jpg"></img>,
    <img src="https://images.ctfassets.net/jotoby554kx0/4GExflYYHixT6c0bgnu4OI/23d950c158ec15d0a2f49e660b8ed51b/CARD_05.jpg"></img>,
  ]

  console.log("<CardStack> imageUrls:", imageUrls)
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
    initialSlide: 0,
    slidesToShow: 3,
  }

  // const goNext = () => {
  //   if (ref.current !== null && ref.current.swiper !== null) {
  //     ref.current.swiper.slideNext()
  //   }
  // }

  // const goPrev = () => {
  //   if (ref.current !== null && ref.current.swiper !== null) {
  //     ref.current.swiper.slidePrev()
  //   }
  // }

  // useEffect(() => {
  //   imageUrls.map((url, index) => {
  //     cardArray.push(<img key={index} src={url} alt=""></img>)
  //   })
  // }, [imageUrls])

  console.log("CardStack")

  return (
    <div className="container">
      <Slider {...settings}>
        {imageUrls.map((img, idx) => (
          <div>
            <img src={img} alt={idx} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CardStack
