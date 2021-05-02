class CopySection extends HTMLElement {
  constructor() {
    super()

    const h2 = document.createElement('h2')
    const a = document.createElement('a')
    a.setAttribute('href', this.getAttribute('href') || '')
    a.setAttribute('target', '_blank')
    a.style.textDecoration = 'none'
    a.textContent = this.getAttribute('t')
    h2.appendChild(a)

    const p = document.createElement('p')
    p.textContent = this.getAttribute('n')

    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.appendChild(h2)
    shadowRoot.appendChild(p)

    const contentList = (this.textContent || '').split('-')
    contentList.forEach((line, index) => {
      const nl = document.createElement('span')
      if (index === contentList.length - 1) {
        nl.style.background = '#265ea7';
        nl.style.color = '#ed20f9'
      }
      nl.textContent = line.trim()
      const pl = document.createElement('p')
      pl.appendChild(nl)
      shadowRoot.appendChild(pl)
    })
  }
}

customElements.define('copy-section', CopySection)
