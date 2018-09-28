"use strict";
const ui = new UIHandler()
const mod = new Modal();

function load() {
	let url = config.servicesPath + "/updates"
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = viewData
    ajax.get([-1])
}

function viewData(m) {
	let obj = JSON.parse(m);

    for(let i=0; i<obj.newMembers.length; i++) {
    	ui.addMem({'firstname' : obj.newMembers[i].firstname, 'lastname' : obj.newMembers[i].lastname, 'address' : obj.newMembers[i].address, 'phone' : obj.newMembers[i].phone, 'memberId' : obj.newMembers[i].memberId});
    }
}

window.addEventListener("DOMContentLoaded",load,true)

    document.getElementById("addMember").addEventListener("click", function(){
        mod.openModal();
    });

document.getElementsByClassName("close")[0].addEventListener("click", function(){
    mod.closeModal();
    });

function callAddMember() {
	let addUrl = config.servicesPath + "/member";
	const member = {
            'firstname': document.getElementById("firstname").value,
            'lastname': document.getElementById("lastname").value,
            'address': document.getElementById("address").value,
            'phone': document.getElementById("phone").value
        }
	const ajaxAdd = new AJAXConnection(addUrl)
    ajaxAdd.onsuccess = console.log();
    ajaxAdd.post(null,member)
    location.reload();
}

function editMemberServer(member){
	let updatedMember = {
            'firstname': document.getElementById("firstname").value,
            'lastname': document.getElementById("lastname").value,
            'address': document.getElementById("address").value,
            'phone': document.getElementById("phone").value
        }
            let url = config.servicesPath + "/member"
            const ajax = new AJAXConnection(url)
            ajax.put([member.memberId],updatedMember) 
            location.reload();
    }

function deleteMemberServer(memberId){
    let url = config.servicesPath + "/member"
    const ajax = new AJAXConnection(url)
    ajax.del([memberId]) 
    location.reload();
}



    
    