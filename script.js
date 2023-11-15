// Shery.imageEffect("#back" , {style: 2, debug: true})

let elms = document.querySelectorAll('.elm')
elms.forEach((elm)=>{
    let h1s = elm.querySelectorAll('h1');
    let index = 0;
   var animating = false

    document.querySelector('#main').addEventListener('click', ()=>{
  if(!animating){
//    animating = true;
    gsap.to(h1s[index], {
        top:'-=100%',
        ease: Expo.easeInOut,
        duration:1,
        onComplete: ()=>{
            gsap.set(this._targets[0], {top: '100%'})
            
        },
        
    });

   index === h1s.length - 1 ? (index = 0) : index++;

    gsap.to(h1s[index], {
        top:'-=100%',
        ease: Expo.easeInOut,
        duration:1,
    });
  }
})

})
animating = false;