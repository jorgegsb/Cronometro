var cronometro;
contadorSegundos = 0;
contadorMinutos = 0;
contadorHoras = 0
    //creo una funcion pausa  para pausar el cronometro y poder reaunudarlo despues usando 
    //clearinterval
function pausa() {
    clearInterval(cronometro);
}
//en esta funcion escribo el valor, pausando antes el cronometro

//reauna el cronometro
function reanudar() {
    iniciar();
}
//resetea el cronometro estableciendo las variables a 0
function reset() {
    contadorSegundos = 0;
    contadorMinutos = 0;
    contadorHoras = 0;
    minutos.innerHTML = 0;
    segundos.innerHTML = 0;
    horas.innerHTML = 0;
    pausa();
}

//inicio el cronometro recojo los datos con getelemntby id del html
function iniciar() {
    segundos = document.getElementById("segundos");
    minutos = document.getElementById("minutos");
    horas = document.getElementById("horas");
    //establezco mi cronometro con setinterval al que le pasas una funcion 
    //y un numero que sera el intervalo en milisgundos
    cronometro = setInterval(

        function() {
            if (contadorSegundos == 60) {
                contadorSegundos = 0;
                contadorMinutos++;
                minutos.innerHTML = contadorMinutos;

                if (contadorMinutos == 60) {
                    contadorMinutos = 0;
                    contadorHoras++;
                    horas.innerHTML = contadorHoras;
                }

            }
            //con innerHTML sustiuyo los valores por cada ciclo de reloj
            segundos.innerHTML = contadorSegundos;
            contadorSegundos++;

        }, 1000);


}