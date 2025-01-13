let bagItems=[];
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [] ;
    displayItemOnHomePage();
    displayBagIcon();
}
function AddToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));

    displayBagIcon();
    console.log('clicked');
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-items');
    if(bagItems.length > 0){
        bagItemCountElement.innerText = bagItems.length;
        bagItemCountElement.style.visibility = 'visible';
    }else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}
function displayItemOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHtml='';
    items.forEach(item => {
        innerHtml += ` <div class="item-container">
                    <img class='item-image' src="${item.image}" alt="">
                    <div class="rating">
                        ${item.rating.stars}⭐ | ${item.rating.count}
                    </div>
                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="price">
                        <span class="current-price">Rs${item.current_price}</span>
                        <span class="original-price">Rs${item.original_price}</span>
                        <span class="discount">-${item.discount_percentage}%</span>
                    </div>
                    <span>
                        <button class="btn-add-to-bag" onClick='AddToBag(${item.id})'>Add to Bag</button>
                        <button class="wishlist">♡</button>
                    </span>
                </div>`
    });
    itemsContainerElement.innerHTML= innerHtml;
           
}
