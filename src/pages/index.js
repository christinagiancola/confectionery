import React from "react"
import { Helmet } from "react-helmet"
import "normalize.css"
import "../styling/main.css"
import App from "../components/App"

export default function Home() {
  const arrowClickedStack = []
  return (
    <>
      <Helmet>
        <script src="//code.jquery.com/jquery-3.1.1.slim.min.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.js"></script>
        <script src="https://unpkg.com/jquery/dist/jquery.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.jquery.js"></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/css/swiper.min.css"
        />
      </Helmet>
      <main className="body" id="body">
        <App arrowClickedStack={arrowClickedStack} />
      </main>
    </>
  )
}
