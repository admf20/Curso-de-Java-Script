//Encapsulamiento

class Usuario{
    constructor(nombre){this._name = nombre;}

    get name(){
        return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }

    set name(nombre){
        this._name = nombre;
    }
}

let user = new Usuario("Marcos");

user.nombre = "Andres";
console.log(user.nombre);  

//metodos estaticos y aprendiendo a mejor el metodo Factory

class Usuario{
  constructor(Permiso){this.permiso = Permiso;}

  static createAdmin(permiso){
    let user = new Usuario(permiso);
    return user;
  }
}

let administrador = Usuario.createAdmin("Andres Felipe Monsalve Franco");
console.log(administrador);

//Herencia de prototipos

function User(){
  User.prototype.saludar = function(){
    console.log("Bienvenidos");
  }
}

function Admin(){}

Admin.prototype = new User();

let Andres = new Admin();
Andres.saludar();

