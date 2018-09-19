class UIHandler {
        constructor() {
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
        }

        get length() {return this.memberList.length;}

        addMember(member) {
        var included = this.memberIds.includes(member.memberid);
        if(!included) {
            this.memberList.push(member);
            this.memberIds.push(member.memberid);
            var row = this.tbody.insertRow(-1);
            row.insertCell(-1).innerHTML = member.firstname;
            row.insertCell(-1).innerHTML = member.lastname;
            row.insertCell(-1).innerHTML = member.address;
            row.insertCell(-1).innerHTML = member.phone;
            row.insertCell(-1);
        }
        else console.log("Id already used"); 
        }
    }