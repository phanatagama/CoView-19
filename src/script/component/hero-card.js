class HeroCard extends HTMLElement {

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
       margin: 0; 
       padding: 0;
     }
     
     body {
       background-image: linear-gradient(to top, #13547a 0%, #80d0c7 100%); 
       font-family: 'Roboto', sans-serif;
     }
     
     .container {
       width: 100%;
     }
     
     a {
       text-decoration: none;
       color: white; 
     }
     
     nav {
       width: 100%;
       height: 70px;
     }
     
     .nav-container {
       width: 50%;
       height: 100%;
       margin: 0 auto;
       display: flex;
       align-items: center;
       justify-content: center;
     }
     
     .nav-item {
       flex: 1;
       height: 100%;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
     }
     
     .subnav {
       display: none;
       position: absolute;
       top: 100%;
       color: white; 
       width: 100%; 
       animation: BobbySnuggles; 
       animation-duration: .5s;
       animation-function: ease-in-out; 
     }
     
     .subnav li {
       padding: 20px;
       list-style: none;  
     }
     
     .nav-item.has-subnav:hover .subnav {
       display: inherit;
     }
     
     .nav-item.has-subnav {
       position: relative; 
     }
     
     /*Time to apply widths for accordian to work
     Width of image = 640px
     total images = 5
     so width of hovered image = 640px
     width of un-hovered image = 40px - you can set this to anything
     so total container width = 640 + 40*4 = 800px;
     default width = 800/5 = 160px;
     */
     
     .accordion {
       width: 800px; height: 320px;
       overflow: hidden;
       margin: 30px auto;
       box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);
     }
     
     .accordion ul {
       width: 2000px;
     }
     
     .accordion li {
       position: relative;
       display: block;
       width: 160px;
       float: left;
       border-left: 1px solid #888;
       box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);
       transition: all 0.5s;
     }
     
     .accordion ul:hover li {width: 40px;}
     .accordion ul li:hover {width: 640px;}
     .accordion li img {
       display: block;
     }
     
     .image_title {
       background: rgba(255, 70, 70, 0.5);
       position: absolute;
       left: 0; bottom: 10px;  
       width: 640px; 
     
     }
     .image_title a {
       display: block;
       text-align: center; 
       color: #fff;
       text-decoration: none;
       padding: 20px;
     }
     
     @keyframes BobbySnuggles {
       0% {
         opacity: 0;
         transform: rotate(15deg) scale(0);
       }
       100% {
         opacity: 1; 
         transform: rotate(0deg) scale(1);
       }
     }
     
     @media screen and (max-width: 500px) {
       nav {
         background: pink; 
       }
     }
       </style>
       <div class="accordion">
  <ul>
    <li>
      <div class="image_title">
        <a href="#">Handwash</a>
      </div>
      <a href="https://ibb.co/gGv6QS"><img src="https://cdn.initial.com/content/local/id-ini/images/desktop/main_hand-wash-calmic.jpg" alt="handwash_640x320" border="0"></a>
    </li>
    <li>
      <div class="image_title">
        <a href="#">Use a Mask</a>
      </div>
      <a href="https://ibb.co/cXjfKn"><img src="https://www.milestonesys.com/globalassets/marketplace/uploaded-assets/0010o00002p4a2fqar/image_637540946745916349" alt="masker_640x320" border="0"></a>
    </li>
    <li>
      <div class="image_title">
        <a href="#">Don't Handshake</a>
      </div>
      <a href="https://ibb.co/b4nLkS"><img src="https://hips.hearstapps.com/esquireuk.cdnds.net/17/07/1600x800/landscape-1487329213-handshake.jpg?resize=640:*" alt="handshake_640x320" border="0"></a>
    </li>
    <li>
      <div class="image_title">
        <a href="#">Social Distancing</a>
      </div>
      <a href="https://ibb.co/mC5Uen"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-jpg-708x326-1588005068.jpg?crop=0.9209039548022598xw:1xh;center,top&resize=640:*" alt="socialdistancing_640x320" border="0"></a>
    </li>
    <li>
      <div class="image_title">
        <a href="#">Stay at Home</a>
      </div>
      <a href="https://ibb.co/enV1s7"><img src="https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_320,q_auto,w_640,z_1.0/v1/video/2020/03/17/Abraham_StayHome" alt="StayAtHome_640x320" border="0"></a>
    </li>
  </ul>
</div>`;
    }
}

customElements.define("hero-card", HeroCard);