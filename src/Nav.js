
import {Link} from 'react-router-dom'
import './App.css'
function Nav(){
    const navstyle={
        color:"white",
        textDecoration:"none"
    }
    return (
        <div className="nav">
             <h3>LOGO</h3>
             <ul className="nav-links">
                 <Link style={navstyle} to="/Reactproject/Home"><li><h3>home</h3></li></Link>
                 <Link style={navstyle} to="/Reactproject/Chart"><li><h3>Chart</h3></li></Link>
             </ul>
        </div>
    )
}
export default Nav