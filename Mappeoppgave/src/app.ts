import { BaseComponent } from "./Comp/baseComponent";
export class App extends BaseComponent {
    private state: AppState = {
    }; // Sjekk koden til terje gjør om model til type og appstate
    render () {
        this.shadowRoot!.innerHTML = /*HTML*/`
        <h1>Hello World</h1>
        <app-hello overskrift="Vet ikke hva jeg skal skrive" innhold="Masse kult innhold" ></app-hello>
        <app-hello overskrift="Vet hva jeg skal skrive" innhold="kult innhold" ></app-hello>
        <app-hello overskrift="Vet ikke" innhold="innhold" ></app-hello>

        `;
    }   
}
