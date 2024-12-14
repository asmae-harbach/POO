class Produit{
    constructor(id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity
    }

    totalPrice(){
        var totalProduct = this.quantity * this.price;
        return totalProduct
    }
    plusQuantity(qa){
        var q = Number(qa)
        return q += 1
        
    }
    moinQuantity(qa){
        if(qa>0){
            var q = Number(qa)
            return q -= 1
        }else{
            return 0
        } 
    }
    total(tqua, tp){
        var t = 0;
        for(let i =0; i<tqua.length; i++){
            t += Number(tqua[i].innerHTML) * Number(tp[i].innerHTML)
        }
        return t 
    }
    changeColor(couleur){
        if(couleur == "red"){
            return "black"
        }else{
            return "red"
        }
    }
    suppression(){
        this.quantity = 0
        return this.quantity
    }
}

var nomProduit = document.getElementsByClassName('card-title');
var prixProduit = document.getElementsByClassName('unit-price');
var quantityProduit = document.getElementsByClassName('quantity');
var prixTotal = document.getElementById('total');
var plus = document.getElementsByClassName('fa-plus-circle');
var moin = document.getElementsByClassName('fa-minus-circle');
var coeur = document.getElementsByClassName('fa-heart');
var suppression = document.getElementsByClassName('fa-trash-alt');





var products = [];
for(let i=0; i<nomProduit.length; i++){
    var product = new Produit(i, nomProduit[i].innerHTML, prixProduit[i].innerHTML, quantityProduit[i].innerHTML);
    products.push(product);
    plus[i].addEventListener('click', function(){
        quantityProduit[i].innerHTML = products[i].plusQuantity(quantityProduit[i].innerHTML);
        prixTotal.innerHTML = products[i].total(prixProduit, quantityProduit)  
    })
    moin[i].addEventListener('click', function(){
        quantityProduit[i].innerHTML = products[i].moinQuantity(quantityProduit[i].innerHTML);
        prixTotal.innerHTML = products[i].total(prixProduit, quantityProduit)  
    })
    coeur[i].addEventListener('click', function(){
        coeur[i].style.color = products[i].changeColor(coeur[i].style.color);
    })
    suppression[i].addEventListener('click', function(){
        quantityProduit[i].innerHTML =  products[i].suppression();
        prixTotal.innerHTML = products[i].total(prixProduit, quantityProduit)  
    })
}
