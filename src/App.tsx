import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { BaseLayout } from './components/layout'
import RouteConfiguration from './routes' // Import RouteConfiguration for routes

function App() {
  return (
    <Router>
      <BaseLayout>
        {' '}
        {/* Your layout component, which includes header/footer */}
        <RouteConfiguration /> {/* Use RouteConfiguration to manage routes dynamically */}
      </BaseLayout>
    </Router>
  )
}

export default App
