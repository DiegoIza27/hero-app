
import  {useNavigate} from 'react-router-dom'
export const LoginPage = () => {
  // funcion de usenavigate para moverse en pantalla
  const navigate = useNavigate()
  const handleLogin=()=>{
        navigate('/marvel',{
          replace:true
          // remplace sirve para que ya no tenga historia en el login ya no pueda logiarse
        })

  }
  return (
    <div className="container mt-5">
    <h1>Login</h1>
    <hr></hr>
    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  )
}

