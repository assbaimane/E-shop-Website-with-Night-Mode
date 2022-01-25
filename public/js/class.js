class Clothes{
    constructor(name,oldprice,price,src,srchover) {
      this.name = name;
      this.oldprice = oldprice;
      this.price = price;
      this.src = src;
      this.srchover = srchover;
    }

    addItem(){
        let itemToAdd = document.createElement("div")
        itemToAdd.classList.add("col-25","mx-auto","mb-4","p-1")
        itemToAdd.innerHTML= `
            <div class="mb-4">
                <img src=${this.src} class="img-fluid clothesPic" alt="clothes pic">
                <div class="row box" hidden>
                    <button class="col-6"><i class="far fa-heart heart"></i></button>
                    <button class="col-6"><i class="fas fa-cart-plus"></i></button>
                </div>
            </div>
            <div class="text-center">
                <h4>${this.name}</h4>
                <p><del>${this.oldprice}</del> ${this.price}</p>
            </div>`
        productGrid.appendChild(itemToAdd)
    }
}

export {Clothes}