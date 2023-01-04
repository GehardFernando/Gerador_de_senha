
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperCaseEl = document.getElementById('uppercase');
const lowerCaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRamdomLower,
    upper: getRamdomUpper,
    number: getRamdomNumber,
    symbol: getRamdomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText
    if(!password) {return}

    textarea.value = password;
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Sua senha esta copiada')

})

generateEl.addEventListener('click', () => {
    const length =+ lengthEl.value
    const hasUpper = upperCaseEl.checked
    const hasLower = lowerCaseEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})


    function generatePassword(upper, lower, number, symbol, length){
        let generatedPassword = ''
        const typesCount = upper + lower + number + symbol
        const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])
        if (typesCount === 0) {
            return ''
        }

        for(let i = 0; i < length; i += typesCount){
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0]
                generatedPassword += randomFunc[funcName]()
                
            })
        }

        const finalPassword = generatedPassword.slice(0, length)
        return finalPassword
    }
    


function getRamdomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRamdomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRamdomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRamdomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    const symRamdom = Math.floor(Math.random() * symbols.length)
    return symbols[symRamdom]
}
console.log(getRamdomSymbol())