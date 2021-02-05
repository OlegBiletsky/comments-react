import '../styles/App.scss';
import FormContainer from '../containers/FormContainer'
import CommentsContainer from '../containers/CommentsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormContainer/>
        <CommentsContainer/>
      </header>
    </div>
  );
}

export default App;
