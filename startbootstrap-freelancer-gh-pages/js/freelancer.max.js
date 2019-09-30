< script type = "text/javascript" >
    /*Iniciação e configuração da biblioteca de acessibilidade*/
    $(document).ready(function() {
        $('header').rafaelmln_acessibilidade({
            'color': '#cacdd0', //cor dos textos
            'background': 'rgba(0,0,0,0.1)', //cor de fundo da barra de acessibilidade
            'item_menuprincipal': true, //adicionar ou não item de acesso rápido ao menu [true|false]
            'elemento_menuprincipal': '#menu ul>li>a', //caso o item de acesso rápido ao menu seja requerido, indicar ...
            'item_busca': true, //adicionar ou não item de acesso rápido a busca do site [true|false]
            'item_conteudocentral': true, //adicionar ou não item de acesso rápido ao conteúdo principal do site [true|false]
            'item_altocontraste': true, //adicionar ou não item de alto contraste [true|false]
            'elemento_busca': '#busca',
            'elemento_conteudocentral': 'section',
            'estilo_altocontraste': './css/contraste.css',
        });
    }); <
/script>