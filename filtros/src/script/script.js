const tabelaFiltros = document.getElementById("body-table");

const btnPesquisa = document.getElementById('btnPesquisa')
const inputPesquisa = document.getElementById('pesquisa')


inputPesquisa.onkeyup = () => {
    
    var nome = inputPesquisa.value.toLowerCase()
    
    for(var i = 0; i < tabelaFiltros.rows.length; i++){
        
        var item = tabelaFiltros.rows[i].cells[0].innerText;
        var corresponde = item.toLowerCase().indexOf(nome) >= 0;

        tabelaFiltros.rows[i].style.display = corresponde ? '' : 'none';
    }
       
}

btnPesquisa.onclick = () => {
    
    var keyword = inputPesquisa.value.toLowerCase()

    var newList = buscaFabricante(keyword)

}

function buscaFabricante(keyword){

    for(var i = 0; i < tabelaFiltros.rows.length; i++){
        
        var item = tabelaFiltros.rows[i].cells[0].innerText;
        var corresponde = item.toLowerCase().indexOf(keyword) >= 0;

        tabelaFiltros.rows[i].style.display = corresponde ? '' : 'none';
    }


}

document.getElementById('btnLimpar').onclick = () => {
    
    inputPesquisa.value = ''
    buscaFabricante(inputPesquisa.value)

}





listaFiltros();

async function listaFiltros(){
    let filtros = await import('./filtros.js');
    
    const result = filtros.default.forEach( value => {
        for(var item in value){
            
            var fab = value[item]
            for(var mod in fab){
                   
                let lista = document.createElement('tr')
                let fabricantes = document.createElement('td')
                let modelo = document.createElement('td')
                let carga = document.createElement('td')

                fabricantes.textContent = item;
                modelo.textContent = fab[mod].modelo;
                carga.textContent = fab[mod].carga;
                

                lista.appendChild(fabricantes)
                lista.appendChild(modelo)
                lista.appendChild(carga)

                tabelaFiltros.appendChild(lista)
             }


        }

    })


    return
}



