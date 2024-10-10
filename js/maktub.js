async function variaveisAmbiente(){
    try{
        var arquivoTexto = await fetch('settings.txt');
        var textoArquivo = await arquivoTexto.text();
        var chaveValor = textoArquivo.split('=');
        var telefone = chaveValor[1];
        localStorage.setItem('wpp', telefone);
    }
    catch(error){

    }
}

        function clicounobotao() {
            var nome = document.getElementById("primeironome");
            var segundonome = document.getElementById("segundonome");

            localStorage.setItem("nomes", nome.value);
            localStorage.setItem("segundosnomes", segundonome.value);

            nome.value = "";
            segundonome.value = "";
            $('#modal').on ('shown.bs.modal', function () {
                $('#myInput').trigger('focus')
            })
        }


        function botaoprodutos(tema, descricao) {
            var nome = localStorage.getItem("nomes");
            var segundonome = localStorage.getItem("segundosnomes");

            var mensagem = `Olá! meu nome é ${nome} ${segundonome} gostaria de falar com a Maktub Consultoria, sobre o tema ${tema} e a descricao ${descricao}`;
            var telefone = localStorage.getItem('wpp');
            window.open(`https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`, '_blank');
        }
  
    // var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 100000
// })

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});

variaveisAmbiente();