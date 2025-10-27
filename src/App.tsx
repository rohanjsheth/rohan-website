import Body from './components/homebody.tsx'
import Header from './components/header.tsx'
import Footer from './components/footer.tsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-[20vh] flex-col items-center justify-center">
        <Header />
      </div>
      <div className="flex flex-1 items-center justify-center p-4 -mt-[20vh]">
        <Body />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
