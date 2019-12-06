var dias = 'Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo';
var lugar = 'Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti';
alert(dias.split(','));
alert(lugar.split('.'));
var Dias = dias.split(',');
var Lugar = lugar.split('.');
var conciertos = [[Dias[0],Lugar[0]], [Dias[1],Lugar[1]], [Dias[2],Lugar[2]], [Dias[3],Lugar[3]], [Dias[4],Lugar[4]], [Dias[5],Lugar[5]], [Dias[6],Lugar[6]]];
alert(conciertos);