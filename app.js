let amigos = [];

// Utilizar const cuando la variable no cambia ej; nombres
const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Hacer las funciones globales porque se usan con onclick en el HTML
window.agregarAmigo = function agregarAmigo() {
  const nombre = (input.value || '').trim();

  if (!nombre) {
    alert('Por favor, escribe un nombre válido.');
    return;
  }

  // Validación: Solo letras
  if (/\d/.test(nombre)) {
    alert('El nombre no puede contener números.');
    return;
  }

  amigos.push(nombre);
  input.value = '';
  renderLista();
  limpiarResultado();
};

window.sortearAmigo = function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay nombres en la lista.');
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];

  resultado.innerHTML = `
    <li>🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉</li>
    <button class="button-reset" onclick="reiniciarJuego()">♻️ Reiniciar</button>
  `;
};

window.reiniciarJuego = function reiniciarJuego() {
  amigos = [];
  lista.innerHTML = '';
  resultado.innerHTML = '';
  input.value = '';
};

function renderLista() {
  if (amigos.length === 0) {
    lista.innerHTML = '';
    return;
  }
  lista.innerHTML = amigos.map(n => `<li>${n}</li>`).join('');
}

function limpiarResultado() {
  resultado.innerHTML = '';
}

