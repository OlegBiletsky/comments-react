import '../styles/App.scss';
import Form from '../components/Form'
import Comments from '../components/Comments';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
        <Comments/>
      </header>
    </div>
  );
}

export default App;
