function fillList() {
   var ul = document.querySelector('.lista ul')
   //console.log(ul)


var frases = ["Feliz Aniversário", 
                "Feliz Natal com muita paz", 
                "Um Feliz Natal para toda a família",
                "Fique em Paz!",
                "Nos vemos em breve!"
            ]


            for (let i = 0; i < frases.length; i++) {
                //variavel que possui o valor da string do array frases
                var liContent = frases[i]

                //cria o elemento li
                var li = document.createElement("li")

                //guarda a string em cada li criada
                li.textContent = liContent
                
                ul.appendChild(li)
            }
            
}



    


// chama a funcao quando o arquivo html for sempre carregado
fillList()