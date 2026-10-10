function showpage(pageid){
    document.querySelectorAll('main section').forEach(section =>{
        section.style.display = 'none';
    })
    document.getElementById(pageid).style.display = 'block';
}