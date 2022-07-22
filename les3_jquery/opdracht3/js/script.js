$(document).ready(function(){
    let table = $('table');
    table.prepend('<caption></caption>');
    $('caption').html('<p>' + ($('th').length + $('td').length) + '</p>');

    $('.toevoegen').on('click', function() {
        let naam = prompt('Wat is je naam?');
        let leeftijd = prompt('Wat is je leeftijd?');
        let woonplaats = prompt('Waar woon je?');

        if(!naam || !leeftijd || !woonplaats) {
            alert('Vul alsjeblieft wel deze vragen in!')
        } else {
            $('tbody').append('<tr></tr>');
            $('tr:last-of-type').append('<td>' + naam + '</td><td>' + leeftijd  + '</td><td>' + woonplaats + '</td>');
            $('caption').html('<p>' + ($('th').length + $('td').length) + '</p>');
        }
    })
});