import { default as MESSAGES } from './messages'
import patterns, { default as PATTERNS } from './patterns'
export default {
  USERNAME_VALIDATION: {
    required: MESSAGES.USERNAME_EMPTY,
    pattern: {
      value: PATTERNS.USERNAME_PATTERN,
      message: MESSAGES.USERNAME_INVALID
    }
  },
  PASSWORD_VALIDATION: {
    required: MESSAGES.PASSWORD_EMPTY,
    pattern: {
      value: PATTERNS.PASSWORD_PATTERN,
      message: MESSAGES.PASSWORD_FORMAT_INVALID
    }
  },
  CONFIRM_PASSWORD_VALIDATION: {
    validate: (value, { password }) => value === password || MESSAGES.PASSWORDS_NOT_MATCH
  },
  EMAIL_VALIDATION: {
    pattern: {
      value: PATTERNS.EMAIL_PATTERN,
      message: MESSAGES.EMAIL_INVALID
    }
  },
  FULL_NAME_VALIDATION: {
    required: MESSAGES.FULL_NAME_EMPTY,
    patterns: {
      value: PATTERNS.FULL_NAME_PATTERN,
      message: MESSAGES.FULL_NAME_INVALID
    }
  }
}
