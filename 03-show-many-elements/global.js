window.addEventListener("load", function(){
    const poga = document.getElementById('button')

    poga.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelectorAll('.show_me').forEach(function(e) {
            e.style.display = 'block';
        });
    })
})