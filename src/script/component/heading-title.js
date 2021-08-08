class HeadTitle extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
       .main-container {
        padding: 10px;
        }
       /* HEADING */

       .heading {
       text-align: center;
       }
       
       .heading__title {
       font-weight: 600;
       color: #FF4646;
       }
       
       .heading__credits {
       margin: 10px 0px;
       color: #888888;
       font-size: 25px;
       transition: all 0.5s;
       }
       
       .heading__link {
       text-decoration: none;
       }
       
       .heading__credits .heading__link {
       color: inherit;
       }
       </style>
       <div class="main-container">
            <div class="heading">
              <h1 class="heading__title">Covid-19 Data Views</h1>
              <p class="heading__credits"><a class="heading__link" target="_blank" href="https://github.com/phanatagama">Created by Phanatagama</a></p>
            </div> 
        </div>`;
    }
}

customElements.define("heading-title", HeadTitle);