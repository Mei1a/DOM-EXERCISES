window.addEventListener("load", function(){
  const text = document.getElementById('more_text_link')
  text.addEventListener('click', function(e){
    e.preventDefault()
    var text_content = document.getElementById('more_text_content')
    
    text_content.style.display = 'block'
  })
});