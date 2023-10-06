const users  = JSON.parse(localStorage.getItem('users'))
const nav = document.querySelector('.nav')
const tabContent = document.querySelector('.tab-content')

let marks = []
let computers = []

for(let user of users){
    for(let comp of user.computers){
        computers.push(comp)

        if(!marks.includes(comp.mark)){
            marks.push(comp.mark)
        }
        
    }
}
console.log(computers);
for(let mark of marks){
    nav.innerHTML = `<button class="nav-link" id="v-pills- ${mark}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${mark}" type="button" role="tab" aria-controls="v-pills-${mark}" aria-selected="true">${mark}</button>`

    tabContent.innerHTML += `<div class ="tab-pane fade" id ="v-pills-${mark}"
    role= "tabpanel" aria-labelledbv="v-pills-${mark}-tab" tabindex= "0"></div>`
}

const tabPanes = document.querySelectorAll('.tab-pane')

for(let tabPane of tabPanes){
    for(let comp of computers){
        if(tabPane.id === `v-pills-${comp.mark}`){
            console.log(comp);
            tabPane.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${comp.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${comp.mark}</h5>
              <p class="card-text">Ram: ${comp.ram}</p>
              <p class="card-text">Cpu: ${comp.cpu}</p>
              <a href="#" class="btn btn-primary">Details</a>
            </div>
          </div>`
        }
    }
}