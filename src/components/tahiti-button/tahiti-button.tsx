import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tahiti-button',
  styleUrl: 'tahiti-button.css',
  shadow: true,
})
export class TahitiButton {
  @Prop() text: string;

  render() {
      return <button class='button'>{this.text}</button>;
  }

}
