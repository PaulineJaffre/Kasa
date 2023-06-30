import './notFound.scss'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='error'>
            <span>404</span>
            <h1>Oups! La page que vous demandez n`existe pas.</h1>
            <Link to="/">Retourner sur la page d`accueil</Link>
        </div>
    )
}
 
export default NotFound