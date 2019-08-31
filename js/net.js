const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');
// select tab content items
function selectItem(e){
    removeBorder()
    removeShow()
    //add border to current tab
    this.classList.add('tab-border');
    //grab content item from dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
tabItem.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
tabContentItem.forEach(item => item.classList.remove('show'));
}
//listen for tab click
tabItem.forEach(item => item.addEventListener('click',selectItem));