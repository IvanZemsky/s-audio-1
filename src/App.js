import SongList from './components/SongList/SongList';
import Controls from './components/Controls/Controls'
import Lyrics from './components/Lyrics/Lyrics'
import './App.scss';

function App() {
  return (
    <main className="App">
      <SongList />
      <Controls />
      <Lyrics />
    </main>
  );
}

export default App;
