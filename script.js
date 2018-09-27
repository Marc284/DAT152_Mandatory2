"use strict";
    const ui = new UIHandler()


    const mod = new Modal();
    document.getElementById("addMember").addEventListener("click", function(){
        mod.openModal();
        
    });

    function callAddMember() {
        console.log(ui.memberIds)
        let member = {  'firstname' : document.getElementById("firstname").value,
                        'lastname' : document.getElementById("lastname").value, 
                        'address' : document.getElementById("address").value,
                        'phone' : document.getElementById("phone").value,
                        'memberId': ui.nextId
                    }
        ui.addMember(member);
        addMemberServer(member);
        mod.closeModal();
    }

    document.getElementsByClassName("close")[0].addEventListener("click", function(){
        mod.closeModal();

        document.getElementById("addMemberSubmit").addEventListener("click", function(){
            console.log("Submit")
        });

    });

    function addMemberServer(member) {
        let url = config.servicesPath + "/member";
        const ajax = new AJAXConnection(url)
        ajax.post(null,member)
    }
    


    function loadMembers(m) {
        let data = JSON.parse(m)
        data.newMembers.map((member)=> ui.addMember(member))
    }

    function getUpdates(e) {
        let url = config.servicesPath + "/updates"
        const ajax = new AJAXConnection(url)
        ajax.onsuccess = loadMembers
        ajax.get([-1])
    }

    getUpdates()
    
    
    