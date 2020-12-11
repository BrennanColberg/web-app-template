/**
 * Puts some content in the middle of the screen, with a transparent gray
 * background over the rest of the website. When the popup is "clicked off",
 * it triggers a callback, which tells its parent to stop displaying the popup.
 */

import { ReactNode } from "react"
import { useScrollingDisabled } from "hooks/useScrollingDisabled"

export default function Popup({
  children,
  onClose,
}: {
  children?: ReactNode
  onClose: () => void
}): JSX.Element {
  // scrolling should be disabled while the popup exists
  // (may pose an issue if taller than screen..?)
  useScrollingDisabled()

  function triggerClickOff(event) {
    // keeps click from propagating to main site
    // (which might result in clicking random stuff)
    event.stopPropagation()
    // tells the parent element to close the popup
    onClose()
  }

  function triggerClickOn(event) {
    // keeps click from propagating to background
    // which would trigger "click off" as well (bad)
    event.stopPropagation()
  }

  return (
    <>
      {/* background (gray, partial opacity; separates popup from main site) */}
      <div className="fixed top-0 left-0 w-screen min-h-screen z-40 bg-gray-500 opacity-50" />
      {/* interactive background (centers content, catches click-off events) */}
      <div
        className="fixed top-0 left-0 w-screen min-h-screen z-50 flex justify-center align-center"
        onClick={triggerClickOff}
      >
        {/* actual content of popup, finally */}
        <div
          className="m-auto px-3 py-2 rounded-lg shadow-lg bg-white"
          onClick={triggerClickOn}
        >
          {children}
        </div>
      </div>
    </>
  )
}
