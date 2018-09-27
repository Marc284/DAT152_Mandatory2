"use strict";
    const ui = new UIHandler()


    const mod = new Modal();
    document.getElementById("addMember").addEventListener("click", function(){
        mod.openModal();
        
    });

    function callAddMember() {
        ui.addMember({'firstname' : document.getElementById("firstname").value, 'lastname' : document.getElementById("lastname").value, 'address' : document.getElementById("address").value, 'phone' : document.getElementById("phone").value});
        mod.closeModal();
    }

    document.getElementsByClassName("close")[0].addEventListener("click", function(){
        mod.closeModal();

        document.getElementById("addMemberSubmit").addEventListener("click", function(){
            console.log("Submit")
        });

    });

    function loadMembers(m) {
        let data = JSON.parse(m)
        console.log(data.newMembers)
        data.newMembers.map((member)=> ui.addMember(member))
    }

    function getUpdates(e) {
        let url = config.servicesPath + "/updates"
        const ajax = new AJAXConnection(url)
        ajax.onsuccess = loadMembers
        ajax.get([-1])
    }

    getUpdates()
    
    
    