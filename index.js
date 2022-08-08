const receivesAFunction = cb => cb();

const returnsANamedFunction = () => {
  return function test() {console.log('test');}
}

const returnsAnAnonymousFunction = () => {
  return () => {console.log('test');}
}