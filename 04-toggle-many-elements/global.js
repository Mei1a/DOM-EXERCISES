window.addEventListener("load", function(){
    const poga = document.getElementById('button')

    poga.addEventListener('click', function(element){
        element.preventDefault()
        document.querySelectorAll('.toggle_me').forEach(function(element) {
            if(element.style.display == 'none'){
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
        })
    })
})