import { BaseComponent } from "./baseComponent";
export class Hello extends BaseComponent {
    
propNames = ['overskrift', 'innhold',]
    
    
 render(): void {
    this.shadowRoot!.innerHTML =/*HTML*/`
    <style>
        button {
            background-color: lightblue;
            border: none;
            padding: 10px;
            font-size: 20px;
            cursor: pointer;    
            border-radius: 5px;
            margin-bottom: 10px;
            width: 100%;
        }
        </style>
    <button>${this.get('overskrift')}</button>
    <div>${this.get('innhold')}</div>
     `

    this.shadowRoot!.querySelector('button')!.addEventListener('click', () => {
        alert(this.get('innhold'));
     });
    }

    
}