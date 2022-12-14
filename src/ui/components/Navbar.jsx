import { Link, NavLink,useNavigate } from 'react-router-dom';

export const Navbar = () => {
    
    const navigate = useNavigate()
  const handleLogin=()=>{
        navigate('/login',{
            // aqui es a donnde dispara la pantalla
          replace:true
        //   limpia el local storage
          // remplace sirve para que ya no tenga historia en el login ya no pueda logiarse
        })
    }
    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink to="/marvel" className={({isActive})=>`nav-item nav-link ${isActive ? 'active':''}` }  >
                        Marvel
                    </NavLink>

                    <NavLink 
                       className={({isActive})=>`nav-item nav-link ${isActive ? 'active':''}` }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                       className={({isActive})=>`nav-item nav-link ${isActive ? 'active':''}` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        Diego Iza
                    </span>
                    <button className='nav-item nav-link btn ' onClick={handleLogin}>
                        Logoaut
                    </button>
                </ul>
            </div>
        </nav>
    )
}

