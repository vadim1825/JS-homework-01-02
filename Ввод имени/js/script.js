//Записывает в массив names 5 введенных пользователем имен
var names = [];

for (var i = 0; i < 5; i++) {
    names[i] = prompt('Введите любое имя');
}

//Записывает имя пользователя в переменную name

var name = prompt('Введите Ваше имя');
var value = 'Ошибка!'

//Проверяет наличие имени пользователя в массиве

for (var i = 0; i < names.length; i++) {
    if (names[i] === name) {
        value = name + ' вы успешно вошли!';
    }    
}

alert(value);