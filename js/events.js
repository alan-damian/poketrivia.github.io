
const send = document.getElementById('send')
const reload = document.getElementById('reload')
const imgpokemon = document.getElementById('imgpokemon')
const resultText = document.getElementById('resultText')



function agregarEventos() {
  reload.addEventListener("click", restart);

  send.onclick = function() {
    const inputText = document.getElementById('inputText').value
    const pokemon = data[numero].name

    if(inputText === "") {
      alert("No has escrito nada")
    } else {
      cantidadEncuestados++
      sessionStorage.setItem('cantidadEncuestados', cantidadEncuestados);

      buscarPokemon()

      if (inputText.toLowerCase() === pokemon.toLowerCase()) {
        cantidadAcertados++

        

        sessionStorage.setItem('cantidadAcertados', cantidadAcertados);
        resultText.textContent = '¡Felicitaciones! Respuesta correcta'
        imgpokemon.classList.add('success')
      } else {
        resultText.textContent = 'Lo siento, esa no es la respuesta correcta'
        imgpokemon.classList.remove('success')
      }
    }

    const porcentajeAcertados = Math.round((cantidadAcertados / cantidadEncuestados) * 100)
    const leyendaPuntaje = document.getElementById('puntaje')

    leyendaPuntaje.textContent = `Puntaje: ${cantidadAcertados} de ${cantidadEncuestados}`
    leyendaPuntaje.classList.toggle('puntajeBajo', porcentajeAcertados < 50)
  }
}

agregarEventos()

