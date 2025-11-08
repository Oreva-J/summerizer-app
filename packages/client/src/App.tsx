import { Button } from "./components/ui/button"


const App = () => {
  return (
    <div className="flex flex-col items-center justify-center border h-screen">
      <h1 className="text-red-500">Hello</h1>

      <Button variant={'outline'}>Click me</Button>
    </div>
  )
}

export default App
