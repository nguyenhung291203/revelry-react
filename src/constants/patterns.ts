export default {
  USERNAME_PATTERN: new RegExp('^[a-zA-Z][a-zA-Z0-9_]{4,19}$'),
  PASSWORD_PATTERN: new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}$'),
  EMAIL_PATTERN: new RegExp('^[\\w-.]+@[\\w-]+\\.[a-zA-Z]{2,}$'),
  FULL_NAME_PATTERN: new RegExp('^[^\\s][a-zA-Z\\s]+[^\\s]$')
}
