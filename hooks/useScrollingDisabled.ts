/**
 * Disables scrolling the window while used.
 * Can optionally be toggled.
 */

import { Dispatch, SetStateAction, useEffect, useState } from "react"

export function useScrollingDisabled(
  initial = true
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [scrollingDisabled, setScrollingDisabled] = useState<boolean>(initial)

  /** disables window scrolling, locking the current position */
  function freezeScrolling() {
    // gets the instantaneous window position when frozen
    const x = window.scrollX
    const y = window.scrollY
    // whenever the user tries to scroll, reset to position
    // that was recorded when scrolling was frozen
    window.onscroll = () => window.scrollTo(x, y)
  }

  /** re-enables window scrolling */
  function thawScrolling() {
    // disable onscroll override from freezeScrolling
    window.onscroll = () => null
  }

  useEffect(() => {
    if (scrollingDisabled) {
      freezeScrolling()
      // unfreeze when re-enabled or unmounted
      return thawScrolling
    }
  }, [scrollingDisabled])

  return [scrollingDisabled, setScrollingDisabled]
}
