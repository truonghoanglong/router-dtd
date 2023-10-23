import { useLocation } from 'react-router-dom'

export default function Dashboard() {
    const location = useLocation()

    return (
        <div>
            <h1 className='mb-6 text-lg'>Dashboard</h1>
            <p>{location.state}</p>
        </div>
    )
}
