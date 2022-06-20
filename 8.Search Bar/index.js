document.getElementById("searchInput").addEventListener("keyup", function(event){
    const searchQuery = event.target.value.toLowerCase();
    const allNames = document.getElementsByClassName("name");

    for(let i = 0; i < allNames.length; i++) {
        const currentName = allNames[i].textContent.toLowerCase();

        if(currentName.includes(searchQuery)){
            allNames[i].style.display = "block";
        } else {
            allNames[i].style.display = "none";
        }
    }
})