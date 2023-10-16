function Click() {
var element = document.getElementById('output');
var value = element.innerHTML;

++value;

console.log(value)
document.getElementById('output').innerHTML = value;
}