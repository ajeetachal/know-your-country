function tabChange(tabName){
  
    //store all content in an array
    const ajeet = document.getElementsByClassName('state');
    //hide all content
    for(let i = 0; i < ajeet.length; i++){
      ajeet[i].classList.remove('active');
    }
    //deactive all tabs
    const achal = document.getElementsByClassName('zone');
    for(let i = 0; i < achal.length; i++){
      achal[i].classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
  }

  
   function stateChange(stateName){
  
    //store all content in an array
    const ajeet = document.getElementsByClassName('tab-content');
    //hide all content
    for(let i = 0; i < ajeet.length; i++){
      ajeet[i].classList.remove('active');
    }
    //deactive all tabs
    const achal = document.getElementsByClassName('tab');
    for(let i = 0; i < achal.length; i++){
      achal[i].classList.remove('active');
    }
    document.getElementById(stateName).classList.add('active');
    event.currentTarget.classList.add('active');
  }
  
  
                