import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomStepper from './Stepper';
import Stepper2 from './Stepper2';

function App() {
  return (
   <>

      <CustomStepper />
      <Stepper2 />
      <ToastContainer />
   </>
  );
}

export default App;
