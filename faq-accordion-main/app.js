
const obj = [
    {   
        id: 1,
        header: "Header One",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero Sed cursus ante dapibus diam.",
        imgPlus: "./assets/images/icon-plus.svg",
        imgMinus: "./assets/images/icon-minus.svg"
    },
    {   
        id: 2,
        header: "Header Two",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero Sed cursus ante dapibus diam.",
        imgPlus: "./assets/images/icon-plus.svg",
        imgMinus: "./assets/images/icon-minus.svg"
    },
    {   
        id: 3,
        header: "Header Three",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero Sed cursus ante dapibus diam.",
        imgPlus: "./assets/images/icon-plus.svg",
        imgMinus: "./assets/images/icon-minus.svg"
    },
    {   
        id: 4,
        header: "Header Four",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero Sed cursus ante dapibus diam.",
        imgPlus: "./assets/images/icon-plus.svg",
        imgMinus: "./assets/images/icon-minus.svg"
    },
    {   
        id: 5,
        header: "Header Five",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero Sed cursus ante dapibus diam.",
        imgPlus: "./assets/images/icon-plus.svg",
        imgMinus: "./assets/images/icon-minus.svg"
    },
    {   
        id: 6,
        header: "Header Six",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero Sed cursus ante dapibus diam.",
        imgPlus: "./assets/images/icon-plus.svg",
        imgMinus: "./assets/images/icon-minus.svg"
    },
    {   
        id: 7,
        header: "Header Seven",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero Sed cursus ante dapibus diam.",
        imgPlus: "./assets/images/icon-plus.svg",
        imgMinus: "./assets/images/icon-minus.svg"
    }
]




// (function(){
    
const accordion = document.querySelector('#accordion');

const numOfCollapseId = [3,4,6,7]

    obj.forEach(item =>{
        accordion.innerHTML += `<div class="accordion-item">
        <div class="accordion-header">
          <h3>${item.header}</h3>
          <div class="toogle-btn">
            <img ${numOfCollapseId.includes(item.id) ? "style='display: none'" : "style='display: block'"} src="${item.imgPlus}" alt="">
            <img ${numOfCollapseId.includes(item.id) ? "style='display: block'" : "style='display: none'"} src="${item.imgMinus}" alt="">
          </div>
        </div>
        <div class="accordion-content ${numOfCollapseId.includes(item.id) ? "" : "hidden"}">${item.content}"</div>
      </div>
      <hr>`
    });

    const headers = document.querySelectorAll('.toogle-btn');
    headers.forEach(header => {

        header.addEventListener('click', function(){
            this.parentNode.nextElementSibling.classList.toggle('hidden');

            const active = this.parentNode.nextElementSibling;
            const plusImage = this.querySelector('img:first-of-type');
            const minusImage = this.querySelector('img:last-of-type');

            if(active.classList.contains('hidden')){
                plusImage.style.display = 'inline'
                minusImage.style.display = 'none'
            }else{
                plusImage.style.display = 'none'
                minusImage.style.display = 'inline' 
            }
        })
    })

// })();







