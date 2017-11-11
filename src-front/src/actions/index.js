export const connectUser = (user) => ({
    type: 'CONNECT',
    user
  })

export const logout = () => ({
    type: 'LOGOUT'
  })