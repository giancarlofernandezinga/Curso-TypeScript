document.addEventListener(
  "DOMContentLoaded",
  function () {
    // String clasisco
    let nombre = "Giancarlo";
    let apellidos = "Fernandez";
    let profesion = "Desarrolaldor";
    let nya = nombre + " " + apellidos + "\n " + profesion;
    console.log(nya);
    // Template Strings
    let plantilla = `
            ${nombre} ${apellidos}
            ${profesion}    
        `;

    function ficha(nombre, apellidos, profesion) {
      let fichaTecnica = `
    <div class="ficha">
        <h2>${nombre} ${apellidos}</h2>
        <h3>${profesion}</h3>
        <p>Forma parte del equipo de GiancarloFernandezWeb.es</p>
    </div>
`;
      return fichaTecnica;
    }

    let cajaFichas = document.createElement("section");

    cajaFichas.innerHTML = ficha("Marli", "Palacios", "Chef");
    cajaFichas.innerHTML += ficha("Paola", "Sanoni", "Relaciones Publicas");
    cajaFichas.innerHTML += ficha("Gian", "Paco", "Designer");

    // Cuando sale este error: Uncaught TypeError: Cannot read property 'appendChild' of null
    // es por que nuestro innerHTML en nuestro script esta cargado en el head, y aun no esta cargado el body
    // cuando este escript el body aun no existe, pero si lla llamada al scrpt se hace al final de body,
    // ahi si reconocería al script de innerHTML sobre el body.

    // document.body.appendChild(cajaFichas);
    document.querySelector("#contenedor").appendChild(cajaFichas);
  },
  false
);

// otra manera es agregar defer\
//<script src="scripts/02-strings.js defer"></script>
