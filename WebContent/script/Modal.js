"use strict";
class Modal {
// Get the modal
constructor() {
    this.modal = document.getElementById('myModal');
    this.span = document.getElementsByClassName('close')[0];
}

openModal() {
	let submitAddBtn = document.createElement('input');
	submitAddBtn.type = "button";
	submitAddBtn.value = "Submit";
	submitAddBtn.id = "callAddMember";
	submitAddBtn.onclick = function(){
        callAddMember();
    }
	document.getElementById("modal-content").appendChild(submitAddBtn);
	document.getElementById("form").reset();
    this.modal.style.display = "block";
}

openEditModal(member) {
	let submitAddBtn = document.createElement('input');
	submitAddBtn.type = "button";
	submitAddBtn.value = "Submit";
	submitAddBtn.id = "callAddMember";
	submitAddBtn.onclick = function(){
		editMemberServer(member);
    }
	document.getElementById("modal-content").appendChild(submitAddBtn);
	document.getElementById("form").reset();
	
	document.getElementById("firstname").value = member.firstname;
	document.getElementById("lastname").value = member.lastname;
	console.log(document.getElementById("lastname").value);
	document.getElementById("address").value = member.address;
	document.getElementById("phone").value = member.phone;
	console.log("openEditModal member: ");
	console.log(member);
	this.modal.style.display = "block";
}

closeModal() {
    this.modal.style.display = "none";
}

}