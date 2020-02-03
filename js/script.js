// link api
// https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0

// esempio chiamata api per marzo
// {
//     "success": true,
//     "response": [
//         {
//             "name": "Venerdì Santo",
//             "date": "2018-03-30"
//         }
//     ]
// }

$(document).ready(
  function() {
    var dataIniziale = moment("2018-01-01", "YYYY-MM-DD");
    var giorni = dataIniziale.daysInMonth();
    // console.log(giorni);
    for (var i = 1; i <= 31; i++) {
      // handlebars
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var aDay = {
        day: i,
        month: 'Gennaio',
      };
      var html = template(aDay);
      $('.calendar-wrapper .month').append(html);
      // chiamata api
      $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/holidays',
        'method': 'GET',
        'data': {
          "year": "2018",
          "month": "0"
        },
        'success': function(risposta) {
          if (true) {

          }

        },
        'error': function(request, state, errors) {

        },
      });
      // fine chiamata api
    }



  }
);
