export const hideCursor = () => {
    const cursor = document.querySelector(".cursor")
    cursor.style.display = 'none'
  }

  export const showCursor = () => {
    const cursor = document.querySelector(".cursor")
    cursor.style.display = ''
  }

  export const addClickEventListeners = (setLinkHover) => {
    document.querySelectorAll('a, button, Link').forEach((link) => {
      link.addEventListener('mouseover', () => setLinkHover(true))
      link.addEventListener('mouseout', () => setLinkHover(false))
    })
  }

  export const removeClickEventListeners = (setLinkHover) => {
    document.querySelectorAll('a, button, Link').forEach((link) => {
      link.removeEventListener('mouseover', () => setLinkHover(true))
      link.removeEventListener('mouseout', () => setLinkHover(false))
    })
  }