import { RefObject } from 'react'

type Handler = (event: MouseEvent) => void

/**
 * "When the user clicks outside of the ref's element, call the handler function."
 * @param ref - RefObject<T>
 * @param {Handler} handler - The function to call when the user clicks outside of the ref's element.
 * @param {'mousedown' | 'mouseup'} [mouseEvent=mousedown] - 'mousedown' | 'mouseup' = 'mousedown'
 */
function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  /* This is a check to see if the code is running in a browser. If it is not, then the function will
  return. (In server side does't exist document | window) */
  if (typeof window === 'undefined') return;

  document.addEventListener(mouseEvent, event => {
    const el = ref?.current

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return
    }

    handler(event)
  })
}

export { useOnClickOutside }