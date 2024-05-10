(function(){
    const headers = document.querySelectorAll('.toogle-btn');
    console.log(headers);
    headers.forEach(header => {
        header.addEventListener('click', function(){
            console.log('Clicked', this.parentNode.nextElementSibling);
        })
    })
    
})();

