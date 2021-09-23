import { Component, Host, h, Prop, Element } from '@stencil/core'
import { LevelType, TagType } from './types'
import { FamilyType, SizeType, WeightType } from './../../shared/types'
import {
  getOffset,
  getLetterSpacing,
  setProperties,
} from './../../shared/properties'

@Component({
  tag: 'cap-heading',
  styleUrl: 'cap-heading.scss',
  shadow: true,
})
export class CapHeading {
  @Element() element: HTMLCapHeadingElement

  /** If the text should be clipped at the end of the line. */
  @Prop() clip: boolean = false

  /** Defines the font family. */
  @Prop() family: FamilyType = 'sans'

  /** Defines the font size. */
  @Prop() level: LevelType = 'primary'

  /** Description... */
  @Prop() size: SizeType = 'adaptive'

  /** The HTML heading tag. */
  @Prop() tag: TagType = 1

  /** Defines the font weight. */
  @Prop() weight: WeightType = 'heavy'

  componentDidLoad() {
    setProperties(this.element, [
      { name: 'offset', value: `${getOffset(this.element)}px` },
      { name: 'letter-spacing', value: `${getLetterSpacing(this.element)}em` },
    ])
  }

  render() {
    const Tag = `h${this.tag.toString()}`

    return (
      <Host
        class={`${this.level} ${this.family} ${this.size} ${this.weight} ${
          this.clip ? 'clip' : ''
        }`}
      >
        <Tag class="text">
          <slot></slot>
        </Tag>
      </Host>
    )
  }
}
