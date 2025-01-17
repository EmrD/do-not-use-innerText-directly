function App() {

  const handleClick = () => console.log(document.getElementById('testDiv').innerText) // You may fetching some service with .innerText and anyone can edit for one-time

  return (
    <>
      <div id="testDiv">
        Edit this with DevTools
      </div>
      <button onClick={handleClick}>
        Print the content of the div
      </button>
    </>
  )
}

export default App
