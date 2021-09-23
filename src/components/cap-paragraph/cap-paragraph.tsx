import { Component, Host, h, Prop, Element } from '@stencil/core'
import { LevelType } from './types'
import { FamilyType, SizeType, WeightType } from './../../shared/types'
import {
  getOffset,
  getLetterSpacing,
  setProperties,
} from './../../shared/properties'

@Component({
  tag: 'cap-paragraph',
  styleUrl: 'cap-paragraph.scss',
  shadow: true,
})
export class CapParagraph {
  @Element() element: HTMLCapParagraphElement

  /** If the text should be clipped at the end of the line. */
  @Prop() clip: boolean = false

  /** Defines the font family. */
  @Prop() family: FamilyType = 'sans'

  /** Defines the font size. */
  @Prop() level: LevelType = 'secondary'

  /** Description... */
  @Prop() size: SizeType = 'adaptive'

  /** Defines the font weight. */
  @Prop() weight: WeightType = 'soft'

  componentDidLoad() {
    setProperties(this.element, [
      { name: 'offset', value: `${getOffset(this.element)}px` },
      { name: 'letter-spacing', value: `${getLetterSpacing(this.element)}em` },
    ])
  }

  render() {
    return (
      <Host
        class={`${this.level} ${this.family} ${this.size} ${this.weight} ${
          this.clip ? 'clip' : ''
        }`}
      >
        <p class="text">
          <slot></slot>
        </p>
      </Host>
    )
  }
}
