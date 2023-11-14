export const H1 = () =>{

// let x = 0

let date = new Date()

let x = date.getHours()

return (
<h1>{ x <= 12 && x >= 6 ? "Buenos días" : x <= 19 && x>= 13?  "Buenas tardes" : x<24 && x>=20 || x>= 0  && x<=5 ? "Buenas noches" : null}

</h1>

)


 
}