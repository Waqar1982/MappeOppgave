import { BaseComponent } from "./baseComponent";
import type { FileOrFolder } from "../types";
export class FilesAndFolders extends BaseComponent {

    static props = ['items', 'parent-folder']

    render(): void {
        const filesAndFolders = this.get('items') as FileOrFolder[] || [];
        this.shadowRoot!.innerHTML = /*HTML*/`
        <fieldset>
            <legend>Mapper og filer</legend>
            ${filesAndFolders.filter(f => !f.content).map(f => /*HTML*/`
                📁 <a href="" data-id="${f.id}">${f.name}</a><br/>`)
                .join(``)}
            ${filesAndFolders.filter(f => f.content).map(f => /*HTML*/`
                <span>🗎</span> <a href="" data-id="${f.id}">${f.name}</a><br/>`)
                .join(``)}
        </fieldset>
        `;
        this.shadowRoot!.addEventListener("click", e => {
            e.preventDefault()
            if ((e.target as HTMLElement).tagName == "a") {
                const aElement = e.target as HTMLAnchorElement
                const id = aElement.getAttribute("data-id")
                console.log(id)
                const event = new CustomEvent("selected", {detail: id})
                this.dispatchEvent(event)
            }
        })
    }
}