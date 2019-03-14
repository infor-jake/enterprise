/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('hr-HR', {
  // layout/language
  language: 'hr',
  englishName: 'Croatian (Croatia)',
  nativeName: 'hrvatski (Hrvatska)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '.', // Infered
      timeSeparator: ':',
      short: 'd.M.yyyy.', // use four digit year
      medium: 'd. MMM yyyy.',
      long: 'd. MMMM yyyy.',
      full: 'EEEE, d. MMMM yyyy.',
      month: 'd. MMMM',
      year: 'MMMM, yyyy',
      timestamp: 'HH:mm:ss',
      datetime: 'd.M.yyyy. HH:mm',
      timezone: 'd.M.yyyy. HH:mm zz',
      timezoneLong: 'd.M.yyyy. HH:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
      abbreviated: ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub'],
      narrow: ['N', 'P', 'U', 'S', 'Č', 'P', 'S']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja', 'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenoga', 'prosinca'],
      abbreviated: ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['AM', 'PM']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: 'kn',
  currencyFormat: '### ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '### %',
    minusSign: '-',
    decimal: ',',
    group: '.',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Autorska prava &copy; {0} Infor. Sva prava pridržana. Riječi i znakovi navedeni u ovom dokumentu predstavljaju zaštitne znakove i/ili registrirane zaštitne znakove tvrtke Infor i/ili povezanih društava i podružnica. Sva prava pridržana. Svi su drugi ovdje navedeni zaštitni znakovi u vlasništvu odgovarajućih vlasnika.' },
    Actions: { id: 'Actions', value: 'Radnje', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Dodatne stavke', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Dodaj', comment: 'Add' },
    AddNewTab: { id: 'AddNewTab', value: 'Dodaj novu karticu', comment: 'Attached to a button that adds new tabs' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Stvori napredni filtar', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Upozorenje', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Poruke upozorenja na stranici', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Sve', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Svi rezultati za', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Poravnaj na dnu', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Poravnaj vodoravno po sredini', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Jantarna', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Boja ametista', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Primijeni', comment: 'Text in a button to apply an action' },
    Attach: { id: 'Attach', value: 'Dodaj privitak', comment: 'Attach' },
    Available: { id: 'Available', value: 'Dostupno', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Azurna', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Boja pozadine', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Između', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Blokiraj ponudu', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Podebljano', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'S knjižnom oznakom', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Dodaju knjižnu oznaku', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Hijerarhijska navigacija', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Preglednik', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Popis s grafičkim oznakama', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Kalendar', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Kamera', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Odustani', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Uključena tipka Caps Lock', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Košarica', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Sredina', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Preostalo znakova: {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Maksimalan broj znakova ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Za promjenu odabira upotrijebite tipke za strelicom.', comment: 'Audible Text for drop down list help' },
    Checkbox: { id: 'Checkbox', value: 'Potvrdni okvir', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Potvrđeno', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Očisti', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Očisti filtar', comment: 'Clear the current filter criteria' },
    ClearSelection: { id: 'ClearSelection', value: '(Očisti odabir)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Sat', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Zatvori', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Može se kliknuti u uređivaču', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Kopiraj', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Sažmi', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Sažmi ladicu za aplikacije', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Stupci', comment: 'Columns tooltip' },
    Component: { id: 'Component', value: 'Komponenta', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Sastavi', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Dovršeno', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Potvrdi', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Potvrdi poruke na stranici', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Omogućeni kolačići', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Sadrži', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Klasa Css', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Izreži', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Datum', comment: 'Describes filtering by a date data type' },
    DaysOverdue: { id: 'DaysOverdue', value: 'Prekoračenje od {0} dana', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: 'Preostalo dana: {0}', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Izbriši', comment: 'Delete Toolbar Action Tooltip' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Raspodijeli vodoravno', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Dokument', comment: 'Document tooltip' },
    Dirty: { id: 'Dirty', value: 'Redak je promijenjen', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Pretraži kroz razine naniže', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Pretraži kroz razine naviše', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Padajući izbornik', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Ne sadrži', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Ne završava sa', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Nije jednako', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Ne započinje sa', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Dolje', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Preuzmi', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Dupliciraj', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Odabrano ili nije odabrano', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Završava sa', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Unesite komentare ovdje...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Pogreška', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Vrsta datoteke nije dopuštena', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Prekoračeno je ograničenje veličine datoteke', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Prekoračeno je ograničenje broja datoteka', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Poruke o pogrešci na stranici', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Adresa e-pošte nije valjana', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Smaragdna', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Proširi', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Proširi ladicu za aplikacije', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Proširi/sažmi', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Izvezi kao proračunsku tablicu', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Uredi', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Jednako je', comment: 'Equals in icons for filtering' },
    ExitFullView: { id: 'ExitFullView', value: 'Izađi iz potpunog prikaza', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Izvezi', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Izvezi u Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Favorit', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Prijenos datoteke. Za opciju Pretraživanje datoteke pritisnite Enter', comment: 'Screen Reader instructions' },
    Filter: { id: 'Filter', value: 'Filtar', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Prva stranica', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Mapa', comment: 'Folder tooltip' },
    FullView: { id: 'FullView', value: 'Potpuni prikaz', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Idi naprijed', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Idi natrag', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Idi dolje', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Idi gore', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Go', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafitna', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Veće od ili jednako', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Veće od', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Rešetka', comment: 'Grid tooltip' },
    Hours: { id: 'Hours', value: 'Sati', comment: 'the hour portion of a time' },
    HeadingThree: { id: 'HeadingThree', value: 'Zaglavlje tri', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Zaglavlje četiri', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Najviše', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Početna stranica', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'HTML prikaz', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Slika', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Uvoz', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Informacije', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Informativne poruke na stranici', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'U tijeku', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Umetni', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Umetni sidrenu oznaku', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Umetni sliku', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Umetni vezu', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Umetni Url', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Kurziv', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Datum nije valjan', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Nevaljano vrijeme', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Inventar', comment: 'Icon button tooltop for Inventory Action' },
    IsEmpty: { id: 'IsEmpty', value: 'Je prazno', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Nije prazno', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Odabrano stavki', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Sredina', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Poravnaj slijeva', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Poravnaj zdesna', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Ključna riječ', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Pokreni', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Posljednja stranica', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Lijevo', comment: 'Left tooltip' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Manje od ili jednako', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Manje od', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Veza', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Učitaj', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Učitavanje', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Regija', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Zaključano', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Odjava', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Pretraživanje', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Najniže', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Pošta', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Označena točka na karti', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maksimiziraj', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Medijan', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Srednje', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Izbornik', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Podijeli na radnoj površini Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minute', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimiziraj', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Minus', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Mobilni uređaj', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Mjesec', comment: 'As in a date month' },
    More: { id: 'More', value: 'Više...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Više radnji', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Premjesti lijevo', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Premjesti desno', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Izmijenjeno', comment: 'for modified form fields' },
    NewDocument: { id: 'NewDocument', value: 'Novi dokument', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Nova stavka', comment: 'New item in listbuilder' },
    Next: { id: 'Next', value: 'Sljedeće', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Sljedeća stranica', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Sljedeći mjesec', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Ne', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Nema dostupnih podataka', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Nema dostupnih podataka, za više rezultata odaberite novi filtar.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Nema dostupnih podataka, za više rezultata odaberite u prethodnom popisu.', comment: 'Shown when there is no rows shown in a list' },
    NoResults: { id: 'NoResults', value: 'Nema rezultata', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Uobičajeno', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Bilješke', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Nije odabrano', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Popis brojeva', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'U redu', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Otvori/natrag/zatvori', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Otvori/zatvori', comment: 'Open / Close tooltip' },
    OrderedList: { id: 'OrderedList', value: 'Umetni/ukloni numerirani popis', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'stranica ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Stranica {0} od {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Trenutačno ste na stranici ', comment: 'Text on the pager links' },
    Paste: { id: 'Paste', value: 'Zalijepi', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Lozinka mora</strong><br>sadržavati najmanje 10 znakova<br>mora sadržavati najmanje jedno veliko slovo<br>mora sadržavati najmanje jedno malo slovo<br>mora sadržavati jedan poseban znak<br>ne smije sadržavati vaše korisničko ime<br>ne smije biti lozinka koja se već upotrebljavala<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Lozinka se mora podudarati', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Vrh', comment: 'the max or peak value in a chart' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Personaliziraj stupce', comment: 'Customize Columns in a Grid' },
    Platform: { id: 'Platform', value: 'Platforma', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Razdoblje', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Pritisnite tipku Dolje za odabir datuma', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Pritisnite tipku Shift+F10 za otvaranje kontekstualnog izbornika', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Prethodno', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Prethodni mjesec', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Prethodna stranica', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Ispiši', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Raspon', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} Zapisi po stranici', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Ponovi', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Promijeni redoslijed redaka', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Osvježi', comment: 'Refresh tooltip' },
    Required: { id: 'Required', value: 'Obavezno', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Vrati izvorno', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Vrati na zadano', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Rezultat', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Rezultati', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Poravnaj zdesna', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Poravnaj zdesna', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Desno', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Uloge', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Visina retka', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Boja rubina', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Izvedi filtar', comment: 'Execute the current filter criteria' },
    Save: { id: 'Save', value: 'Spremi', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Spremi trenutačan prikaz', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Spremljeni prikazi', comment: 'Label for a list of Views' },
    Seconds: { id: 'Seconds', value: 'Sekunde', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Pretraži', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Pretraži naziv stupca', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Pretraži u mapi', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Pretraži popis', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Odaberi', comment: 'text describing a select action' },
    Selected: { id: 'Selected', value: 'Odabrano', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Odaberi sve', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Pošalji', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Postavi vrijeme', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Postavke', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Kratko', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Prikaži redak filtra', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Prikaži manje', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Prikaži više', comment: 'Show more form content' },
    Slate: { id: 'Slate', value: 'Boja škriljevca', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Slajd {0} od {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Slajdovi {0} i {1} od {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Ručica za', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Maksimalan raspon ručice za', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Minimalan raspon ručice za', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Prijeđi na glavni sadržaj', comment: 'Skip link in header, jumps when clicked on to main area' },
    StartsWith: { id: 'StartsWith', value: 'Započinje sa', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: 'Dovršeni koraci: {0} od {1}', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Precrtano', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Sortiraj uzlazno', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Sortiraj silazno', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Sortiraj prema dolje', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Sortiraj prema gore', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Indeks', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Eksponent', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Kartice...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Označena točka na karti', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Visoko', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Cilj', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Test Locale Defaults', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Boja teksta', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Povuci i ispusti datoteke za prijenos', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Povucite i ispustite ili <span class="hyperlink">odaberite datoteke</span> za prijenos', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Odustani od prijenosa ove datoteke', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Zatvori ovu pogrešku', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Zatvori ovu pogrešku', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Brojač vremena', comment: 'Timer tooltip' },
    Today: { id: 'Today', value: 'Danas', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Prebaci podebljani tekst', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Prebaci zaglavlje 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Prebaci zaglavlje 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Prebaci tekst u kurzivu', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Prebaci podcrtani tekst', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Alatna traka', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Poravnaj gore', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Ukupno', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Ukupno sve', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Sažmi stablo', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Proširi stablo', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Tirkizna', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Gore', comment: 'Up tooltip' },
    Upload: { id: 'Upload', value: 'Prenesi', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Nedostupan datum', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Podcrtaj', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Poništi', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Otključano', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Umetni/ukloni popis s grafičkim oznakama', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Ovaj sadržaj nije dostupan jer upotrebljava funkcije koje nisu podržane u vašoj trenutačnoj verziji preglednika.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Upotrijebi tipke sa strelicom za odabir.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Upotrijebi unos ili strelicu dolje za pretraživanje.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Korisnik', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Profil korisnika', comment: 'User Profile tooltip' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Poravnaj okomito po sredini', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Prikaži izvor', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Prikaži vizualno', comment: 'Toggle the visual view in the editor' },
    Year: { id: 'Year', value: 'Godina', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Da', comment: 'On a dialog button' }
  }
});
