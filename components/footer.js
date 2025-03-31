class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer-lemos mt-5">

        <div class="py-3 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0" style="color: #f0cadf;">© 2025 Priyal Tripathi</p>
                  <p class="my-0 pt-0"> <a href="mailto:priyaltripathi2910@gmail.com" style="color: white; text-decoration: none;" onmouseover="this.style.color='#f0cadf'" onmouseout="this.style.color='white'">
                    priyaltripathi2910@gmail.com
                </a> 
            </p>

                </div>


                <div class="col col-md-7 text-right">
                    <p class="mb-0" style="color: var(--light-gray);">Quick Links</p>
                    <p class="my-0 pt-0">
                        <a href="/"><i class="mr-3 footer-icons fa-solid fa-house" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/priyal-tripathi-baa54424a/" target="_blank"><i class="mr-3 fab footer-icons fa-linkedin" aria-hidden="true"></i></a>
                        <a href="https://github.com/priyalT" target="_blank"><i class="mr-3 fab footer-icons fa-github" aria-hidden="true"></i></a>
                    </p>
                </div>
            </div>
        </div>

    </div>
    `;
  }
}

customElements.define('footer-component', Footer);