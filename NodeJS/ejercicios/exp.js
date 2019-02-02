let list = Array(10).fill(10).map(n=>Math.random()*n)

console.log(list)

let [head1,head2, ...tail] = list

console.log(head1)
console.log(head2)
console.log(tail)
