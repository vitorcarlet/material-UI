import {Profile, Sidebar} from './components';

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
    return (
        <div>
            <Sidebar/>
            <Profile/>
        </div>
    )
}