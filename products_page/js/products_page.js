/******************************************************************header links color*****************************************************************************************/
// var colorLink=document.getElementsByClassName('')
var cartCounter=document.getElementById('counter');
/**********************************************************************logout****************************************************************************************/
let logoutLink=document.getElementById('logoutLink');
function logout()
{
    let loggin=JSON.parse(localStorage.removeItem("loggedin_user"))
    logoutLink.style.display='none'
}
/***********************************************************************creation of data*********************************************************************************/
let categories=[
    {id:1,title:'phones'},
    {id:2,title:'laptops'},
    {id:3,title:'watches'},
    {id:4,title:'clothes'},
    {id:5,title:'furniture'}
]
let products=[
    {id:1,productName:'Samsung Galaxy S22 Ultra',img:'https://plus.unsplash.com/premium_photo-1718569200065-b5324d695bf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbXN1bmclMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',price:100,catID:1,catName:'phones',availableQuantity:5,orderedQuantity:0,description:'SAMSUNG Galaxy A15 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Expandable Storage, Knox Security, Super Fast Charging, US Version, 2024, Blue Black'},
    {id:2,productName:'Samsung Galaxy S22',img:'https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',price:200,catID:1,catName:'phones',availableQuantity:10,orderedQuantity:0,description:'SAMSUNG Galaxy A35 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Rugged Design, US Version, 2024, Awesome Navy'},
    {id:3,productName:'iPhone 15 Pro Max',img:'../../product_images/phones/pexels-mateusz-dach-99805-1294886.jpg',price:300,catID:1,catName:'phones',availableQuantity:3,orderedQuantity:0,description:'Apple iPhone XS, US Version, 64GB, Gold - AT&T (Renewed)'},
    {id:4,productName:'iPhone 14 Pro',img:'../../product_images/phones/pexels-tracy-le-blanc-67789-607812.jpg',price:400,catID:1,catName:'phones',availableQuantity:7,orderedQuantity:0,description:'Plum iPhone 6s 16GB Silver Unlocked 4G LTE - ATT Tmobile Verizon'},
    {id:5,productName:'Google Pixel 7',img:'../../product_images/phones/pexels-zeleboba-11299391.jpg',price:500,catID:1,catName:'phones',availableQuantity:9,orderedQuantity:0,description:'SAMSUNG Galaxy A35 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Rugged Design, US Version, 2024, Awesome Navy'},

    {id:6,productName:'hp',img:'../../product_images/laptops/pexels-jakubzerdzicki-18538670.jpg',price:600,catID:2,catName:'laptops',availableQuantity:2,orderedQuantity:0,description:'HP Newest 14" Ultral Light Laptop for Students and Business, Intel Quad-Core N4120, 8GB RAM, 192GB Storage(64GB eMMC+128GB Micro SD), 1 Year Office 365, Webcam, HDMI, WiFi, USB-A&C, Win 11 S'},
    {id:7,productName:'dell',img:'../../product_images/laptops/pexels-jean-daniel-4006182.jpg',price:700,catID:2,catName:'laptops',availableQuantity:15,orderedQuantity:0,description:'Dell Inspiron 15 3000 3520 Business Laptop Computer[Windows 11 Pro], 15.6 FHD Touchscreen, 11th Gen Intel Quad-Core i5-1135G7, 16GB RAM, 1TB PCIe SSD, Numeric Keypad, Wi-Fi, Webcam, HDMI, Black'},
    {id:8,productName:'lenovo',img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVub3ZvJTIwbGFwdG9wfGVufDB8fDB8fHww',price:800,catID:2,catName:'laptops',availableQuantity:3,orderedQuantity:0,description:'Lenovo IdeaPad 1 Laptop, 15.6” FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD, Windows 11 Home, 720p Camera w/Privacy Shutter, Smart Noise Cancelling, Cloud Grey'},
    {id:9,productName:'acer',img:'../../product_images/laptops/pexels-pixabay-40185.jpg',price:900,catID:2,catName:'laptops',availableQuantity:8,orderedQuantity:0,description:'Acer Aspire 5 A515-56-347N Slim Laptop - 15.6" Full HD IPS Display - 11th Gen Intel i3-1115G4 Dual Core Processor - 8GB DDR4 - 128GB NVMe SSD - WiFi 6 - Amazon Alexa - Windows 11 Home in S Mode,Silver'},
    {id:10,productName:'samsung',img:'../../product_images/laptops/pexels-veeterzy-303383.jpg',price:600,catID:2,catName:'laptops',availableQuantity:15,orderedQuantity:0,description:'SAMSUNG 15.6" Galaxy Book3 Business Laptop Computer/Windows 11 PRO/16GB - 512GB/ 13th Gen Intel® Core™ i7 processor, 2023 Model, NP754XFG-KB1US, Silver'},

    {id:11,productName:'Omega',img:'https://images.unsplash.com/photo-1639006570490-79c0c53f1080?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',price:150,catID:3,catName:'watches',availableQuantity:20,orderedQuantity:0,description:'OUPINKE Men Watches Automatic Mechanical Tourbillon Diamond Luxury Dress Tungsten Steel Strap Luminous Waterproof Sapphire Crystal Calendar Best Gifts Watches for Men'},
    {id:12,productName:'Patek Philippe',img:'https://images.unsplash.com/photo-1526045431048-f857369baa09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',price:200,catID:3,catName:'watches',availableQuantity:5,orderedQuantity:0,description:'OUPINKE Men Automatic Watch Starry Sky Moon Phase Rose Gold Silver Stainless Steel Self-Winding Luxury Business Waterproof Wrist Watch'},
    {id:13,productName:'Cartier',img:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',price:100,catID:3,catName:'watches',availableQuantity:5,orderedQuantity:0,description:'OLEVS Watches for Men Gold Automatic Watches Mens Dragon Skeleton Mechanical Luxury Watch Business Dress with Tungsten Steel Luminous 160FT Waterproof Diamond Fashion Wrist Watch Gold'},
    {id:14,productName:'Rolex',img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',price:50,catID:3,catName:'watches',availableQuantity:4,orderedQuantity:0,description:'Mens Automatic Mechanical Watch, Design Reef Tonneau Luxury Skeleton Watches for Men,Stainless Steel 30 Meter Waterproof with Silicone Strap Wristwatch Accessories Gift for Men'},
    {id:15,productName:'IWC',img:'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',price:70,catID:3,catName:'watches',availableQuantity:30,orderedQuantity:0,description:'FEICE Mens Vintage Automatic Mechanical Watch | Skeleton Waterproof Watch | Silicone Strap | Sport Luminous Analog | Unique Business Wristwatch for Men | Green FM603'},

    {id:16,productName:'T-Shirt',img:'https://media.istockphoto.com/id/1187205847/photo/young-caucasian-man-wearing-casual-white-t-shirt-over-yellow-isolated-background-looking.webp?a=1&b=1&s=612x612&w=0&k=20&c=IUEq5Z16ZGG6REHZu851mPhPgzRwpzHtH0v2wah0eGE=',price:30,catID:4,catName:'clothes',availableQuantity:25,orderedQuantity:0,description:'Hanes Mens Pocket Undershirt Pack, Cotton Crew Neck T-Shirt, Moisture Wicking Tee, Assorted 6-Pack'},
    {id:17,productName:'Tie',img:'../../product_images/clothes/pexels-dom-j-7304-45055.jpg',price:100,catID:4,catName:'clothes',availableQuantity:50,orderedQuantity:0,description:'TIE G Clip on Tie for Uniform, Blade 3.25" (8.5 cm), Length 21.25" Reg and 24" E Long with Tie Clip set'},
    {id:18,productName:'T-shirt',img:'../../product_images/clothes/pexels-dom-j-7304-45982.jpg',price:120,catID:4,catName:'clothes',availableQuantity:14,orderedQuantity:0,description:'Fruit of the Loom Mens Eversoft Cotton T Shirts, Breathable & Moisture Wicking with Odor Control, Sizes S-4x'},
    {id:19,productName:'Shoes',img:'../../product_images/clothes/pexels-goumbik-292999.jpg',price:90,catID:4,catName:'clothes',availableQuantity:2,orderedQuantity:0,description:'Shoes for Crews Mens Freestyle II Non Slip Work Shoes - Work & Safety Footwear, Food Service Work Sneakers, Lace-Up Breathable Work Shoes for Men'},
    {id:20,productName:'Sport T-shirt',img:'https://m.media-amazon.com/images/I/51+TzewugCL._AC_UL480_FMwebp_QL65_.jpg',price:85,catID:4,catName:'clothes',availableQuantity:5,orderedQuantity:0,description:'TACVASEN Mens Sun Shirt UPF 50+ Long Sleeve UV Protection Lightweight Rash Guard Swim Shirt Quick Dry Fishing T-Shirt'},

    {id:21,productName:'sofa',img:'https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D',price:100,catID:5,catName:'furniture',availableQuantity:5,orderedQuantity:0,description:'TAOCOCO Recliner Couch Covers for 3 Seat, 8-Pieces Stretch Large Couch Covers for 3 Seats Reclining Slipcovers Soft Jacquard Pattern Furniture Protector, Chocolate'},
    {id:22,productName:'wooden chair',img:'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29kZW4lMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D',price:200,catID:5,catName:'furniture',availableQuantity:35,orderedQuantity:0,description:'Ergonomic Mesh Office Chair with 3D Adjustable Armrest,High Back Desk Computer Chair Ergo3d Ergonomic Office Chair with Wheels for Home & Office Black'},
    {id:23,productName:'bookcase',img:'https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tjYXNlfGVufDB8fDB8fHww',price:250,catID:5,catName:'furniture',availableQuantity:45,orderedQuantity:0,description:'YITAHOME 5-Tier Bookshelf, S-Shaped Z-Shelf Bookshelves and Bookcase, Industrial Freestanding Multifunctional Decorative Storage Shelving for Living Room Home Office, Retro Brown'},
    {id:24,productName:'Dining table',img:'https://images.unsplash.com/photo-1505409628601-edc9af17fda6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D',price:300,catID:5,catName:'furniture',availableQuantity:10,orderedQuantity:0,description:'Folding Dining Table with Storage Rack and 2 Drawers, Movable Kitchen Table Extendable Versatile Table Space Saving Foldable in 3 Forms (Grey)'},
    {id:25,productName:'arm chair',img:'../../product_images/furniture/pexels-steve-923192.jpg',price:400,catID:5,catName:'furniture',availableQuantity:17,orderedQuantity:0,description:'Karl home Accent Chair Wide Armrest Mid-Century Lounge Chair Linen Fabric Armchair with Lumbar Pillow & Solid Wood Frame for Living Room, Bedroom, Balcony, Green'},
]
// ****************************************************************categories********************************************************************************************/
var list=document.getElementById('category')                  
for(let x=0;x<categories.length;x++)
{
    list.innerHTML+=`<li class="nav-item"><a class="nav-link text-warning" onclick="selectProductsByCategory(${categories[x].id})">${categories[x].title}</a></li>`
}
/************************************************************************show all products************************************************************************************8 */
var categoryProducts=document.getElementById('category-products')         //space which contain cards
window.onload=function()
{
    showAllProducts();
    /******************************************************************show cart length*************************************************************************** */
    var cartCounter=document.getElementById('counter');
    let cartLength=JSON.parse(localStorage.getItem("cart")) || [];
    cartCounter.innerText=cartLength.length;
    /******************************************************************show email*************************************************************************** */
    var email=document.getElementById('user');
    let loggedin_user=JSON.parse(localStorage.getItem("loggedin_user"))
    if(loggedin_user != null)
    {
        email.innerText=loggedin_user.User_Email;
        logoutLink.style.display='inline-block'
    }
    else
    {
        logoutLink.style.display='none'
    }
    localStorage.setItem("allProducts",JSON.stringify(products))
}
function showAllProducts()
{
    categoryProducts.innerHTML=``
    for(let z=0;z<products.length;z++)
        {
            categoryProducts.innerHTML+=`
                                        <div class="col-sm-12 col-md-6 col-lg-3">
                                            <div class="card border-0">
                                                <img src=${products[z].img} class="card-img-top" alt="...">
                                                <div class="card-body text-center w-100">
                                                    <h5 class="card-title w-100">${products[z].productName}</h5>
                                                    <p class="card-text text-warning">${products[z].price}$</p>
                                                    <a href="../../product_details/html/product_details.html" onclick="viewDetails(${products[z].id})" class="btn btn-success">View</a>
                                                    <a href="#" onclick="addToCrt(${products[z].id})" class="btn btn-dark"><i class="fa-solid fa-basket-shopping" title="add to cart"></i></a>
                                                </div>
                                            </div>
                                        </div>`         
        }
}
/************************************************************************show products of selected category************************************************************************************8 */
let selectedCategory=[];
function selectProductsByCategory(categoryID)
{
    categoryProducts.innerHTML=``
    selectedCategory=[]
    for(let i=0;i<products.length;i++)
    {
        if(products[i].catID==categoryID)
        {
            selectedCategory.push(products[i]);
        }
    }
    console.log(selectedCategory)
    for(let y=0;y<selectedCategory.length;y++)
        {
            categoryProducts.innerHTML+= `
                                        <div class="col-sm-12 col-md-6 col-lg-3">
                                            <div class="card border-0">
                                                <img src=${selectedCategory[y].img} class="card-img-top" alt="...">
                                                <div class="card-body text-center">
                                                    <h5 class="card-title w-100">${selectedCategory[y].productName}</h5>
                                                    <p class="card-text">${selectedCategory[y].price}$</p>
                                                <a href="../../product_details/html/product_details.html" class="btn btn-success" onclick="viewDetails(${selectedCategory[y].id})">view</a>
                                               <a onclick="addToCrt(${selectedCategory[y].id})" class="btn btn-dark"><i class="fa-solid fa-basket-shopping" title="add to cart"></i></a>
                                                </div>
                                            </div>
                                        </div>`
        }
}
/************************************************************************view product details************************************************************************************************* */
let selectedProductDetails={};
function viewDetails(productID)
{
   for(let n=0;n<products.length;n++)
    {
        if(productID==products[n].id)
        {
            selectedProductDetails=products[n];
        }
    }
    localStorage.setItem("productDetail",JSON.stringify(selectedProductDetails));
    console.log(JSON.parse(localStorage.getItem("productDetail")));
}
/************************************************************************Add product to cart************************************************************************************************* */
function addToCrt(productID)
{   
    let loggedin=JSON.parse(localStorage.getItem("loggedin_user"))
    if(loggedin==null)
    {
        alert('You Have To Log in First');
    }
    else
    {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingProductIndex = cart.findIndex(ele => ele.id == productID);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].orderedQuantity += 1;
            alert('product already in cart')
        } else {
            for(let n=0;n<products.length;n++)
            {
                if(products[n].id==productID)
                {
                    products[n].orderedQuantity+=1;
                    cart.push(products[n]);
                    alert('product added successfully')
                    cartCounter.innerText=``
                    cartCounter.innerText=cart.length
                }
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }   
}
/***********************************************************************to top*********************************************************************************/
var topArrow=document.getElementById('topArrow');
// window.onscroll=function(){
//     checkScroll();
// }
function toTop()
{
    window.scrollTo(top)
}
// function checkScroll()
// {
//     if (document.documentElement.scrollTop > 20) {
//         topArrow.style.display = "block";
//       } else {
//         topArrow.style.display = "none";
//       }
// }
