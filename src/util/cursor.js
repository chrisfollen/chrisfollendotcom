export const updateCursor = (event, linkHover) => {
    const cursor = document.querySelector(".cursor")
    cursor.style.left = `${event.pageX}px`
    cursor.style.top = `${event.pageY}px`
    if(linkHover === true){
      cursor.style.transform = 'scale(2) translate(-25%, -25%)'
    } else {
      cursor.style.transform = 'scale(1) translate(-50%, -50%)'
    }
  }

  export const hideCursor = () => {
    const cursor = document.querySelector(".cursor")
    cursor.style.display = 'none'
  }

  export const showCursor = () => {
    const cursor = document.querySelector(".cursor")
    cursor.style.display = ''
  }