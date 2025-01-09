import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { LoginResponse } from '@/types'
import { login } from '@/redux/slices/authSlice'
import { useCallback } from 'react'
const useAuth = () => {
  const dispatch = useDispatch()

  const { account, isAuthenticated } = useSelector((state: RootState) => state.auth)

  const handleLogin = useCallback(
    (response: LoginResponse) => {
      dispatch(login({ response }))
    },
    [dispatch]
  )

  return {
    account,
    isAuthenticated,
    handleLogin
  }
}
export default useAuth
