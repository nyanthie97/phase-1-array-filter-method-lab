// Code your solution here
function findMatching(array, name) {
    let result = array.filter(item => item.toLowerCase() === name.toLowerCase())
    return result
}


function fuzzyMatch(array, name){
    let result = array.filter(item => item.slice(0, 1) === name.slice(0, 1));

    return result
}


const drivers = [
    {
      name: 'Gako',
      hometown: 'Canada' },
    {
      name: 'John',
      hometown: 'Dubai' } ,
    {
      name: 'James',
      hometown: 'Lavington' },
    {
      name: 'Sarah',
      hometown: 'Downnhome' },
    {
      name: 'Billaxon',
      hometown: 'London' }
  ];

function matchName(drivers, name){
    let result = drivers.filter(obj => obj.name === name);

    return result
}