import { BaseComponent } from "./Comp/baseComponent";
import type { FilesAndFolders } from "./Comp/FilesAndFolders";
import type { AppState } from "./types";
export class App extends BaseComponent {
<<<<<<< HEAD

    private state: AppState = {
        filesAndFolders: [
            { id: 1, name: 'Handlelister' },
            { id: 2, name: 'Ting som skal fikses' },
            { id: 3, name: 'Oktober', parentId: 1 },
            { id: 4, name: 'Tirsdag 15.', parentId: 3, content: 'melk\nbrød\nost\n' },
            { id: 5, name: 'Bad', parentId: 2, content: 'Lekkasje, bla bla' },
            { id: 6, name: 'notater.txt', content: 'abc' },
        ],
    };
    
=======
    private state: AppState = {
    }; // Sjekk koden til terje gjør om model til type og appstate
>>>>>>> d8f91f980054d1ae0ff59b22f5bdb236c4c6dd79
    render () {
        this.shadowRoot!.innerHTML = /*HTML*/`
            <files-and-folders></files-and-folders>

        `;
        const filesAndFolders = this.shadowRoot!.querySelector("files-and-folders") as FilesAndFolders
        const currentFilesAndFolders = this.state.filesAndFolders.filter(f => f.parentId == this.state.currentId)
        filesAndFolders.set("items", currentFilesAndFolders)


    }  
}
