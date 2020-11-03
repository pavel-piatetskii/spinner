const spinner = ['|','/','-','\\'];
const funAni = function(ani, cycles, speed) {
  let cycle = 0;
  while (cycle <= cycles) {
    for (let i in ani) {
      setTimeout(() => process.stdout.write(`\r${ani[i]}`)
      , (cycle * ani.length + Number(i)) * speed); // delay
    }
    cycle++;
  }
};

funAni(spinner, 10, 50);
