const validEnum = (gender) =>{
    const enumGender = ['hombre', 'mujer', 'no binario']
    if(enumGender.includes(gender)){
        return { check: true, gender}
    }else{
        return { check: false }
    }
}


module.exports = validEnum