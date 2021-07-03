const sections=document.querySelectorAll('section');
const fragment=document.createDocumentFragment();

function createNav(id, name){
    const itemHTML=`<a class="menu__link" data-id="${id}">${name}</a>`;
    return itemHTML;
}

// build the nav
function buildNavigation() {
    for(let i=0;i<sections.length; i++) {
        const newMenuItem=document.createElement('li');
        const sectionName=sections[i].getAttribute('data-nav');
        const sectionId=sections[i].getAttribute('id');
        newMenuItem.innerHTML=createNav(sectionId, sectionName);
        fragment.appendChild(newMenuItem);
    //    console.log(sectionName)
    }
   
    const navBarList=document.getElementById('navbar__list');
    navBarList.appendChild(fragment);
    
}

// Scroll to anchor ID using scrollTO event
function scrollToElement(event){
    if(event.target.nodeName === 'A'){
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
}
document.addEventListener('scroll', function(){
    setActiveClass();
});
const navBarList = document.getElementById('navbar__list');

navBarList.addEventListener('click', function(event){
    scrollToElement(event);
    
});
// build menu
buildNavigation();




