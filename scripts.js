// Función para agregar elementos al body
function agregarName() {
    // Crear un nuevo párrafo
    var nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Nombre de la banda: Los integrantes de la banda solían ir a una finca en las afueras de Bogotá llamada "La Morat", lugar donde la banda hizo sus primeros ensayos. La finca pertenecía a un familiar del exintegrante Alejandro Posada Carrasco, Antonio de Morat. Antes de adoptar el nombre Morat, eran conocidos como "Malta". Pero, tiempo después, al ir a firmar con Universal Music, una banda brasileña ya estaba registrada como Malta, así que cambiaron su nombre al actual.';

    // Obtener el body
    var body = document.body;

    // Agregar los elementos al body
    body.appendChild(nuevoParrafo);
  }
  function agregarNames(){
    // Crear una nueva lista
    var nuevaLista = document.createElement('ul');
    var nuevoElementoLista1 = document.createElement('li');
    nuevoElementoLista1.textContent = 'Juan Pablo Isaza Piñeros';
    var nuevoElementoLista2 = document.createElement('li');
    nuevoElementoLista2.textContent = 'Juan Pablo Villamil Cortés';
    var nuevoElementoLista3 = document.createElement('li');
    nuevoElementoLista3.textContent = 'Simón Vargas Morales.';
    var nuevoElementoLista4 = document.createElement('li');
    nuevoElementoLista4.textContent = 'Martín Vargas Morales.';

        // Agregar elementos a la nueva lista
        nuevaLista.appendChild(nuevoElementoLista1);
        nuevaLista.appendChild(nuevoElementoLista2);
        nuevaLista.appendChild(nuevoElementoLista3);
        nuevaLista.appendChild(nuevoElementoLista4);
        var body = document.body;
        body.appendChild(nuevaLista);
  }
  function agregarLogo(){

        // Crear una nueva imagen
        var nuevaImagen = document.createElement('img');
        nuevaImagen.src = 'img/logo.jpg';
        nuevaImagen.alt = 'Nueva imagen';
        var body = document.body;
        body.appendChild(nuevaImagen);

  }

  // Asociar la función agregarElementos a un evento, por ejemplo, hacer clic en el párrafo
  document.getElementById('names').addEventListener('click', agregarNames);
  document.getElementById('logo').addEventListener('click', agregarLogo);
  document.getElementById('nameB').addEventListener('click', agregarName);