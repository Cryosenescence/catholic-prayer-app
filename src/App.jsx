import 'bamboo.css'
import './App.css'
import Header from './assets/components/Header'
import PrayerPage from './assets/pages/PrayerPage'

function App() {
 const page = "Angelus"

  return (
    <>
      <Header page={page} />
      <PrayerPage />
    </>
  )
}

export default App
