import {Link} from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {

    return (

        <div className='dashboard-container'>
            <h1>Dashboard page</h1>
            <Link className='btn-event' to='/dailyevent'>daily event</Link>
        </div>

    )
}
export default Dashboard