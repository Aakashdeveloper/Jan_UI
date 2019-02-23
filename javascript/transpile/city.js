/*export let specialty = '';

export function clean(){
}

export function Population(){
    console.log("city have 1000 people");
}

// export { specialty, Population}

Https://www.zoom.us/j/2208669018
*/

let specialty = '';

function clean(){
}

function Population(){
    console.log("city have 1000 people");
}

let police = function(){
    console.log("strong")
} 

export {specialty as citySpecial, Population as pop, clean as cle}
export default police;