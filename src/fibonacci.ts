function calculateFibonacci(n: number): [BigInt, number] {
  const init = performance.now();
  let current = BigInt(0);
  let next = BigInt(1);
  let result = BigInt(0);
  for (let i = 1; i < n; i++) {
    result = current + next;
    current = next;
    next = result;
  }
  const end = performance.now();
  return [result, end - init];
}

export function fibonacci(n: number, executions: number): [BigInt, number] {
    let results:Array<[BigInt, number]> = [];
    let result: BigInt = BigInt(0);
    let executionTime: number;
    for(let executionCount = 0; executionCount < executions; executionCount++){
      results.push(calculateFibonacci(n));
    }
    results.sort((a, b) => {
      return a[1] <= b[1] ? 1 : -1;
    });

    //ignore fastest and slowest
    results = results.slice(1, results.length - 1);

    // median
    executionTime = results.map(v => v[1]).reduce((p, c, _i, _a) => {return p + c});
    executionTime = parseInt(`${executionTime / results.length}`);//for get only "integer" part

    result = results[0][0];

    return [result, executionTime];
}