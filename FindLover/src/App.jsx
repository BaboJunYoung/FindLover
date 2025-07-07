import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
        <div id="mainContainer">
            <button
              id="findLoverButton"
              onClick={
                () => alert("애인을 찾을 수 없습니다.")
              }
            >애인 찾기</button>

            <img src="/pairi2.webp" id="image"/>
        </div>
    </>
  )
}

export default App
