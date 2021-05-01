class CopySection extends HTMLElement {
  constructor() {
    super()

    const h2 = document.createElement('h2')
    h2.textContent = this.getAttribute('t')
    const div = document.createElement('div')
    div.textContent = this.getAttribute('p')

    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.appendChild(h2)
    shadowRoot.appendChild(div)
  }
}

customElements.define('copy-section', CopySection)
