import SongList from './components/SongList/SongList';
import Controls from './components/Controls/Controls'
import Lyrics from './components/Lyrics/Lyrics'
import './App.scss';

function App() {
  return (
    <main className="App">
      <div className="main-content">
        <SongList />
        <Lyrics />
      </div>
      <Controls />
    </main>
  );
}

export default App;
