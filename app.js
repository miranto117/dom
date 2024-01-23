let titleAcc = document.querySelector('.title-accordeon');

let acc = document.querySelector('.container');


// Ecouteur d'évenement 

acc.addEventListener('click', function(event){
    this.classList.toggle('show');
});


// Delegation d'evenement 

acc.addEventListener('click', function(event) {
    if (event.target.classList.contains('show')) {
        console.log('Element cliqué');
    }
});




