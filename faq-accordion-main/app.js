(function(){
    const headers = document.querySelectorAll('.toogle-btn');

    headers.forEach(header => {
        header.addEventListener('click', function(){
            this.parentNode.nextElementSibling.classList.toggle('active');

            const active = this.parentNode.nextElementSibling;
            const plusImage = this.querySelector('img:first-of-type');
            const minusImage = this.querySelector('img:last-of-type');

            if(active.classList.contains('active')){
                plusImage.style.display = 'inline'
                minusImage.style.display = 'none'
            }else{
                plusImage.style.display = 'none'
                minusImage.style.display = 'inline' 
            }
        })
    })
    
})();

