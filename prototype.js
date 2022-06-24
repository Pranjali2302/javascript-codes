function Pet(name, type){
    this.name = name;
    this.type = type;
}
function view(){
    return this.name + ' - ' + this.type;
}

Pet.prototype.view = view;
var pet1 = new Pet('tomya','cat')
console.log(pet1.view())

function Dog(name){
    Pet.call(this,name,'Dog')
}
Dog.prototype = new Pet()
Dog.prototype.bark = function(){
    console.log('inside dog')
}

var pet2 = new Pet('Jerry','Cat')
console.log(pet2.view())
// console.log(pet2.bark())// error as bark() is only in Dog

var dog = new Dog('Tomu');
console.log(dog.view())