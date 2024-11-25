import './App.css'
import { Home, Search, Library } from 'lucide-react'

function App() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-64 lg:w-72 bg-zinc-950 p-6'>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className='mt-7'>
            {/*space: cria o espaçamento entre elementos, como um gap, mas sem precisar ter display flex ou grid*/}
            <ul className='space-y-5'>
              <li>
                <a 
                href="#"
                className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
                  <Home /> Home
                </a>
              </li>
              <li>
                <a 
                href="#"
                className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
                  <Search /> Search
                </a>
              </li>
              <li>
                <a 
                href="#"
                className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
                  <Library /> Your Library
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mt-7 pt-7 border-t border-zinc-800">
            <ul className='flex flex-col gap-3'>
              <li><a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 3</a></li>
              <li><a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 2</a></li>
              <li><a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 4</a></li>
              <li><a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 5</a></li>
              <li><a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 1</a></li>
              <li><a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 6</a></li>
              <li><a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 7</a></li>
            </ul>
          </nav>
        </aside>
        <main className='flex-1 p-6'>
          main
        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>
        footer
      </footer>
    </div>
  )
}

export default App
