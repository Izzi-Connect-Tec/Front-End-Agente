export function calcularEdad(fechaNac) {
    // Convertir la fecha de nacimiento en un objeto Date
    let fechaNacimiento = new Date(fechaNac);
    
    // Obtener la fecha actual
    let hoy = new Date();
    
    // Calcular la diferencia en años
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    
    // Verificar si el cumpleaños ya ha pasado este año
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    
    return edad;
}