import { Component, Host, Prop, h } from '@stencil/core'
import { LevelType, WeightType } from './types'

@Component({
  tag: 'cap-label',
  styleUrl: 'cap-label.scss',
  shadow: true,
})
export class CapLabel {
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
        <div id="text">
          <slot></slot>
        </div>
      </Host>
    )
  }
}
