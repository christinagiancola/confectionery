import React, { useEffect, useRef } from "react"
import Swiper from "react-id-swiper"

const CardStack = ({ cards, currentClickId }) => {
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

  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  }

  // useEffect(() => {
  //   if (currentClickId === "screenLeft") {
  //     goPrev()
  //   }
  //   if (currentClickId === "screenRight") {
  //     goNext()
  //   }
  // }, [currentClickId])

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
  // const props = {
  //   arrows: false,
  //   autoplay: false,
  //   easing: "ease-in",
  //   transitionDuration: 500,
  // }
  // console.log("<CardStack> sliderRef.current:", sliderRef.current)

  // const handleClick = () => {
  //   // console.log("<CardStack> handleClick triggered")
  //   if (sliderRef.current) {
  //     if (currentClickId === "screenLeft") {
  //       sliderRef.current.goBack()
  //     }

  //     if (currentClickId === "screenRight") {
  //       sliderRef.current.goNext()
  //     }

  //     if (currentClickId === "btnContact") {
  //       sliderRef.current.goTo(contactCardIndex)
  //     }

  //     if (currentClickId === "btnInfo") {
  //       sliderRef.current.goTo(0)
  //     }
  //   }
  // }

  return (
    <Swiper {...params} id="displayCard" className="topCard">
      <div>{cardArray[0]}</div>
      <div>{cardArray[1]}</div>
      <div>{cardArray[2]}</div>
      <div>{cardArray[3]}</div>
      <div>{cardArray[4]}</div>
    </Swiper>
    // <Carousel
    //   id="displayCard"
    //   className="topCard"
    //   slides={cardArray}
    //   autoplay={false}
    //   arrows={false}
    // />
  )
}

export default CardStack
