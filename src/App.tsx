import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import router from './routes'
import { ToastContainer } from 'react-toastify'

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
  </Provider>
)

export default App
