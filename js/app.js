const sections=document.querySelectorAll('section');
const fragment=document.createDocumentFragment();

createNav=(id, name)=>{
    const itemHTML=`<a class="menu__link" data-id="${id}">${name}</a>`;
    return itemHTML;
}

// build the nav
buildNavigation=() => {
    for(let i=0;i<sections.length; i++) {
        const newMenuItem=document.createElement('li');
        const sectionName=sections[i].getAttribute('data-nav');
        const sectionId=sections[i].getAttribute('id');
        newMenuItem.innerHTML=createNav(sectionId, sectionName);
        fragment.appendChild(newMenuItem);
    }

    const navBarList=document.getElementById('navbar__list');
    navBarList.appendChild(fragment);
    
}



// Scroll to anchor ID using scrollTO event
scrollToElement=(event)=>{
    if(event.target.nodeName === 'A'){
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
}

const navBarList = document.getElementById('navbar__list');
navBarList.addEventListener('click', function(event){
    scrollToElement(event);
    
});
// build menu
buildNavigation();
const menu=document.querySelectorAll("#navbar__list li");
      menu[0].classList.add("home");
      menu[1].classList.add("hotels");
      menu[2].classList.add("contact");
      menu[3].classList.add("footer");
      console.log(menu);
window.addEventListener('scroll', ()=>{
    let current='';
    sections.forEach(section => {
        const sectionTop=section.offsetTop;
        const sectionHeight=section.clientHeight;
        if(pageYOffset>=(sectionTop-sectionHeight/3)) {
            current=section.getAttribute('id');
           
        }
        
    });
   
    menu.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
       
    });
});


