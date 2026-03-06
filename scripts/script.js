 const allProblemContainer = document.getElementById('all-issues-container');
const problemCountelement = document.getElementById('count-in-heading')
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
    
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    displayProblem(data.data) 
}
  function displayProblem(problems) {
    problems.forEach((problem)=>{
        const card =document.createElement('div');
        
        card.className ="issue-box shadow p-4 space-y-3 ";
        card.innerHTML =`
          <div class="flex justify-between">
                <img src="assets/Open-Status.png" alt="">
                <p class="px-3 py-2 rounded-full text-red-500 bg-red-100">HIGH</p>
            </div>
            <div>
                <h3 class="font-bold">Fix navigation menu on mobile devices</h3>
                <p class="text-gray-500">The navigation menu doesn't collapse properly on mobile devices...</p>
            </div>
            <div>
                <span class="px-3 py-2 rounded-full text-red-500 bg-red-100">bug</span>
                
            </div>
            <hr class="">
            <p>#1 by john_doe</p>
            <p>1/15/2024</p>

        
        
        
        
        
        `
        allProblemContainer.appendChild(card)
         problemCount()
      
 })}

loadProblem()