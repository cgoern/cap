import { Component, Host, Prop, h } from '@stencil/core'
import { LevelType, WeightType } from './types'

@Component({
  tag: 'cap-paragraph',
  styleUrl: 'cap-paragraph.scss',
  shadow: true,
})
export class CapParagraph {
  /**
   *
   * Properties
   *
   */

  /** If the text should be clipped at the end of the line. */
  @Prop() clip: boolean = false

  /** Defines the font size. */
  @Prop() level: LevelType = 'primary'

  /** Defines the font weight. */
  @Prop() weight: WeightType = 'soft'

  /**
   *
   * Render method
   *
   */

  render() {
    return (
      <Host class={`${this.level} ${this.weight} ${this.clip ? 'clip' : ''}`}>
        <p id="text">
          <slot></slot>
        </p>
      </Host>
    )
  }
}
