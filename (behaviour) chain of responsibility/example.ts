// Interfejs obiektu obslugujacego deklaruje metode wykonywana na zadanie.
interface ComponentWithContextualHelp {
  showHelp(): void;
}

// Klasa bazowa prostych komponentow.
abstract class Component implements ComponentWithContextualHelp {
  private tooltipText: string;

  // Kontener komponentu pelni role kolejnego ogniwa lancucha obiektow obslugujacych zadanie.
  public container: Container // protected

  // Komponent pokazuje podpowiedz jesli przypisanu mu tekst pomocy. W przeciwnym razie przekazuje wywolanie kontenerowi, o ile takowy istnieje.
  public showHelp() {
    if (this.tooltipText) {
      console.log('POKAZ PODPOWIEDZ')
    } else {
      // czyli odwolanie sie do rodzica - wyzej, do momentu az znajdzie implementacje, rodzic -> rodzic ...
      this.container.showHelp();
    }
  }

  public setTooltipText(tooltipText: string) {
    this.tooltipText = tooltipText;
  }
}

// Kontenery moga zawierac zarowno komponenty proste, jak i inne kontenery podrzedne.
// Tu ustala sie relacje lancucha, klasa dziedziczy zachowanie shoHelp od klasy rodzica.
abstract class Container extends Component {
  protected children: Component[];

  public add(child: Component) {
    this.children.push(child);
    child.container = this; // Ciekawe rozwiazanie !!!
  }
}

// Prymitywne komponenty moga posiadac tylko domyslna implementacji funkcji showHelp.
class Button extends Component {}

// Ale zlozone komponenty moga nadpisywac domyslna implementacje.
// Jesli nie ma innej tresci pomocy, komponent moze zawsze wywolac implementacje z klasy bazowej (patrz klasa Component)
class Panel extends Container {
  public modalHelpText: string;
  
  public showHelp() {
    if (this.modalHelpText != null) {
      // wyswietl modalne okno dialogowe z trescia pomocy.
    } else {
      super.showHelp()
    }
  }

  constructor(private x: number, private y: number, private z: number) {
    super();
  }
}

class Dialog extends Container {
  public wikiPageURL: string;
  
  public showHelp() {
    if (this.wikiPageURL != null) {
      // wyswietl strone z pomoca na wiki.
    } else {
      super.showHelp()
    }
  }

  constructor(private name: string) {
    super();
  }

}

// klient
class Client {
  public createUI() {
    const dialog = new Dialog("Budget raports");
    dialog.wikiPageURL = "https://www.google.com/";

    const panel = new Panel(10, 0, 64);
    panel.modalHelpText = "This panel does...";

    const ok = new Button();
    ok.setTooltipText('This is an OK button that...')

    const cancel = new Button();
    cancel.setTooltipText('Cancel')

    panel.add(ok);
    panel.add(cancel);
    dialog.add(panel);

    return dialog;
  }

  public onF1KeyPress() {
    // wybraz sobie co tu sie moze dzialc.

    // const component = this.getComponentAtMouseCoords();
    const ui = this.createUI();
    ui.showHelp();
  }
}