var container=document.getElementById("container")
    var ip=document.getElementById("ip")
    function add(){
        var li=document.createElement("li")
        li.innerHTML=ip.value + "<button onclick='deletee(event)' class='deletebtn' >Delete</button>"
        container.append(li)
        ip.value=""
    }
    function deletee(event){
        event.target.parentElement.remove()
    }