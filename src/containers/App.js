import "../styles/App.scss";
import FormContainer from "../containers/FormContainer";
import CommentsContainer from "../containers/CommentsContainer";

function App() {
    return (
        <div className='App'>
            <FormContainer />
            <CommentsContainer />
        </div>
    );
}

export default App;
