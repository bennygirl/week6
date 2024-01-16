const rhyme = document.querySelector('h1')
const nursery = rhyme.textContent

const lists = document.querySelectorAll('ol li')

//length of string
lists[0].textContent += nursery.length

//touppercase method
lists[1].innerHTML += `<strong>${nursery.toLocaleUpperCase()}</strong>`

//tolowercase method
lists[2].innerHTML += `<strong>${nursery.toLowerCase()}</strong>`

//first character
lists[3].innerHTML += `first character: ${nursery[0]}`

//last character
lists[4].innerHTML += `last character: ${nursery[nursery.length -1]}`

//indexof
lists[5].innerHTML = `The index of the letter "t" is ${nursery.indexOf('t')}`

//indexof
lists[6].innerHTML = `The index of the letter "t" is ${nursery.indexOf('t', 20)}`

//last indexof
lists[7].textContent = `The last index of letter \'a'\ ` + nursery.lastIndexOf ('a')

//Replace
lists[8].innerText = `replace "you" with "we":` + nursery.replace('you', 'we')

//Replace all
lists[9].innerText = `replace all "o" with "u":` + nursery.replaceAll('o', 'u')

//slice
const tw = nursery.slice(0,7)
lists[10].textContent = tw

const tws = nursery.slice(0, nursery.indexOf('u')+6)
lists[11].textContent = tws

//Repeat
lists[12].textContent = tw.repeat(7)

//charAt
lists[13].textContent = `character at index 20:` + nursery.charAt(20).toUpperCase()

//endswith
lists[14].textContent = `The rhyme end with high?` + nursery.endsWith('high')

//startwith
lists[15].textContent = `The rhyme start with k?` + nursery.startsWith('k')

//includes
lists[16].textContent = `The rhyme includes car` + nursery.includes('car')

lists[17].textContent = `The rhyme includes star.` + nursery.includes('star')



//split
lists[18].textContent = nursery.split('')

//concatenate
lists[19].textContent = `The nursery rhyme starts with` + nursery.concat(tw)



