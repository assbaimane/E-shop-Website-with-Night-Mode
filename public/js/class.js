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
        itemToAdd.classList.add("col-25","mx-auto","mb-4")
        itemToAdd.innerHTML= `
            <div class="mb-4">
                <img src=${this.src} class="img-fluid" alt="clothes pic">
            </div>
            <div class="text-center">
                <h4>${this.name}</h4>
                <p>${this.price}</p>
            </div>`
        productGrid.appendChild(itemToAdd)
    }
  }

export {Clothes}