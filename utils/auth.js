import Cookies from 'js-cookie'

export const setToken = (token) => {
    if (process.browser) {
        Cookies.set('jwt', token)
    }
}

export const getTokenFromCookie = (req) => {
    if (!req.headers.cookie) return
    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
    if (!jwtCookie) return
    const jwt = jwtCookie.split('=')[1]
    return jwt
}

export const signOut = () => {
    Cookies.remove('jwt')
}
