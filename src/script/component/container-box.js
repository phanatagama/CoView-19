import './content-item.js';

class Containerbox extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set items(items) {
        this._items = items;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        const contentItemElement = document.createElement("content-item");
        contentItemElement.items = this._items;
        this.shadowDOM.appendChild(contentItemElement);
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
           </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("container-box", Containerbox);