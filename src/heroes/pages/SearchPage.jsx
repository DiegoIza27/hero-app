
import { useForm } from "../hooks/useFrom"
import { HeroCard } from "../components/HeroCard";
import { useNavigate,useLocation } from "react-router-dom";
import queryString from 'query-string'
import { getHerosByName } from "../helpers/getHerosByName";
export const SearchPage = () => {
  const navigate= useNavigate();
  const location  = useLocation();// libreria para separar el valor de la consulta ?q=dato  y el query
  const {q=""}= queryString.parse(location.search)//aqui mando el valor de la consulta en la URL 
  const her=getHerosByName(q)
  const showSearch = (q.length===0);
  const showError=(q.length>0)&& her.length===0
  const {searchText,onInputChange}=useForm({
    searchText:q
  })
  const onSearchSubmit =(event)=>{
    event.preventDefault();// evita un full refresh
    // if (searchText.trim().length<=1) return // validamos para q no mande en blanco el usuario
    navigate(`?q=${searchText}`)// paremetros en el query en el url 
  }
  return (
    <>
    <h1>Search</h1>
    <hr></hr>
    <div className="row">
    <div className="col-5">
<h4> Searching </h4>
<hr></hr>
<form onSubmit={onSearchSubmit}>
  <input type="text" 
  placeholder="BuscarHero"
   className="form-control" 
   name="searchText" 
   autoComplete="off" 
   value={searchText}
   onChange={onInputChange} />
    <button className="btn btn-outline-primary mt-1">Search</button>
  </form>
  </div>
  <div className="col-7">
      <h4>Results </h4>
      <hr></hr>
      {
        /* (q==='')
        ?<div className="alert alert-primary "> Search a hero </div>
        :(her.length===0)
        &&<div className="alert alert-danger">No hero with <b>{q}</b></div> */

      }
      <div className="alert alert-primary animate__animated animate__fadeInLeft" style={{display:showSearch?'':'none'}}> Search a hero </div>
      <div className="alert alert-danger animate__animated animate__fadeInRight" style={{display:showError?'':'none'}}>No hero with <b>{q}</b></div> 
      
      {
        her.map(hero=>(
          <HeroCard key={hero.id} {...hero}/>
        ))
      }
      </div>
</div>
    </>
  )
}

