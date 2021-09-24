export function getOffset(element: HTMLElement): number {
  const computedStyle = getComputedStyle(element)
  const lineHeight = parseInt(computedStyle.getPropertyValue('--line-height'))
  const fontSize = parseInt(computedStyle.getPropertyValue('--font-size'))
  const capHeight = parseInt(computedStyle.getPropertyValue('--cap-height'))
  const upm = parseInt(computedStyle.getPropertyValue('--upm'))
  const box = 2 * Math.round(((capHeight / upm) * fontSize) / 2)

  return (lineHeight - box) / 2
}

export function getLetterSpacing(element: HTMLElement): number {
  const computedStyle = getComputedStyle(element)
  const spacingFactor = parseInt(
    computedStyle.getPropertyValue('--spacing-factor')
  )

  if (spacingFactor !== 0) {
    const fontSize = parseInt(computedStyle.getPropertyValue('--font-size'))
    const a = -0.0223
    const b = 0.185 * spacingFactor
    const c = -0.1745
    const d = fontSize

    return a + b * Math.pow(Math.E, c * d)
  }

  return 0
}

export function setProperties(
  element: HTMLElement,
  properties: { name: string; value: string }[]
) {
  const hasStylesheet = element.shadowRoot.styleSheets.length !== 0
  const styleSheet = hasStylesheet
    ? element.shadowRoot.querySelector('style').sheet
    : // @ts-ignore
      element.shadowRoot.adoptedStyleSheets[0]

  properties.map((property) => {
    styleSheet.insertRule(`:host{--${property.name}: ${property.value}`)
  })
}
