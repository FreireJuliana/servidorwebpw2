import {filmes} from "../data/filmes.js"
function Home () {
    console.log(filmes)

 const primeiroFilme = filmes[0]
const estiloImagem ={width: "300px"};
return <>
<h1>filmes </h1>

<ul>
    
    <li>

 <p>nome do filme:</p>

 <p> titulo: {primeiroFilme.titulo }</p>
 <p>ano:{primeiroFilme.ano}</p>
 <p>genero:{primeiroFilme.genero}</p>
 <p>nota{primeiroFilme.nota}</p>

 <img style={estiloImagem} src ={primeiroFilme.poster}/>

    </li>
    
</ul>


</>
}

export default Home;