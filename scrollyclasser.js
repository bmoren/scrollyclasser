let options = {
    // root: document.querySelector('body'),
    rootMargin: '0px',
    threshold: 0.5
  }
  
  
  
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
  
      
      //make sure we're intersecting
      if(entry.isIntersecting === true && entry.target.dataset.enterAdd ){
        // console.log('did entry')
        
        //get all the classes in the data attribute and split them to an array
        let classes = entry.target.dataset.enterAdd.split(" ")
        
        //add each one to the class list
        classes.forEach((className) => {
            entry.target.classList.add(className)
        })
        
      }
      
      
          //make sure we're NOT intersecting
      if(entry.isIntersecting === false && entry.target.dataset.exitRemove ){
        // console.log('did exit')
        
        //get all the classes in the data attribute and split them to an array
        let classes = entry.target.dataset.exitRemove.split(" ")
        
        //add each one to the class list
        classes.forEach((className) => {
            entry.target.classList.remove(className)
        })
        
      }
      
      
          // console.log(entry.target.classList)
  
    });
  };
  
  
  //invoke the observer
  let observer = new IntersectionObserver(callback, options);
  
  
  
  // let target = document.querySelector('.observe');
  // console.log(target)
  // observer.observe(target);
  
  
  let observedElements = document.getElementsByClassName('observe')
  console.log(observedElements)
  
  if(observedElements){
    
   for( let element of observedElements){
     observer.observe(element);
  
   }
  }