const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filterStreamers = () =>{


const filter = streamers.filter((streamer, index)=>{
    if (streamer.name.includes("iu")){
        return streamer.name
    }
})
console.log(filter)

const input = document.querySelector(".filter")

input.addEventListener("keyup", e =>{
    
})




}


// const filterStreamers = () =>{
//     const input = document.getElementsByClassName("filter").value
//     console.log(input)
//     const streamersFilter = streamers.name.filter((name, index)=>{
//         if (name.includes(input)){
//             return name
//         }
//     })
//     console.log(name)
// }

// filterStreamers(streamers)

