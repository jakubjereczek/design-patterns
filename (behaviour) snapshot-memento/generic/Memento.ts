import { DocumentCaretaker, DocumentOriginator } from "./main";

const documentOriginator = new DocumentOriginator();
const documentCaretaker = new DocumentCaretaker(documentOriginator);

documentCaretaker.update({ text: "1", fontFamily: "Arial" });
console.log(documentCaretaker.getCurrentState()); // { "text": "1", "fontFamily": "Arial" } 

documentCaretaker.update({ text: "2", fontFamily: "Times New Roman" }); 
console.log(documentCaretaker.getCurrentState()); // { "text": "2", "fontFamily": "Times New Roman" } 

documentCaretaker.update({ text: "3", fontFamily: "Times New Roman" });
console.log(documentCaretaker.getCurrentState());  // { "text": "3", "fontFamily": "Times New Roman" }
documentCaretaker.undo();
console.log(documentCaretaker.getCurrentState());  // { "text": "2", "fontFamily": "Times New Roman" }
documentCaretaker.undo();
console.log(documentCaretaker.getCurrentState()); // { "text": "1", "fontFamily": "Arial" } 
documentCaretaker.undo();
console.log(documentCaretaker.getCurrentState());  // { "text: "", "fontFamily": " "}
