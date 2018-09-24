"use strict";
class Modal {
// Get the modal
constructor() {
    this.modal = document.getElementById('myModal');
    this.span = document.getElementsByClassName('close')[0];
}

openModal() {
    this.modal.style.display = "block";
}

closeModal() {
    this.modal.style.display = "none";
}

}