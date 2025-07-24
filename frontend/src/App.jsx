import './App.css'
import MessageWindow from './components/MessageWindow'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <>
     {/* <h1 className='bg-red-400 rounded-2xl p-4'>ChatGPT</h1> */}
     <div className="flex h-screen bg-zinc-950 text-white">
      <div className='w-[25%] border-r border-zinc-800 p-4 overflow-y-au'> 
        <Sidebar/>
      </div>
      <div className='w-[75%] overflow-y-auto border-zinc-800 p-4 overflow-y-au'>
        <MessageWindow/>
      </div>
     </div>
     
    </>
  )
}

export default App
