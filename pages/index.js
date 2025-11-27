"use client"
import {filmes} from "../data/filmes.js"
import CardFilme from '../components/CardFilme';


function Home () {
   const estiloListaCards = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        listStyle: 'none'
   }

   const urlVamosChamar=
   ('https://api.themoviedb.org/3/movie/popular?ar?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY')

return <>

<h1> Filmes </h1>

    <ul style={estiloListaCards}>
    { 
    filmes.map((filme)=>{
        return(     
     <CardFilme  key={`card-filme-${filme.id} `}filme={filme}/>
        );
    })}
    
</ul>

</>

}

export default Home;