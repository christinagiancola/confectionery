import React, { useState, useEffect } from "react"
import reactDom from "react-dom"
import Screen from "../components/Screen"
import { useCards } from "../components/imgs/useCards"
import "normalize.css"
import "../styling/main.css"

import loadable from "@loadable/component"
import { useVideos } from "../components/imgs/useVideos"

const TruffleImageMap = loadable(() => import("../components/TruffleImageMap"))

export default function App({ arrowClickedStack }) {
  const [lightsOn, setLightsOn] = useState(true)
  const [currentClick, setCurrentClick] = useState([""])
  const cards = useCards()
  const videos = useVideos()
  const currentClickId = currentClick[0]

  const lightsOffAreas = [
    "btn1",
    "btn2",
    "btn3",
    "btn4",
    "btn5",
    "btn6",
    "btn7",
    "btn8",
    "btn9",
    "btn10",
    "btn11",
    "btn12",
    "btn13",
  ]
  const lightsOnAreas = ["infoBtn", "contactBtn", "bgAreaLeft", "bgAreaRight"]

  const toggleLights = () => {
    if (lightsOn && lightsOffAreas.includes(currentClickId)) {
      setLightsOn(false)
    }
    if (!lightsOn && lightsOnAreas.includes(currentClickId)) {
      setLightsOn(true)
    }
  }

  useEffect(() => {
    if (currentClickId) {
      toggleLights()
    }
  }, [currentClick])

  return (
    <div id="mapContainer">
      <TruffleImageMap
        id="truffleImageMap"
        lightsOn={lightsOn}
        setCurrentClick={setCurrentClick}
        arrowClickedStack={arrowClickedStack}
        cards={cards}
        videos={videos}
        currentClickId={currentClickId}
        arrowClickedStack={arrowClickedStack}
      />
    </div>
  )
}
