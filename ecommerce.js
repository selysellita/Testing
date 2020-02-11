class Produk{
    constructor(nama,harga,foto){
        this.nama=nama;
        this.harga=harga;
        this.foto=foto
    }
}
onclick
var produk=[
    new Produk('Chitato',15000,'https://cdn.elevenia.co.id/g/7/8/5/9/7/1/21785971_B.jpg'),
    new Produk('Lays',12000,'https://target.scene7.com/is/image/Target/GUEST_b1e770e2-02df-492d-9759-484ad16fb19f?wid=488&hei=488&fmt=pjpeg'),
    new Produk('French Fries 2000',10000,'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-2531336/siantar-top_siantar-top-french-fries-2000-snack--150-g--20-pcs-_full03.jpg')
]

const printdataproduk=()=>{
    var output=''
    produk.forEach((val,index)=>{
        output+=`<tr>
                    <td>${index+1}</td>
                    <td>${val.nama}</td>
                    <td>${val.harga}</td>
                    <td><img src= ${val.foto} style="width:100px;height:100px"></td>
                    <td><button onclick="addtocart(${index})" value="addtocart"> Add to Cart</td>
                </tr>`
    })
    document.getElementById("dataproduk").innerHTML=output
} 
printdataproduk()

class Cart{
    constructor(cartnama,cartharga,cartfoto){
        this.cartnama=cartnama,
        this.cartharga=cartharga,
        this.cartfoto=cartfoto
    }
}
var cart=[]

const addtocart=(index)=>{
    cart.push(new Cart(produk[index].nama,produk[index].harga,produk[index].foto))
    printcart()
}

const printcart=()=>{
    var totalbelanja=0
    var totalharga=0
    var output=''
    output+=`<thead>
                <th>No</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Foto</th>
                <th>Action</th>
            </thead>
            `
    cart.forEach((val,index)=>{
        output+=`<tr>
        <td>${index+1}</td>
        <td>${val.cartnama}</td>
        <td>${val.cartharga}</td>
        <td><img src= ${val.cartfoto} style="width:100px;height:100px"></td>
        <td><button onclick="deletefromcart()" value="deletefromcart${index}"> Delete From Cart</td>
        </tr>`
        totalbelanja++
        totalharga+=val.cartharga
    })
    if (totalbelanja){
        document.getElementById('isi').innerHTML=`<h2><img src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png' style="width:20px;height:20px"> &nbsp Keranjang kamu berisi ${totalbelanja} item dengan total harga Rp.${totalharga} </h2>`
        document.getElementById('datacart').innerHTML=output
        document.getElementById('checkout').innerHTML=`<button onclick="checkout()">Checkout</button>`
    }else{
        document.getElementById('isi').innerHTML=`<h2><img src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png' style="width:20px;height:20px">&nbsp Keranjang kamu masih kosong </h2>`
        document.getElementById('datacart').innerHTML=''
        document.getElementById('checkout').innerHTML=''     
    }
}
printcart()

const deletefromcart=(index)=>{
    cart.splice(index,1)
    printcart()
}

var timer
var time=10
const oncheckoutclick=()=>{
    document.getElementById('payment')=`<input type="number" placeholder="masukkan jumlah uang" id="uangmasuk"/> &nbsp; <button> Bayar</button>`
    timer=setInterval(()=>{
    document.getElementById('countdowntime')=`${time}detik`
    time--
    if(time==-2){
        cart=[]
        time=10
        clearInterval(timer)
        printcart()
    }

    })
    
}




const checkout=()=>{
    countdown()
    document.getElementById("countdown").innerHTML=`Waktu kamu tinggal ${detik} detik. Silakan lakukan pembayaran`

}

