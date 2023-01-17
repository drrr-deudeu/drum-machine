import DrumMachine from "./pages/DrumMachine"
import "./sass/main.scss"
import { DataProvider } from "./utils/dataContext"

function App() {
  return (
    <DataProvider>
      <DrumMachine />
    </DataProvider>
  )
}

export default App
