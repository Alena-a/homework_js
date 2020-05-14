// Подсчет количества плитки на пол 
var roomHeight = prompt("введите длину помещения в м"); //длина помещения в м
var roomWidth = prompt("введите ширину помещения в м"); //ширина помещения в м
var roomSquare = roomHeight*roomWidth; //площадь помещения в м2
var tileHeight = prompt("введите высоту плитки в м"); //высота плитки в м
var tileWidth = prompt("введите ширину плитки в м"); //ширина плитки в м


var tileSquare = tileHeight*tileWidth; //площадь плитки в м2
var result = roomSquare/tileSquare; // количество необходимой плитки в ед



alert(`Тебе нужно ${result} шт. плитки!`);