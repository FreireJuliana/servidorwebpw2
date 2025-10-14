import {filmes} from "../data/filmes.js"
function Home () {
   
const estiloImagem ={width: "300px"};
return <>
<h1>filmes </h1>

<ul>
    { 
    filmes.map((filme)=>{
        return(
            <li key={`card-filme-${filme.id} `}>   

                <p>nome do filme:</p>

                <p> titulo: {filme.titulo }</p>
                <p>ano:{filme.ano}</p>
                <p>genero:{filme.genero}</p>
                <p>nota{filme.nota}</p>

                <img style={estiloImagem} src ={filme.poster}/>

            </li>
    
        );
    })}
    
</ul>


</>
}

export default Home;