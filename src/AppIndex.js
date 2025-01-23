import React from 'react'
import { SocketProvider } from './context/SocketContext'
import App from './App'

export const AppIndex = () => {
    return (
        <SocketProvider>
            <App />
        </SocketProvider>
    )
}
