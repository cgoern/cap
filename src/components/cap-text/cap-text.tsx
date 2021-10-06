import { Component, Host, h, Prop, Element } from '@stencil/core'
import {
  FamilyType,
  HeadingTypes,
  LevelType,
  ScaleType,
  WeightType,
} from './types'

@Component({
  tag: 'cap-text',
  styleUrl: 'cap-text.scss',
  shadow: true,
})
export class CapText {
  @Element() element: HTMLCapTextElement

  /**
   *
   * Properties
   *
   */

  /** Description... */
  @Prop() ellipsis: boolean = false

  /** Description... */
  @Prop() family: FamilyType = 'sans'

  /** Description... */
  @Prop() heading: HeadingTypes

  /** Description... */
  @Prop() leading: string

  /** Description... */
  @Prop() level: LevelType = '0'

  /** Description... */
  @Prop() noWrap: boolean = false

  /** Description... */
  @Prop() paragraph: boolean

  /** Description... */
  @Prop() scale: ScaleType = 'adaptive'

  /** Description... */
  @Prop() trailing: string

  /** Description... */
  @Prop() weight: WeightType = 'soft'

  /**
   *
   * Private methods
   *
   */

  private getOffset = (style: CSSStyleDeclaration): number => {
    const lineHeight = parseInt(style.getPropertyValue('--lineHeight'))
    const fontSize = parseInt(style.getPropertyValue('--fontSize'))
    const capHeight = parseInt(style.getPropertyValue('--capHeight'))
    const upm = parseInt(style.getPropertyValue('--upm'))
    const box = 2 * Math.round(((capHeight / upm) * fontSize) / 2)

    return (lineHeight - box) / 2
  }

  private getLetterSpacing = (style: CSSStyleDeclaration): number => {
    const spacingFactor = parseInt(style.getPropertyValue('--spacingFactor'))

    if (spacingFactor !== 0) {
      const fontSize = parseInt(style.getPropertyValue('--fontSize'))
      const a = -0.0223
      const b = 0.185 * spacingFactor
      const c = -0.1745
      const d = fontSize

      return a + b * Math.pow(Math.E, c * d)
    }

    return 0
  }

  private setProperties = (properties: { name: string; value: string }[]) => {
    const hasStylesheet = this.element.shadowRoot.styleSheets.length !== 0
    const styleSheet = hasStylesheet
      ? this.element.shadowRoot.querySelector('style').sheet
      : // @ts-ignore
        this.element.shadowRoot.adoptedStyleSheets[0]

    properties.map((property) => {
      styleSheet.insertRule(`:host{--${property.name}: ${property.value}`)
    })
  }

  /**
   *
   * Lifecycle methods
   *
   */

  componentDidLoad() {
    const style = getComputedStyle(this.element)

    this.setProperties([
      { name: 'offset', value: `${this.getOffset(style)}px` },
      { name: 'letterSpacing', value: `${this.getLetterSpacing(style)}em` },
    ])
  }

  /**
   *
   * Render method
   *
   */

  render() {
    const Tag = this.heading
      ? `h${this.heading.toString()}`
      : this.paragraph
      ? 'p'
      : 'span'

    const hostClass = [
      this.ellipsis ? 'ellipsis' : '',
      this.family,
      this.level,
      this.noWrap ? 'no-wrap' : '',
      this.scale,
      this.weight,
    ]

    const addons = {
      'data-leading': this.leading !== '' ? this.leading : false,
      'data-trailing': this.trailing !== '' ? this.trailing : false,
    }

    return (
      <Host class={hostClass.join(' ')}>
        <Tag
          class={`text ${this.leading ? 'leading' : ''} ${
            this.trailing ? 'trailing' : ''
          }`}
          {...addons}
        >
          <slot></slot>
        </Tag>
      </Host>
    )
  }
}
