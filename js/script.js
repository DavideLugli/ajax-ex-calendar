// link api
// https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0
$(document).ready(
  function() {
    var thisDate = moment("2018-01-01");
    $('#current-month').text(thisDate.format("MMMM YYYY"))
    // handlebars
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    for (var i = 1; i <= 31; i++) {
      var currentDay = {
        year: thisDate.year(),
        day: i,
        month: thisDate.month(),
      }
      var date = moment(currentDay);
      console.log(date);

      var aDay = {
        day: date.format('DD MMMM'),
        'actual-date': date.format('YYYY-MM-DD'),
      };
      var html = template(aDay);
      $('.calendar-wrapper .month-daylist').append(html);
    }
    // chiamata api
    $.ajax({
      'url': 'https://flynn.boolean.careers/exercises/api/holidays',
      'method': 'GET',
      'data': {
        year: "2018",
        month: "0"
      },
      'success': function(data, stato) {
        giorniFestivi(data.response);

      },
      'error': function(request, state, errors) {

      },
    });
    // fine chiamata api
    function giorniFestivi(holidays) {
      if (holidays.length >= 1) {
        for (var i = 0; i < holidays.length; i++) {
          var holiday = holidays[i];
          var holidayDay = $('.month-day[data-actual-date="' + holiday.date + '"]');
          holidayDay.addClass('holiday');
          holidayDay.text(holidayDay.text() + ' - ' + holiday.name);
        }
      }

    };

  }
);
