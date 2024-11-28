import './App.css'
import { Home, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Heart, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'

function App() {
  return (
    <div className='h-screen flex flex-col overflow-scroll'>
      <div className='flex flex-1'>
        {/*aside*/}
        <aside className='w-60 lg:w-68 bg-zinc-950 p-6'>
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
          {/*botões superiores*/}
          <div className="flex items-center gap-4">
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold mt-8 text-3xl'>Good Afternoon</h1>
          {/*albuns area*/}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer group">
              <img  className='h-28 w-24 object-cover' src="/chase-atlantic.jpg" alt="Imagem do álbum" />
              <strong>Álbum</strong>
              <button className='w-10 h-10 flex items-center justify-center rounded-full text-black bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer group">
              <img  className='h-28 w-24 object-cover' src="/chase-atlantic.jpg" alt="Imagem do álbum" />
              <strong>Álbum</strong>
              <button className='w-10 h-10 flex items-center justify-center rounded-full text-black bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer group">
              <img  className='h-28 w-24 object-cover' src="/chase-atlantic.jpg" alt="Imagem do álbum" />
              <strong>Álbum</strong>
              <button className='w-10 h-10 flex items-center justify-center rounded-full text-black bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer group">
              <img  className='h-28 w-24 object-cover' src="/chase-atlantic.jpg" alt="Imagem do álbum" />
              <strong>Álbum</strong>
              <button className='w-10 h-10 flex items-center justify-center rounded-full text-black bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer group">
              <img  className='h-28 w-24 object-cover' src="/chase-atlantic.jpg" alt="Imagem do álbum" />
              <strong>Álbum</strong>
              <button className='w-10 h-10 flex items-center justify-center rounded-full text-black bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 cursor-pointer group">
              <img  className='h-28 w-24 object-cover' src="/chase-atlantic.jpg" alt="Imagem do álbum" />
              <strong>Álbum</strong>
              <button className='w-10 h-10 flex items-center justify-center rounded-full text-black bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          <h2 className='font-semibold text-2xl mt-8'>Made for Allan Felipe</h2>
          {/*playlists area*/}
          <div className="grid grid-cols-6 gap-4 mt-4">
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 cursor-pointer flex flex-col gap-2'>
              <img src="./chase-atlantic.jpg" className='w-full' width={120} height={120} alt="Chase Atlantic Album" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Chase Atlatic, The Wekend and more</span>
            </a>
          </div>
        </main>
      </div>
      {/*footer*/}
      <footer className='fixed w-full bottom-0 bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img src="./chase-atlantic.jpg" alt="Album Chase Atlatic" className='w-16 h-16' />
          <div className='flex flex-col'>
            <strong className='font-normal'>Swim</strong>
            <span className='text-xs text-zinc-400'>Chase Atlantic</span>
          </div>
          <Heart />
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className="flex items-center gap-6">
            <Shuffle size={20} className='text-zinc-200 cursor-pointer' />
            <SkipBack size={20} className='text-zinc-200 cursor-pointer' />
            <button className='w-10 h-10 flex items-center justify-center rounded-full text-black bg-white text-black'>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-200 cursor-pointer' />
            <Repeat size={20} className='text-zinc-200 cursor-pointer' />
          </div>
          <div className="flex items-center gap-2">
            <span className='text-xs text-zinc-400'>1.43</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 h-1 w-56 rounded-full"></div>
            </div>
            <span className='text-xs text-zinc-400'>2.54</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-4'>
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 h-1 w-16 rounded-full"></div>
            </div>
          </div> 
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  )
}

export default App
