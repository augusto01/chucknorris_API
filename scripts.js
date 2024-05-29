document.addEventListener('DOMContentLoaded',function(){

    

    let btn_update =  document.querySelector('.boton_update');
    let chiste_norris = document.querySelector('.chiste_chuck')


    btn_update.addEventListener('click', function() {
        getJSON('https://api.chucknorris.io/jokes/random', function(data) {
            // Mostrar el chiste recibido en el elemento chiste_norris
            chiste_norris.textContent = data.value;
            console.log(data);
        });
    });

   //funcion para comunicarme con la API 

   function getJSON (url, callback)
   {
        fetch(url)
        .then
        (response => {
            if (!response.ok){
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then (data => callback (data))
        .catch(error => console.error('Problema con la peticion fetch: ',error))


   }

})