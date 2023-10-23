import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import { NotFound } from 'pages/NotFound/NotFound'
import Staff from 'pages/Staff'
import { Routes, Route, useSearchParams } from 'react-router-dom'

function App() {
    const [searchParams] = useSearchParams()
    // console.log(Object.fromEntries([...searchParams]))

    return (
        <div className='App'>
            <MainLayout>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/staff/*' element={<Staff />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </MainLayout>
        </div>
    )
}

export default App
