$(document).ready(
    function(){
        var produto = new Array();
        var legenda = new Array();
        var cont = 0;
        
        produto[0]= "img/galeria/1.jpg";  
        
        produto[1]= "img/galeria/2.jpg";
        
        produto[2]= "img/galeria/3.jpg";

        carregaDestaque(0);
        
        function carregaDestaque(idx){
            $("#imgGde").hide().attr("src",produto[idx]).fadeIn();
            var aux = produto[idx].split("/");
            var nomeProduto = aux[1].split(".");
        }
        
        $("#arrowleft").click(
            function() {
                cont = cont-1;
                if(cont==-1) {
                    cont = produto.length-1;
                }
                 carregaDestaque(cont);            
            }
        );
        
        $("#arrowright").click(
            function(){
                cont = cont+1;
                if(cont==produto.length) {
                    cont = 0;
                }
                 carregaDestaque(cont);            
            }
        );
    }
)
