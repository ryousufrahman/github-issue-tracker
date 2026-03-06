//  sign in button logic 
document.getElementById('sign-in-btn').addEventListener('click', function(){
  const loginName = document.getElementById('login-name');
  const loginNameValue = loginName.value;
  const loginPassword = document.getElementById('login-password');
  const loginPassWordValue = loginPassword.value;
   if(loginNameValue !=='admin'){
      loginName.value =""
      loginPassword.value =""
    alert('Wrong Username Type (admin)');
    
    return;
   }
   if(loginPassWordValue!=='admin123'){
    loginName.value =""
    loginPassword.value=""
    alert('Wrong Password Type (admin123)')
     
    return;
   }
   else{
    window.location.assign("./problems.html");

   }

})

//  main container login start here

function toggleBtn(id) {
    const allFilterBtn =document.getElementById('all-filter-btn');
   const openFilterBtn =document.getElementById('open-filter-btn');
     const closeFilterBtn =document.getElementById('close-filter-btn');

    allFilterBtn.classList.remove('btn-primary')
    openFilterBtn.classList.remove('btn-primary')
    closeFilterBtn.classList.remove('btn-primary')
    const selectedBtn =document.getElementById(id);
    selectedBtn.classList.add('btn-primary');
    
}