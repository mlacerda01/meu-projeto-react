import { useState } from "react";
import styles from './styles.module.css';

export default function Contador(){
    
    const [contador, setContador] = useState(0)
    
    function aumentar(){
        setContador(contador+1)
        
    }

    function diminuir(){
        setContador(contador-1)
        
    }

    // {
    //     if(contador > 2){
    //         return (
    //             <div className="container">
    //                 <h2>Muito grande</h2> 
    //                 <button onClick={aumentar}>aumentar</button>  
    //                 <button onClick={diminuir}>diminuir</button>  
    //             </div> 
    //         )
    //     }
   
    // }
    return(
       <div className="container">
            <h1>Meu contador: {contador}</h1>
            <button className={styles.myButton} onClick={aumentar}>aumentar</button>           
       </div>
    )
}