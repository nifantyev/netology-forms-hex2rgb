import './App.css';
import HexToRGBForm from './components/HexToRGBForm';

function App() {
  const handleValidColor = (color) => {
    console.log(color);
  };

  const handleError = () => {
    console.log('Error');
  };

  return <HexToRGBForm onValidColor={handleValidColor} onError={handleError} />;
}

export default App;
