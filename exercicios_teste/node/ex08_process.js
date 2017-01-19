// console.log(process.argv);

function temParam(param) {
    return process.argv.indexOf(param) !== -1;
}

if (temParam('--producao')) {
    console.log('Ja passou esse parametro');
}
else {
    console.log('Ta tranquilo, ta favoravel');
}