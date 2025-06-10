// Установка даты, до которой ведётся отсчёт:  
var countDownDate = new Date("Jul 3, 2025 17:00:00").getTime();

// Обновить обратный отсчет каждую секунду:  
var x = setInterval(function() {  
    // Получить сегодняшнюю дату и время:  
    var now = new Date().getTime();  
    // Найти расстояние между текущим моментом и датой обратного отсчёта:  
    var distance = countDownDate - now;  
    // Расчёты времени для дней, часов, минут и секунд:  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));  
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);  
    // Отобразить результат в элементе:  
    document.getElementById("1").innerHTML = days + " дн" ;
    document.getElementById("2").innerHTML = hours + " ч" ;
    document.getElementById("3").innerHTML = minutes + " мин" ;
    document.getElementById("4").innerHTML = seconds + " сек" ;
    // Если отсчет завершен, вывести сообщение:  
    if (distance < 0) {  
        clearInterval(x);  
        document.getElementById("1").innerHTML ="Мероприятие состоялось!" ;
        document.getElementById("2").innerHTML = "" ;
        document.getElementById("3").innerHTML ="";
        document.getElementById("4").innerHTML ="" ;
    }  
}, 1000);  