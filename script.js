const foods = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 400,
        get calcSum () {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.amount * this.kcall
        }


    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kcall: 500,
        get calcSum () {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name: "FRESH CAMBO",
        price: 31900,
        amount: 0,
        kcall: 600,
        get calcSum () {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.amount * this.kcall
        }
    }
}


// click

let elBtn = [...document.querySelectorAll('.main__product-btn')]; // array
console.log(elBtn)

for (let i = 0; i < elBtn.length; i++) {
    // console.log(elBtn[i])
    elBtn[i].addEventListener('click', function () {
       
        // console.log(this.closest(".main__product").getAttribute('id'))
        prepare(this)
    })
    
}

function prepare(itemBtn) {
    // console.log(item)  item = btn
    console.log(itemBtn)

    let parent = itemBtn.closest(".main__product")
    let parentId = parent.getAttribute('id') // 
    let num = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')

    let sym = itemBtn.getAttribute('data-symbol')
    console.log(sym)

    let count = foods[parentId].amount

    console.log(count)

    if(sym === "+" && count < 5){
        count++
    }else if(sym === "-" && count > 0 ){
        count--
    }

    foods[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = foods[parentId].calcSum
    kcall.innerHTML = foods[parentId].calcKcall
//    console.log(num)
}


// deleviry

let addCart = document.querySelector('.addCart')
let receipt = document.querySelector('.receipt')
let receiptWindow = document.querySelector('.receipt__window')
let receiptWindowOut = document.querySelector('.receipt__window-out')
let receiptWindowBtn = document.querySelector('.receipt__window-btn')

addCart.addEventListener('click',() => {
    receipt.style.display = "block"
   

    setTimeout(() => {
        receipt.style.opacity = 1
        receiptWindow.style.top = "15%"
    }, 300);


    let menu = "Sizning chekingiz: \n\n"
    let totalPrice = 0
    let totalKcall = 0

    for (const key in foods) {
    //    console.log(key)

        if(foods[key].amount) {
            // Gamburger 2x10000=20000
            menu += `${foods[key].name} ${foods[key].amount}x ${foods[key].price} = ${foods[key].calcSum} \n\n`
            totalPrice += foods[key].calcSum
            totalKcall += foods[key].calcKcall
        }
    }

    receiptWindowOut.innerHTML =` ${menu} \n Jami summa: ${totalPrice} so'm \n Jami kcall: ${totalKcall} kcall`


})

receiptWindowBtn.addEventListener('click',(event) => {
    // location = "https://getbootstrap.com/docs/5.1/components/modal/"
    // location.reload()
    // console.log(event.target)
    // console.log(event.currentTarget)

    if(event.target == event.currentTarget) {
        receipt.style.opacity = 0
        receiptWindow.style.top = "-100%"
        setTimeout(() => {
            receipt.style.display = "none"
            location.reload()
        }, 300);
    }


})


// SHOW IMAGE

let mainProductInfo = [...document.querySelectorAll(`.main__product-info`)]

let close = document.querySelector('.view__close span')

for (let i = 0; i < mainProductInfo.length; i++) {
    console.log(mainProductInfo[i])

    mainProductInfo[i].addEventListener('click',function () {
      
        showImage(this)
    })
    
}

function showImage(viewImage){
    let parent = viewImage.closest('.main__product')
    let proImage = parent.querySelector('.main__product img')
    let view = document.querySelector('.view')
    let image = document.querySelector('.view img')

   
    view.classList.add('active')

    let attr = proImage.getAttribute('src')

    if(proImage.hasAttribute('src')){
        image.setAttribute('src',attr)
    }

    close.addEventListener('click',function() {
        view.classList.remove('active')
    })

}

