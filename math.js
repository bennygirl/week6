const math = document.getElementsByTagName('li')

let x = 10
let y = 5
let a = 16
let b = 3

let z = x + y
math[0].innerHTML = `x + y =` + z

let c = a / y
math[1].innerHTML = `a / y =` + c

let d = a % y
math[2].innerHTML = `a % y=` + d

