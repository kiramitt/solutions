/*Write a function to generate 'n' number of fibonacci series (0,1,1,2,3...) in reverse order . The output should be a string of fibonacci series in the reverse order upto the given number.
Example
reverseFibo(3)  // => '110'
reverseFibo(10) // => '3421138532110'*/

function reverseFibo(n){
  let fib = [0,1];
  let c;
  let str = "";
  for (let i = 1; i<n-1; i++){
    str += fib[i];
    fib[i+1] = fib[i]+fib[i-1];
  }
  return fib.reverse().join('');
}
