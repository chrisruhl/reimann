import {Link,} from 'react-router-dom'


function Index(){
    return (<div>
        <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/mdpane">Master/Detail Pane</Link></li>
        </ul>
        </div>)
}

export default Index