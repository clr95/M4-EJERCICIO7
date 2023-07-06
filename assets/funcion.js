function reemplazarPalabras() {
    const palabrasReemplazar = [
      { palabra: 'sed', numero: 'UNO', contador: 0, cantidadOriginal: 6 },
      { palabra: 'vehicula', numero: 'DOS', contador: 0, cantidadOriginal: 3 },
      { palabra: 'vivamus', numero: 'TRES', contador: 0, cantidadOriginal: 2 },
      { palabra: 'nam', numero: 'CUATRO', contador: 0, cantidadOriginal: 2 },
      { palabra: 'eros', numero: 'CINCO', contador: 0, cantidadOriginal: 1 },
      { palabra: 'vestibulum', numero: 'SEIS', contador: 0, cantidadOriginal: 1 },
      { palabra: 'quam', numero: 'SIETE', contador: 0, cantidadOriginal: 1 },
      { palabra: 'sollicitudin', numero: 'OCHO', contador: 0, cantidadOriginal: 1 },
      { palabra: 'finibus', numero: 'NUEVE', contador: 0, cantidadOriginal: 1 },
      { palabra: 'dictum', numero: 'DIEZ', contador: 0, cantidadOriginal: 1 },
      { palabra: 'morbi', numero: 'ONCE', contador: 0, cantidadOriginal: 2 }
    ];
  
    const colores = {
      sed: 'color: #FF5500',
      vehicula: 'color: #FF99B2',
      vivamus: 'color: #FF99F5',
      nam: 'color: #FF99FF',
      eros: 'color: #99C5FE',
      vestibulum: 'color: #00CEFF',
      quam: 'color: #01FFFE',
      sollicitudin: 'color: #00FF9F',
      finibus: 'color: #B6FF01',
      dictum: 'color: #FFFF00',
      morbi: 'color: #FFB600'
    };
  
    const textoRelleno = document.getElementById('texto');
    let contenido = textoRelleno.innerHTML;
  
    palabrasReemplazar.forEach(({ palabra, numero, contador, cantidadOriginal }) => {
      const regex = new RegExp(palabra, 'gi');
      const reemplazo = `<b>${numero}</b>`;
      contenido = contenido.replaceAll(regex, (match) => {
        contador++;
        return reemplazo;
      });
  
      palabra ||= (contador == cantidadOriginal);
  
      console.log(`%c${palabra}: ${contador}`, colores[palabra]);
    });
  
    textoRelleno.innerHTML = contenido;
  }
  
  reemplazarPalabras();
  