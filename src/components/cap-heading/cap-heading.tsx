import { Component, Host, Prop, h } from '@stencil/core'
import { LevelType, TagType, WeightType } from './types'

@Component({
  tag: 'cap-heading',
  styleUrl: 'cap-heading.scss',
  shadow: true,
})
export class CapHeading {
  /**
   *
   * Properties
   *
   */

  /** If the text should be clipped at the end of the line. */
  @Prop() clip: boolean = false

  /** Defines the font size. */
  @Prop() level: LevelType = 'primary'

  /** The HTML heading tag. */
  @Prop() tag: TagType = 1

  /** Defines the font weight. */
  @Prop() weight: WeightType = 'heavy'

  /**
   *
   * Render method
   *
   */

  render() {
    const Tag = `h${this.tag.toString()}`

    return (
      <Host class={`${this.level} ${this.weight} ${this.clip ? 'clip' : ''}`}>
        <Tag id="text">
          <slot></slot>
        </Tag>
      </Host>
    )
  }
}
