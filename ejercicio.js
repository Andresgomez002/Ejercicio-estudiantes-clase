class alumno {
    constructor(namevar, materiasvar, promedio){
        this.name = namevar;
        this.materias = materiasvar,
        this.notas = [];
        this.promedio = promedio;
        this.materiasguardadas = [];
    }

    pedirNombre(){
        let ingresoN = prompt("Ingrese su nombre");
        this.name = ingresoN;
    }
   
    obtenerNotas(){
        let ingresaMateria = prompt("Ingresa la materia ");
        this.notas = [];
        this.materias = ingresaMateria;
        for(let i = 0; i < 3; i++ ){
            let ingresoNotas = Number(prompt("Digita la nota"));
            this.notas.push(ingresoNotas);
            
        }
        let infoMateria = {
            nombre: this.materias,
            notas: this.notas,
            promedio: this.promedio
            
          };

          return infoMateria;
      
    }
    promedioNotas(){
        let suma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            suma = suma + this.notas[i];
        }
        suma = suma/this.notas.length;
        this.promedio = suma;
        if(suma > 0 && suma < 3.5){
            console.log(`${this.name} reprobaste ${this.materias} con ${suma}`);
        }else if(suma >= 3.5 && suma <= 5){
            console.log(`${this.name} abrobaste ${this.materias} con ${suma}`);
        }
    }
     repetir(){
         this.materiasGuardadas = [];
        for(let i = 0; i < 3; i++){
            let materia = this.obtenerNotas();
            this.materiasguardadas.push(materia);
            this.promedioNotas(materia);
        }
        
     }


}

let listaAlumnos = [];
let nobejets = Number(prompt("Ingresa el numero de alumnos que deseas crear: "));

for(let i = 0; i < nobejets; i++){
const objalumno = new alumno ();
objalumno.pedirNombre();
objalumno.repetir();
 listaAlumnos.push({
    name: objalumno.name,
    materiasguardadas: objalumno.materiasguardadas
 })

}
console.log(listaAlumnos);
