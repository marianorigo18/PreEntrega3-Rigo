getData();
async function getData(){
const response = await fetch('http://127.0.0.1:5501/data/data.json');
const data = await response.json();
console.log(data);
}
