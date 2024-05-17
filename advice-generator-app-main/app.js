const diceBtn = document.querySelector("#dice")
const adviceContent = document.querySelector("#advice-content")
const adviceNumber = document.querySelector("#advice-number")
const loadingDiv = document.querySelector("#loading");

diceBtn.addEventListener('click', async function () {
    loadingDiv.style.display = "block";
    try{
        const response = await fetch(`https://api.adviceslip.com/advice`, {
            cache: 'no-store' // Set cache to 'no-store' to bypass caching
        })
        const advice = await response.json()
        adviceContent.innerHTML = advice.slip.advice;
        adviceNumber.innerHTML = `ADVICE #${advice.slip.id}`;
    }
    catch(err){
        console.log('errr', err);
    }
    loadingDiv.style.display = "none";
})
