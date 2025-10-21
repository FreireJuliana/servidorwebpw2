import {filmes} from "../data/filmes.js"
function CardFilme({filme}){
    const estiloImagem ={width: "300px"};
    return(
        <li>   

        <p> titulo: {filme.titulo }</p>
        <p>ano:{filme.ano}</p>
        <p>genero:{filme.genero}</p>
        <p>nota:{filme.nota}</p>

        <img style={estiloImagem} src ={filme.poster}/>
        </li>
    );
}




function Home () {
   

return <>
<h1>filmes </h1>

<ul>
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