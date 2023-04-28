import { io } from 'socket.io-client'

const socket = () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transport: ['websocket'],
        secure: true,
        rejectUnauthorized: false,
    }
    return io(
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3004'
            : 'https://solarity-backend.herokuapp.com',
        options
    )
}
export default socket
