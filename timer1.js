
const args = process.argv.slice(2);

if(args.length < 1){
  console.log('Please provide a number')
  process.exit();
}

for(const temp of args){
  if(isNaN(temp) || temp < 0){
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, (temp)*1000)
}

