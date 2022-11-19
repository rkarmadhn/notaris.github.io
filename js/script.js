// day 2 '30 Days of Javascript'
var p = '30 Days Of Javascript'
var p2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
var p3 = 'You cannot end a sentence with because because because is a conjunction'
var p4 = 'Python and Jargon'
var p5 = 'I hope this course is not full of jargon.'
var p6 = 'love is the best thing in this world. Some found their love and some are still looking for their love.'
var num = '9.8'
var numFloat = parseFloat(num)

const number = Math.floor(Math.random() * 100)
const number2 = Math.floor(Math.random(50) * 100)
const number3 = Math.floor(Math.random() * 255)
var sentence = 'I am a teacher, and I love teaching. there is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher this 30 Days of Javascript is also the result of love of teaching.'

// Exercises lvl 1
console.log(p)
console.log(p.length)
console.log(p.toUpperCase())
console.log(p.toLowerCase())
console.log(p.substring(0,2))
console.log(p.substring(3,21))
console.log(p.includes('script'))
console.log(p.split(''))
console.log(p.split(' '))
console.log(p2.split(''))
console.log(p2.split(','))
console.log(p.replace('Javascript','Python'))
console.log(p.charAt(15))
console.log(p.charCodeAt('J'))
console.log(p.indexOf('a'))
console.log(p.lastIndexOf('a'))
console.log(p3.indexOf('because'))
console.log(p3.lastIndexOf('because'))
console.log(p3.search('because'))
console.log(p.trim())
console.log(p.startsWith('30'))
console.log(p.endsWith('script'))
console.log(p.match('a'))
console.log(p.concat('30 Days Of','Javascript'))
console.log(p.repeat(2))

// exercises lvl 2
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\" quote by Mother Teresa')
console.log(typeof '10')
console.log(numFloat)
console.log(p4.search('on'))
console.log(p5.search('jargon'))
console.log(number)
console.log(number2)
console.log(number3)
console.log(number + ' JavaScript')
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125')
console.log(p3.substring(30,54))

// exercises lvl 3
console.log(p6.charCodeAt('love'))
console.log(p3.match('because'))
console.log(sentence)
console.log(5000+10000+15000)

// day 3 
var firstName = 'Rakha'
var lastName = 'Syahlan'
var country = 'Indonesia'
var city = 'Bekasi'
let age = 19;
var isMaried = 'Single'
let year = 2022
var numInt = parseInt('9.8')

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMaried)
console.log(typeof year)
console.log(typeof '10')
console.log(numInt)
console.log(3 > 2)
console.log(1 < 9)
console.log(2 == 2)
console.log(10 < 5)
console.log(2 == 9)
console.log(9 > 29)
console.log('')
console.log(4 > 3) // True
console.log(4 >= 3) // True
console.log(4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4') //true
console.log(4 === '4') // false
console.log('Python of jargon'.length)
console.log('')
console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true
console.log(!('Dragon and Python' === 'on'))
console.log('')

// const now = new Date()
// const tahun = now.getFullYear()
// const bulan = now.getMonth() + 1;
// const hariIni = now.getDay()
// const tanggal = now.getDate()
// const jam = now.getHours()
// const menit = now.getMinutes()
// console.log(tahun)
// console.log(bulan)
// console.log(tanggal)
// console.log(hariIni)
// console.log(jam)
// console.log(menit)
// console.log(bulan + ' ' + hariIni + ', ' + tahun + ' to now')
// console.log('')

// const b = parseInt(prompt('Enter Base : '))
// const h = parseInt(prompt('Enter height : '))
// const area = 0.5 * 20 * 10
// console.log(alert('The area of the triangle is ' + area))

// const a = parseInt(prompt('Enter side a : '))
// const b = parseInt(prompt('Enter side b : '))
// const c = parseInt(prompt('Enter side c : '))
// const perimeter = a + b + c
// console.log(alert(perimeter))

// const l = parseInt(prompt('Masukan length :'))
// const w = parseInt(prompt('Masukan width :'))
// const area = l * w
// const perimeter = 2 * (l + w);
// console.log(area)
// console.log(perimeter)

// const r = parseInt(prompt('Masukan R1 : '))
// const area = 3.14 * r * r
// const c = 2 * 3.14 * r
// console.log(alert(area + '\n' + c))

// const x1 = parseInt(prompt('Masukan kemiringan x1 : '))
// const x2 = parseInt(prompt('Masukan kemiringan x2 : '))
// const y1 = parseInt(prompt('Masukan kemiringan y1 : '))
// const y2 = parseInt(prompt('Masukan kemiringan y2 : '))
// const m = (y2-y1)/(x2-x1)
// console.log(alert('Kemiringannya adalah : ' + m))

// const hour = parseInt(prompt('Masukan Jam : '))
// const rate = parseInt(prompt('Masukan Rate per Jam : '))
// const hasil = hour * rate
// alert('Your weekly earning is ' + hasil)

// let nama = prompt('Masukan nama anda : ')
// const namaLength = parseInt(nama.length)
// namaLength < 7
  // ? console.log(nama + ` Nama anda Pendek`)
  // : console.log(nama + ` Nama anda Panjang`)

// let firstName1 = 'Rakha'
// let lastName1 = 'Ramadhan'
// const firstLength = parseInt(firstName1.length)
// const lastLength = parseInt(lastName1.length)
// firstLength < lastLength
    // ? console.log('Your first name, ' + firstName1 + ' is smaller than your family name,' + lastName1)
    // : console.log('Your first name, '+ firstName1 +' is longer than your family name, ' + lastName1)
     
// let myAge = 250
// let yourAge = 25
// const hasilAge = myAge - yourAge
// console.log('I am ' + hasilAge + ' years older than you')

// const birth = parseInt(prompt('Masukan Angka Kelahiran mu : '))
// const birthYear = 2022 - birth
// birthYear < 17 
//     ? alert('Umur kamu adalah ' + birthYear + '. Kamu terlalu muda!')
//     : alert('Umjur kamu adalah ' + birthYear + '. Kamu sudah diperbolehkan')

// const umurKamu = parseInt(prompt('Masukan umur kamu : '))
// const hasilKamu = umurKamu * 31536000
// alert('Your lived ' + hasilKamu + ' seconds.')


 const date = new Date()
 const tahun = date.getFullYear()
 const bulan = date.getMonth();
 const tanggal = date.getDay()
// const jam = date.getHours()
// const menit = date.getMinutes()
// console.log(tahun + '-' + bulan + '-' + tanggal + ' ' + jam + ':' + menit)
// console.log(tanggal + '-' + bulan + '-' + tahun + ' ' + jam + ':' + menit)
// console.log(tanggal + '/' + bulan + '/' + tahun + ' ' + jam + ':' + menit)
console.log(tanggal + '/' + bulan + '/' + tahun + ' 07 : 05')

console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
