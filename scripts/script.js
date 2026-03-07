 const allProblemContainer = document.getElementById('all-issues-container');
 let openData;
 let closeData;
const problemCountelement = document.getElementById('count-in-heading');
const loadingSpinnar =document.getElementById('loading-spinnar')
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

//  problem count 

 function problemCount() {
    problemCountelement.innerText =allProblemContainer.children.length;
 }


// all data/problems will show dynamically 

  async function loadProblem(){
    console.log('hello');
    loadingSpinnar.classList.remove('hidden')
    loadingSpinnar.classList.add('flex')
    
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
     openData =data.data.filter(open=> open.status=='open')
     closeData =data.data.filter(close=> close.status=='closed')
     displayProblem(data.data);
     
      
     
   
    
}

  function displayProblem(problems) {
    allProblemContainer.innerHTML='';
    
    problems.forEach((problem)=>{
        const card =document.createElement('div');
        
        card.className =`issue-box shadow p-4 space-y-3 rounded-md " ${problem.status=='open'? 'border-t-4 border-green-500' : 'border-t-4 border-purple-500' }`;
        card.innerHTML =`
          <div class="flex justify-between">
                <img src="${problem.status=='open' ? 'assets/Open-Status.png': 'assets/Closed- Status .png' }" alt="" class ="w-[30px]">
                <p class="px-3 py-2 rounded-full ${
                    problem.priority=='high'
                    ? 'text-red-500 bg-red-100'
                    : problem.priority=='medium'
                    ? 'text-orange-400 bg-orange-200' 
                    : 'text-gray-500 bg-gray-200'
                } ">${problem.priority}</p>
            </div>
            <div>
                <h3 class="font-bold mb-2">${problem.title}</h3>
                <p class="text-gray-500 line-clamp-2">${problem.description}</p>
            </div>
            <div class= "mb-3 mt-3">
                <span class="px-3 py-2 rounded-full text-red-500 bg-red-100">bug</span>
                
            </div>
            <hr class="border-t-2 border-gray-300 mt-4">
            <p class ="text-gray-500 mt-3">${problem.assignee ? problem.assignee : 'anonymous'}</p>
            <p class ="text-gray-500" >${problem.createdAt}</p>

        
        
        
        
        
        `
        allProblemContainer.appendChild(card)
        loadingSpinnar.classList.add('hidden')
         problemCount()
      
 })}

   
   
   
   
   

// now close and open problem code start from here
  
 document.getElementById('open-filter-btn').addEventListener('click', function(){
   console.log('open');
   allProblemContainer.innerHTML=''
   loadingSpinnar.classList.remove('hidden')
    loadingSpinnar.classList.add('flex')
    displayProblem(openData);
      
 })
 
 document.getElementById('close-filter-btn').addEventListener('click', function(){
   console.log('close');

   allProblemContainer.innerHTML=''
   loadingSpinnar.classList.remove('hidden')
    loadingSpinnar.classList.add('flex')
    displayProblem(closeData);
    
    
 
   
 })
 document.getElementById('all-filter-btn').addEventListener('click',function(){
    loadProblem();
 })
 
 
 
 loadProblem();
 
//  loadProblem().then((data) => {
   
//    });


   