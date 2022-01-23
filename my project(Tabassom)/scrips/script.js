let post = []


function getProducts() {
    letter()
    fetch ("../data/posts.json")
        .then ((response) => response.json())
        .then ((data) => {
            post = data;
            for  (let i = 0; i < data.length; i++) {
                  createList(data[i]) 
             }
       });
}



//---------------new--------------------------------------

function createList(data) {
    var oneItem = document.getElementById ("ProductList")
    oneItem.innerHTML += `<li class="liList"> 
            <a href="./post.html?id=${data.id}" class="aColor">
            <h2 class="animationText"> ${data.title} </h2>
            <img src = "${data.previewImage}" class="productImg animationImg" alt="${data.title}">
            </a> 
            <p class="aColor">
                ${data.shortSummery}
            </p>
            
        </li>`;
};



function showProductById() {
    var theProductId = JSON.parse(findId('id'));
    
    fetch ("../data/posts.json")
        .then ((response) => response.json())
        .then ((data) => {
            for  (let i = 0; i < data.length; i++) {
                if (data[i].id === theProductId) {
                    document.getElementById("productTitle").innerHTML= data[i].title
                    document.getElementById("productContent").innerHTML =data[i].content
                    document.getElementById("productPrice").innerHTML=data[i].price
                    document.getElementById("productImg").innerHTML=`<center><img src = "${data[i].previewImage}"  class="subImg"  alt="${data.title}"></center>`
                }
            }
        } 
        )
}
//-----------------------------------

function findId(productId) {
    var ourUrl = new URLSearchParams(window.location.search)
    return ourUrl.get(productId)
}

function letter() {
    letters = ['all','a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i < letters.length; i++) {
      document.getElementById("letterList").innerHTML += `<button class="theButton" onclick="clickButton('${letters[i]}')">${letters[i].toUpperCase()}</button>`
    }
}


function clickButton(TheLetter){
  document.getElementById("ProductList").innerHTML = '';
  var found = false;
  let firstLetter ;
  for (let i = 0; i < post.length; i++) {
      firstLetter = post[i].title.charAt(0).toLowerCase()
      if (firstLetter == TheLetter.toLowerCase() || TheLetter.toUpperCase() === 'ALL') {
          createList(post[i]);
          found = true
      } 
  }

  if (!found) {
    document.getElementById("ProductList").innerHTML = `<h1 class="whiteColor">Not found</h1>`;
  }

}