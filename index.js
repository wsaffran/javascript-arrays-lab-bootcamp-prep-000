//define your array here
var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyAppendKitten(name) {
  kittens.unshift(name)
  return kittens
}
