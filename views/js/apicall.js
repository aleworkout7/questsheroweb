$(document).ready(() => {

    call = () => {
        $.ajax({
            url: 'https://questshero.herokuapp.com/quest',
            data: '',
            success: listar,
            dataType: ''
        });
    }
    
    listar = (data) => {

        if (data.length > 0) {
            $('#headerQuests').html('Estas são as quests disponíveis');
            
            data.forEach(row => {
           
                var btn = document.createElement("button");
                btn.className = 'btn btn-success btn-lg btn-block';
                btn.type = 'button';
    
                var btnRow1 = document.createElement('div');
                btnRow1.className = 'row';
    
                var divQuest = document.createElement('div');
                divQuest.className = 'tarefa col-md-6';
    
                var pNameQuest = document.createElement('p');
                pNameQuest.innerText = row.name;
    
                divQuest.appendChild(pNameQuest);
    
                var divStars = document.createElement('div');
                divStars.className = 'stars col-md-6';
    
                for (let index = 0; index < row.point; index++) {
                    var star = document.createElement('i');
                    star.className = 'fa fa-star';
                    divStars.appendChild(star)
                }
    
                btnRow1.appendChild(divQuest);
    
                btnRow1.appendChild(divStars);
    
                btn.appendChild(btnRow1);
    
                $('#questList').append(btn);
                
            });

        } else {
            $('#headerQuests').html('Ainda não há nehuma quest cadastrada');
            $('#aviso').html('');
        }

    }

    call()

})