import './App.css'
import Navigation from './ui/navigation'
import { PageBackground } from './ui/pageBackground'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
      <PageBackground>
        <Navigation />
      </PageBackground>
  )
}

export default App
