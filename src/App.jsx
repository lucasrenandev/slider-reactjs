import slideImg1 from "./assets/img1.jpg"
import slideImg2 from "./assets/img2.jpg"
import slideImg3 from "./assets/img3.jpg"
import slideImg4 from "./assets/img4.jpg"
import { useEffect, useState } from "react"
import './App.css'

export default function App() {
  let [currentSlide] = useState(0)
  
  const nextSlide = () => {
    const images = document.querySelectorAll(".slide-image")
    const maxSlide = images.length

    document.getElementById("slide" + (currentSlide + 1)).classList.remove("active")
    currentSlide = (maxSlide + currentSlide + 1) % maxSlide
    document.getElementById("slide" + (currentSlide + 1)).classList.add("active")
    slideIndicator(currentSlide + 1)
  }
  useEffect(() => {
    setInterval(nextSlide, 5000)
  }, [])

  const previousSlide = () => {
    const images = document.querySelectorAll(".slide-image")
    const maxSlide = images.length

    document.getElementById("slide" + (currentSlide + 1)).classList.remove("active")
    currentSlide = (maxSlide + currentSlide - 1) % maxSlide
    document.getElementById("slide" + (currentSlide + 1)).classList.add("active")
    slideIndicator(currentSlide + 1)
  }

  const slideIndicator = (index) => {
    const buttons = document.querySelectorAll(".buttons button")

    buttons.forEach((button) => {
      button.style.backgroundColor = "transparent"
    })
    document.querySelector('.buttons button:nth-child(' + index + ')').style.backgroundColor = "#fff"
  }

  const navegationButton = (index) => {
    const images = document.querySelectorAll(".slide-image")

    images.forEach((image) => {
      image.classList.remove("active")
    })
    document.getElementById("slide" + index).classList.add("active")
    slideIndicator(index)
    currentSlide = index - 1
  }

  useEffect(() => {
    const buttons = document.querySelectorAll(".buttons button")

    buttons.forEach((button) => {
      button.addEventListener("click", function(e) {
        const indexValue = e.target.classList.value

        if(indexValue === "btn1") {
          navegationButton(1)
        }
        if(indexValue === "btn2") {
          navegationButton(2)
        }
        if(indexValue === "btn3") {
          navegationButton(3)
        }
        if(indexValue === "btn4") {
          navegationButton(4)
        }
      })
    })
  }, [])
  
  return (
    <>
     <section>
      <figure className="image-box">
        <img src={slideImg1}
        className="slide-image active" 
        id="slide1" 
        alt="Image 1" />
        <img src={slideImg2}
        className="slide-image" 
        id="slide2" 
        alt="Image 2" />
        <img src={slideImg3}
        className="slide-image" 
        id="slide3" 
        alt="Image 3" />
        <img src={slideImg4}
        className="slide-image" 
        id="slide4" 
        alt="Image 4" />
      </figure>

      <div className="buttons">
        <button type="button" 
        className="btn1"></button>
        <button type="button" 
        className="btn2"></button>
        <button type="button" 
        className="btn3"></button>
        <button type="button" 
        className="btn4"></button>
      </div>

      <div onClick={previousSlide} className="left-arrow">
        <i className="bx bx-left-arrow"></i>
      </div>

      <div onClick={nextSlide} className="right-arrow">
        <i className="bx bx-right-arrow"></i>
      </div>
     </section>
    </>
  )
}