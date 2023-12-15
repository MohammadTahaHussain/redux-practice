import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
        </Routes>
    )
}

export default AppRouter