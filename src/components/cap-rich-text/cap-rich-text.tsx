import { Component, Host, h, Prop, Element } from '@stencil/core'
import { SizeTypes } from './types'
import { FamilyType, LineHeightTypes, ScaleType, WeightType } from './../../shared/types'

@Component({
  tag: 'cap-rich-text',
  styleUrl: 'cap-rich-text.scss',
  shadow: false,
})
export class CapRichText {
  @Element() element: HTMLCapRichTextElement

  /**
   *
   * Properties
   *
   */

  /** Description... */
  @Prop() family: FamilyType = 'sans'

  /** Description... */
  @Prop() lineHeight: LineHeightTypes = 'normal'

  /** Description... */
  @Prop() size: SizeTypes = '0'

  /** Description... */
  @Prop() scale: ScaleType = 'adaptive'

  /** Description... */
  @Prop() weight: WeightType = 'soft'

  /**
   *
   * Render method
   *
   */

  render() {
    const hostClass = [this.family, this.lineHeight, this.scale, this.size, this.weight]

    return (
      <Host class={hostClass.join(' ')}>
        <slot></slot>
      </Host>
    )
  }
}
