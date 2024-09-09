/**********************************************************************logout****************************************************************************************/
let logoutLink=document.getElementById('logoutLink');
function logout()
{
    let loggin=JSON.parse(localStorage.removeItem("loggedin_user"))
    logoutLink.style.display='none'
}
/********************************************************************************************************************************************* */
window.onload=function()
{
    /********************************************************************show email******************************************************************************************/
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
    /********************************************************************cart counter******************************************************************************************/
    var cartCounter=document.getElementById('counter');
    let cartLength=JSON.parse(localStorage.getItem("cart")) || [];
    cartCounter.innerText=cartLength.length;
}

/**********************************************************get product from local storage************************************************************************ */
var productContainer=document.getElementById('product-container');
let product=JSON.parse(localStorage.getItem("productDetail"));
productContainer.innerHTML=`<div class="card mb-3 p-5">
                                <div class="row g-0 align-items-center">
                                    <div class="col-md-4">
                                        <img src=${product.img} class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h1 class="card-title">${product.productName}</h1>
                                            <p class="card-text"><span>Category:</span> ${product.catName}</p>
                                            <p class="card-text"><span>Salary:</span> <small class="text-body-secondary">$${product.price}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                              <h4 class="ps-5">About Product</h4>
                              <p class="ps-5">${product.description}</p>
                              <button onclick="addToCart(${product.id})" class="btn btn-success ms-5">add to cart <i class="fa-solid fa-cart-plus"></i></button>`
/********************************************************************add product to cart******************************************************************************************/
let products = JSON.parse(localStorage.getItem('allProducts')) || [];
var cartCounter=document.getElementById('counter');
function addToCart(productID)
{
    let loggedin=JSON.parse(localStorage.getItem("loggedin_user"))
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if(loggedin == null)
    {
        alert('You Have To Log in First');
    }
    else
    {
        if(cart.length==0)
            {
                products[n].orderedQuantity+=1;
                cart.push(products[n]);
                alert('product added successfully')
                cartCounter.innerText=``
                cartCounter.innerText=cart.length
            }
            else if(cart.length !=0)
            {
                let index = cart.findIndex(ele => ele.id == productID);
                if (index !== -1) {
                    cart[index].orderedQuantity += 1;
                    alert('product already in cart')
                } 
                else
                {
                    for(let n=0;n<products.length;n++)
                        {
                            if(products[n].id==productID)
                            {
                                products[n].orderedQuantity+=1;
                                cart.push(products[n]);
                                alert('product added successfully')
                                cartCounter.innerText=``
                                cartCounter.innerText=cart.length
                                console.log('two')
                            }
                        }
                }
            }
            localStorage.setItem('cart', JSON.stringify(cart));
    }

}
/******************************************************************************************************************************************************************** */
