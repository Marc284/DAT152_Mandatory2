"use strict";
class UIHandler {
        constructor() {
        	this.deleteMemberCallback;
        	this.editMemberCallback;
        	
            // Create basic html table with header
            this.tbl = document.createElement('table');
            this.memberList = [];
            this.memberIds = [];
            let thead = this.tbl.createTHead();
            this.tbody = this.tbl.createTBody();
            let headerRow = thead.insertRow(0);
            headerRow.insertCell(-1).innerHTML = "<b>Firstname</b>";
            headerRow.insertCell(-1).innerHTML = "<b>Lastname</b>";
            headerRow.insertCell(-1).innerHTML = "<b>Address</b>";
            headerRow.insertCell(-1).innerHTML = "<b>Phone</b>";
            headerRow.insertCell(-1);
            headerRow.insertCell(-1);
            // this.tbody.insertRow(-1).innerHTML = "No members";
            document.body.appendChild(this.tbl)

            //Create add member button
            this.addBtn = document.createElement('button');
            let t = document.createTextNode("Add Member");
            this.addBtn.appendChild(t); 
            this.addBtn.setAttribute('id', 'addMember');
            document.body.appendChild(this.addBtn);
        }

        // ui = new UIHandler();

        get length() {return this.tbl.length;}
        get members() {return this.memberList.length;}


        deleteMember(memberId){
            this.tbl.deleteRow(memberId)
        }

        editMember(member){
        	let mod = new Modal();
        	mod.openEditModal(member);
        }
        
        addMem(member) { 
        	let deleteBtn = document.createElement('input');
        	deleteBtn.type = "button";
        	deleteBtn.value = "Delete";
        	deleteBtn.id = member.memberId + "delete";
        	deleteBtn.onclick = function(){
        		deleteMemberServer(member.memberId);
            }
        	
        	let editBtn = document.createElement('input');
        	editBtn.type = "button";
        	editBtn.value = "Edit";
        	editBtn.onclick = function(){
                ui.editMember(member);
            }
        	
        	let row = this.tbody.insertRow(-1);
            row.insertCell(-1).textContent = member.firstname;
            row.insertCell(-1).textContent = member.lastname;
            row.insertCell(-1).textContent = member.address;
            row.insertCell(-1).textContent = member.phone;
            row.appendChild(deleteBtn);
            row.appendChild(editBtn);
            
        }
    
    }