import { useEffect, useState } from "react"

const myList = [
    {id: 1, nome:"Fruta"},
    {id: 2, nome:"Legume"},
    {id: 3, nome:"Carne"},
    {id: 4, nome:"Laticínios"},
    {id: 5, nome:"Laticínios Test"}
]

export default function MyList(){

    const [produtos, setProdutos] = useState(myList)
    const [pesquisa, setPesquisa] = useState('')

    useEffect(
        () => {
            if(pesquisa)
            {
                const newList = myList.filter((p) => { 
                    return p.nome.toLowerCase().includes(pesquisa.toLocaleLowerCase())
                })

                setProdutos(newList);
            }
            else
            {
                setProdutos(myList);
            }    
        }, [pesquisa])

    
    return (
        <div>
           <h1>Efeitos Colaterais</h1>
           <br></br>
           <input type="text" placeholder="pesquise aqui" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
           {produtos.map((item) =>{
                    return(
                        <div>
                        <h4 key={item.id}>
                            {item.nome}
                        </h4>
                    </div>
                    )
                })}
        </div>
    )
}