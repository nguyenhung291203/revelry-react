import { Navigate, Route, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { Role } from '@/types'
import { tokenUtil } from '@/utils/tokenUtil'

type PrivateRouteProps = RouteProps & {
  component: React.ElementType
  allowedRoles: Role[]
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, allowedRoles, ...rest }) => {
  const userRole: Role = useSelector((state: RootState) => state.auth.account.role)
  const accessToken = tokenUtil.getAccessToken()

  if (!accessToken) {
    return <Navigate to='/login' />
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to='/unauthorized' />
  }

  return <Route {...rest} element={<Component />} />
}

export default PrivateRoute
