

let phoneData = async(searchText,isShow) => {
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    let data = await res.json()
    let phone = data.data
    phonCard(phone,isShow)
}


let phonCard = (phone,isShow) => {
    let phonCardCntainer = document.getElementById('phone-container')
    phonCardCntainer.innerText = ''
    let seeAll = document.getElementById('see-all')
    if(phone.length > 9 && !isShow){
        seeAll.classList.remove('hidden')
    }
    else{
        seeAll.classList.add('hidden')
    }
    
    if(!isShow){
        phone = phone.slice(0,9)
    }

    phone.forEach(phones => {
        let card = document.createElement('div')
        card.innerHTML = `
        <div class="card bg-base-100 shadow-xl text-center">
                    <figure><img src=${phones.image} alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="text-[#403F3F] font-bold text-3xl">${phones.phone_name
                      }</h2>
                      <p class= "text-[#706F6F] md:w-[70%] mx-auto mb-3 md:text-[20px]">There are many variations of passages of available, but the majority have suffered</p>
                      <h2 class="text-[#403F3F] font-bold text-3xl mb-3">$999</h2>
                      <div class="card-actions justify-end">
                      <button onclick= "phoneDetails('${phones.slug}'); phoneModal.showModal()"; class= "btn mx-auto bg-[#0D6EFD] text-white">Show Details</button>
                      </div>
                    </div>
                  </div>
        `
              phonCardCntainer.appendChild(card)
    });
    loading(false)
}



let searchBtn = (isShow) => {
    loading(true)
    let searchInput = document.getElementById('input-search')
    let searchText = searchInput.value
    phoneData(searchText,isShow)
}

let loading = (isLoading) => {
    let loading = document.getElementById('loading')
    if(isLoading){
        loading.classList.remove('hidden')
    }
    else{
        loading.classList.add('hidden')
    }
}

let seeAllPhones = () => {
    searchBtn(true)
}


let phoneDetails = async(id) => {
    let res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    let data =await res.json()
    let phoneDetail = data.data
    phoneDetailsIs(phoneDetail)
    
}

let phoneDetailsIs = (phoneDetail) => {
    console.log(phoneDetail)
    let phoneDetailsContainer = document.getElementById('phone-details-container')
    phoneDetailsContainer.innerHTML = `
    <div w-full>
    <img class="w-[45%] mx-auto" src=${phoneDetail.image} alt="" />
    </div>
     <h1 class= "text-3xl font-bold">${phoneDetail.name}</h1>
     <p class="text-[#706F6F] text-[15px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
     
     <h3 class="flex items-start gap-2"> <div> <span class= "text-[20px] font-semibold">storage</span></div><div class="pt-1"><span class="text-[#706F6F]">${phoneDetail?.mainFeatures?.storage}</span> </div></h3>
     

     
     <h3 class="flex items-start gap-2"> <div> <span class= "text-[20px] font-semibold">Display</span></div><div class="pt-1"><span class="text-[#706F6F]">${phoneDetail?.mainFeatures?.displaySize}</span> </div></h3>


     <h3 class="flex items-start gap-2"> <div> <span class= "text-[20px] font-semibold">Chip Set</span></div><div class="pt-1"><span class="text-[#706F6F]">${phoneDetail?.mainFeatures?.chipSet} </span></div></h3>

     <h3 class="flex items-start gap-2"> <div> <span class= "text-[20px] font-semibold">Memory</span></div><div class="pt-1"><span class="text-[#706F6F]">${phoneDetail?.mainFeatures?.memory}</span></div></h3>
     
    <h3 class="flex items-start gap-2"> <div> <span class= "text-[20px] font-semibold">Slug</span></div><div class="pt-1"><span class="text-[#706F6F]">${phoneDetail.slug}</span></div></h3>


    <h3 class="flex items-start gap-2"> <div> <span class= "text-[20px] font-semibold">GPS</span></div><div class="pt-1"><span class="text-[#706F6F]">${phoneDetail.others.GPS}</span></div></h3>

    `
}
phoneDetails()
phoneData('13')


