import {Component, h, Host, Prop, State} from '@stencil/core'

@Component({
  tag: 'acme-accordion',
  styleUrl: 'acme-accordion.scss',
  shadow: true,
})
export class AcmeAccordion {
  @Prop() headerText: string
  @State() open: boolean

  render() {
    return (
        <Host>
          <header class={{'open': this.open}} onClick={() => this.open = !this.open}>{this.headerText}</header>
          <section>
            <slot></slot>
          </section>
        </Host>
    )
  }
}
