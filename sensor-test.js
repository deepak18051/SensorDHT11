//Funcion que permite la toma de datos del sensor DHT11
setInterval(function() {
   //Requerimos las librerias para funcionamiento del sensor
   var sensor = require('/usr/lib/node_modules/node-dht-sensor');
   //Utilizamos la funcion read de la librería del sensor pasandole como parametro 11 por el tipo de sensor "DHT11", y 23
   //que es el valor del GPIO023 el pin 16 de la raspberry
   sensor.read(11, 23, function(err, temperature, humidity) {
       if (!err) {
	//Si no hay errores en lectura de libreria y ejecución de la función del sensor entonces imprime la temperatura "temp"
	//ambiente y el valor de la humedad "humidity"
          console.log('temp: ', temperature.toFixed(1) + '°C,' + 'humidity: ', humidity.toFixed(1) + '%');
       }
   });
}, 2000);
// Finalmente ejecutamos la función automáticamente tomando los valores del sensor cada 2 segundos