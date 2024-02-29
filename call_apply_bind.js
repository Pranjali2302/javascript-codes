

let user={
  firstname:'Pranjali',
  lastname:'Salunkhe',
  getFullname:function(){
    console.log(this.firstname+" "+this.lastname)
  }
}
let user2={
  firstname:'moreshwar',
  lastname:'boramanikar',
}

user.getFullname()
user.getFullname.call(user2)

function getAddress(city,state){
  console.log(this.firstname + " from "+city+" , "+state)
}

getAddress.call(user,'pune','maharashtra')
getAddress.apply(user2,['mumbai','maharashtra'])
const newfunc = getAddress.bind(user,'pune','maharashtra')
newfunc();





