import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import router from './routes'

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

export default App
