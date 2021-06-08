window.addEventListener('load', function(){
    const poga = document.getElementById("toggle_button")

    poga.addEventListener('click', function(){
        document.querySelectorAll('.second_five li').forEach((element) => {
            if(element.style.display == 'block') {
                element.style.display = 'none'
            } else {
                element.style.display = 'block';
            }
        });
    });
});