import React, { useState, useEffect } from "react"

const CardStack = ({ cards, showCards, currentClickId }) => {
  const imageUrls = cards.map(card => card.file.url)
  // const infoCard = cards[0]
  // const contactCard = cards.length - 1

  const cardImgArray = imageUrls.map((img, idx) => (
    <div>
      <img className="card" src={img} alt={idx} key={idx} />
    </div>
  ))

  console.log("imageUrls:", imageUrls)
  console.log("cardImgArray:", cardImgArray)

  return <div></div>
}

export default CardStack
