// script.js
function buscarCodigo() {
    const input = document.getElementById('searchInput').value;
    const resultDiv = document.getElementById('result');
    
    // Define los códigos asociados a cada fecha.
    const codigos = {
        '21/08/1998': '316',
        '07/09/2002': '147',
        '18/09/1997': '029',
        '03/01/1996': '318',
        '29/02/2004': '366',
        '19/03/2000': '003',
        '04/04/2002': '78',
        '06/06/2002': '126',
        // Agrega más fechas y códigos aquí.
    };

    // Si la fecha existe, muestra el código correspondiente
    if (codigos[input]) {
        // Cambia a la segunda pantalla
        document.getElementById('searchSection').style.display = 'none';
        document.getElementById('codeSection').style.display = 'block';

        // Muestra el código en grande
        document.getElementById('codigoDisplay').textContent = codigos[input];
    } else {
        resultDiv.textContent = 'Fecha no encontrada. Intenta con otra.';
    }
}
