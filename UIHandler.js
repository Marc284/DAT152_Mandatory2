"use strict";
class UIHandler {
        constructor() {

            // Create basic html table with header
            this.tbl = document.createElement('table');
            this.memberList = [];
            this.memberIds = [];
            var thead = this.tbl.createTHead();
            this.tbody = this.tbl.createTBody();
            var headerRow = thead.insertRow(0);
            var cell = headerRow.insertCell(-1).innerHTML = "<b>Firstname</b>";
            var cell1 = headerRow.insertCell(-1).innerHTML = "<b>Lastname</b>";
            var cell2 = headerRow.insertCell(-1).innerHTML = "<b>Address</b>";
            var cell3 = headerRow.insertCell(-1).innerHTML = "<b>Phone</b>";
            var cell4 = headerRow.insertCell(-1);
            var cell5 = headerRow.insertCell(-1);
            document.body.appendChild(this.tbl)

            this.nextId = 1;

            //Create add member button
            this.addBtn = document.createElement('button');
            var t = document.createTextNode("Add Member"); 
            this.addBtn.appendChild(t); 
            this.addBtn.setAttribute('id', 'addMember');
            document.body.appendChild(this.addBtn);
        }

        get length() {return this.tbl.length;}


        deleteMember(memberId){
            this.tbl.deleteRow(memberId)
        }

        editMember(memberId,memberEdit){        
            if(memberEdit[0] != "")
                this.memberlist.rows[memberId-1].cells[0].textContent = memberEdit[0]
            if(memberEdit[1] != "")
                this.memberlist.rows[memberId-1].cells[1].textContent = memberEdit[1]
            if(memberEdit[2] != "")
                this.memberlist.rows[memberId-1].cells[2].textContent = memberEdit[2]
            if(memberEdit[3] != "")
                this.memberlist.rows[memberId-1].cells[3].textContent = memberEdit[3]
        }
    

        addMember(member) {
        var included = this.memberIds.includes(member.memberId);
        if(!included) {
            this.memberList.push(member);
            this.memberIds.push(member.memberid);
            var row = this.tbody.insertRow(-1);
            row.insertCell(-1).textContent = member.firstname;
            row.insertCell(-1).textContent = member.lastname;
            row.insertCell(-1).textContent = member.address;
            row.insertCell(-1).textContent = member.phone;

            let editBtn = document.createElement('input');
            editBtn.type ="button";
            editBtn.value ="Edit";
            editBtn.onclick = function(){alert("EDIT")}
            row.appendChild(editBtn);

            let deleteBtn = document.createElement('input')
            deleteBtn.type = "button";
            deleteBtn.value = "Delete"
            deleteBtn.onclick = function(){
                var y = this.parentElement.rowIndex;
                ui.deleteMember(y);
            }
            row.appendChild(deleteBtn);
            this.nextIds++
        }
        else console.log("Id already used"); 
        }
    }