import './App.css';
import ColorViewer from './components/ColorViewer';
import HexToRGBForm from './components/HexToRGBForm';

function App() {
  const handleValidColor = (color) => {
    console.log(color);
  };

  const handleError = () => {
    console.log('Error');
  };

  return (
    <>
      <HexToRGBForm onValidColor={handleValidColor} onError={handleError} />
      <ColorViewer color={'#334455'} />
    </>
  );
}

export default App;
