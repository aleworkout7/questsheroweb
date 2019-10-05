$(document).ready(() => {

    $('#iptNomeQuest').val('')
    $('#selStar').val('')

    $('#enviar').on('click', () => {

        let dados = {
            name : $('#iptNomeQuest').val(),
            point : $('#selStar').val(),
            actived : true
        }

        $.post({
            url: 'https://questshero.herokuapp.com/quest',
            data: dados,
            success: sucesso,
            dataType: ''
        });
    })

    sucesso = (dado) => {
        console.log('dado')
        console.log(dado)
    }

})