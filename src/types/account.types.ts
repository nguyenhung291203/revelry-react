import { Role } from './role.types'

export interface AccountResponse {
  username: string
  password: string
  image: string
  email: string
  phoneNumber: string
  role: Role
}
