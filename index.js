const geringozo = function (str) {

    let splited = str.split("")
    let string = ''
    let qfound = false
    let gfound = false

    splited.forEach(el => {
        switch (el) {
            case 'g':
                return gfound = true
            case 'q':
                return qfound = true
            case 'a':
                return string += 'apa'
            case 'i':
                return string += 'ipi'
            case 'o':
                return string += 'opo'
            case 'e':
                return string += 'epe'
            case 'u':
                if (qfound) {
                    qfound = false
                    return string += 'qu'
                } else if (gfound) {
                    qfound = false
                    return string += 'gu'
                } else {
                    return string += 'upu'
                }
            default:
                return string += el
        }
    })

    console.log("Splited ", string)

    return string

}

module.exports = geringozo
