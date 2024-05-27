import './App.css';
import Header from './components/home/header';
import Footer from './components/home/footer';




function App() {
  return (
    <div className="App" style={{ backgroundColor: '#ebbba4' }}>
      <Header />
        <header className="App-header">
            <h1 className="text-3xl font-bold underline text-black p-4" style={{fontFamily: 'Playfair Display'}}>
                Hello world!
            </h1>
            <button
                className="cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212] text-black">
                Click me!
            </button>
        </header>
        <Footer/>
    </div>
  );
}

export default App;
