"use strict";
    const ui = new UIHandler()
    ui.addMember({'firstname' : 'Ole', 'lastname' : 'Olsen', 'address' : 'Olsenbakken', 'phone' : '91826453', 'memberid':'18'})
    ui.addMember({'firstname' : 'Anne', 'lastname' : 'Annesen', 'address' : 'Annesvingen', 'phone' : '87655458', 'memberid':'21'})
    // ui.addMember({'firstname' : 'Dif', 'lastname' : 'Annesen', 'address' : 'Annesvingen', 'phone' : '87655458', 'memberid':'21'})

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