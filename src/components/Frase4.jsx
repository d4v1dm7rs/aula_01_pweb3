import Frase5 from './Frase5'

function Frase4() {

    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEj2vZYGFxN3v1yKTTgmEnu7-Tn7Opu915cg&s"

    return(
        <div>
            <h2>Meu quarto componente!</h2>
            <img src= {url}/>
            <Frase5/>
        </div>
    )
}
export default Frase4