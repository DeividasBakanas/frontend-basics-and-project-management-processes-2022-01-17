# 3 savaitė

## 3.1

Temos

-   Galimybė prisidėti prie atviro kodo projektų (forks)
-   Visual Studio Code git integracija
-   iframe - dokumentas dokumente
-   saugumo aspektas (same origin policy, X-Frame-Options)
    -   Kur įgyvendinamas saugumas?
    -   Jūsų kodas
    -   Naršyklė!
-   Trumpa užduotis (vaizdo įrašų pakeitimas)
-   HTML lentelės
    -   Bazinė struktūra (table, tr, td)
    -   Sudėtingesnė lentelės struktūra (caption, thead, th, tbody, tfoot)
    -   Elementų perdengimas (rowspan, colspan atributai)
    -   Lentelė lentelėje
    -   Naudojimo tikslai ir problemos
-   Formų svarba ir paplitimas
-   input elementas
    -   type atributas (text, email, number)
    -   placeholder atributas
-   label elementas
    -   suteikiamas funkcionalumas

Pagrindiniai šaltiniai

-   Githubt Forks <https://docs.github.com/en/get-started/quickstart/fork-a-repo>
-   Visual Studio Code Git integracija <https://code.visualstudio.com/docs/editor/github>
-   iframe <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe>, <https://www.w3schools.com/tags/tag_iframe.ASP>
-   Lentelių pagrindai <https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics>
    -   **table** elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table>
    -   **t**able **r**ow elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr>
    -   **t**able **d**ata elementas <https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics>
    -   **colspan** ir **rowspan** <https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics#allowing_cells_to_span_multiple_rows_and_columns>
-   Sudėtingesnės lentelės <https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced>
    -   **t**able **head** elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead>
    -   **t**able **h**eader elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th>
    -   **t**able **body** elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody>
    -   **t**able **foot**er elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot>
    -   **caption** elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption>
-   Formų pagrindai <https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form>
    -   input elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input>
    -   label elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label>

Papildomi šaltiniai

-   X-FRAME-OPTIONS <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options>
-   Same Origin Policy <https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy>
-   Input tipai <https://www.w3schools.com/html/html_form_input_types.asp>
-   Kaip pamatyti prie kokios nutolusios repozitorijos prijungta lokali repozitorija? <https://stackoverflow.com/a/4089452>
-   Nepavykęs pavyzdys - rowspan nuo thead iki tfoot <https://stackoverflow.com/a/2071133>, xHTML spec. <https://www.w3.org/TR/xhtml2/mod-tables.html#sec_30.6.>, HTML spec. <https://html.spec.whatwg.org/#table-processing-model>

## 3.2

Temos

-   label elementas
    -   elementas ne viduje (for atributas)
    -   keletas label elementų vienam input’ui
-   form elementas
    -   form atributai action ir method (get ir post - privalumai / trūkumai)
    -   input elemento atributas name ir
    -   formos duomenų pateikimas į serverį
-   Trumpa užduotis (prisijungimo forma)
-   input type=”submit” / button / type=”reset”
    -   formaction, formmethod atributai
-   fieldset ir legend elementai
-   Globalus style atributas (inline stiliai)
    -   aprašymo būdas
    -   keletas properties pavyzdžių
        -   width, height
        -   color
        -   background-color
-   textarea elementas
    -   Savybės

Pagrindiniai šaltiniai

-   Formų pagrindai <https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form>
    -   label elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label>
-   Input types <https://www.w3schools.com/html/html_form_input_types.asp>, <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types>
-   button <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button>
-   style atributas <https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style>, <https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-style>
-   Textarea <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea>

Papildomi šaltiniai

-   CSS properties sąrašas - <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference>, <https://www.w3schools.com/cssref/>

## 3.3

Temos

-   input type “number”
-   HTML formų validacija
    -   required atributas
    -   minlength, maxlength atributai
    -   min, max atributai
    -   pattern atributas (regular expression, playground)
-   Trumpa užduotis (Kontaktų forma - papildymas)
-   Technologijų žemėlapis
-   Bendri formos elementų atributai (šaltinis)
    -   value (pradinė reikšmė)
    -   name (pavadinimas siunčiant į serverį)
    -   placeholder (tekstas iki vartotojo turinio įvedimo)
    -   autofocus
    -   readonly
    -   disabled
    -   form
    -   size (panašu į textarea cols)
    -   autocomplete
-   Kiti input elemento tipai (text based)
    -   email
        -   papildoma validacija, įvesties (dažniau mobiliuosiuose) adaptavimas
    -   number
    -   min, max, step atributai
        -   papildomi naršyklės valdikliai
        -   papildoma validacija, įvesties (dažniau mobiliuosiuose) adaptavimas
    -   tel
        -   validacija, įvesties adaptavimas
    -   password
        -   įvedamo teksto paslėpimas
        -   papildomos indikacijos HTTPS nenaudojantiems puslapiams
    -   search
        -   lauko išvalymo galimybė
    -   url
        -   papildomos įvesties galimybės, semantinė prasmė
    -   hidden
        -   paslepia informaciją nuo vartotojo akių (viską galima pamatyti per DevTools Inspect Element)
        -   siunčia duomenis į serverį, kaip įprastas formos elementas
-   Kiti input elemento tipai (skirti datoms ir laikui)
    -   date
    -   time
    -   datetime-local
    -   month
    -   week
-   Kiti input elemento tipai
    -   checkbox (taip / ne įvedimas)

Pagrindiniai šaltiniai

-   Formų pagrindai <https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form>
-   Input types <https://www.w3schools.com/html/html_form_input_types.asp>, <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types>
-   Using built-in form validation <https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation>
-   Bendri atributai:
    -   value <https://www.w3schools.com/tags/att_input_value.asp>
    -   name <https://www.w3schools.com/tags/att_input_name.asp>
    -   placeholder <https://www.w3schools.com/tags/att_input_placeholder.asp>
    -   autofocus <https://www.w3schools.com/tags/att_input_autofocus.asp>, <https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus>
    -   readonly <https://www.w3schools.com/tags/att_input_readonly.asp>, <https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly>
    -   disabled <https://www.w3schools.com/tags/att_disabled.asp>, <https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled>
    -   form <https://www.w3schools.com/tags/att_form.asp>
    -   size <https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size>
    -   autocomplete <https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete>
-   Input types <https://www.w3schools.com/html/html_form_input_types.asp>, <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types>

## 3.4

Temos

-   Kiti input elemento tipai
    -   radio
    -   file
        -   accept, multiple atributai
-   Rečiau naudojami input elemento tipai
    -   color
    -   range
-   Kiti formų elementai
    -   select
        -   option, optgroup elementai, multiple atributas
    -   datalist
-   Namų darbas (užduotis “apmokėjimas”)

-   CSS kaskadiniai stiliai
    -   Atsakomybės
    -   Sintaksė
    -   Kodėl kaskadiniai?
    -   CSS savybės / CSS properties (sąrašas)
    -   Komentarai
-   Trys būdai pritaikyti CSS
    -   Inline (style atributas)
    -   style elementas
    -   link elementas
    -   Stiliaus prioritetas pagal šaltinį
-   Pagrindiniai CSS selektoriai (CSS selectors)
    -   element, \*, class, id, attribute selektoriai (visas sąrašas MDN, W3schools, arba čia)
    -   Keletos selektorių naudojimas (elementas elemente, elementas su klase, tas pats stilius, keliems selektoriams).
-   Spalvų naudojimas CSS
    -   color, background-color CSS properties
    -   pavadinimais
    -   rbg / rgba
    -   hex / hexa
    -   hsl / hsla
-   Namų darbas (elementų atkūrimas)

Pagrindiniai šaltiniai

-   Input types <https://www.w3schools.com/html/html_form_input_types.asp>, <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types>
-   select elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select>
-   datalist elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist>
-   Namų darbas apmokėjimas <https://github.com/DeividasBakanas/frontend-basics-and-project-management-processes-2022-01-17/tree/main/3%20savait%C4%97/3.3/assigments/apmokejimo-forma>
-   Kas yra CSS? <https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS>
-   CSS prioritetas pagal šaltinį <https://web.dev/learn/css/the-cascade/#position-and-order-of-appearance>
-   CSS selectoriai <https://web.dev/learn/css/selectors/#the-parts-of-a-css-rule>
-   CSS spalvos <https://web.dev/learn/css/color/>
-   Namų darbas elementų atkūrimas <https://github.com/DeividasBakanas/frontend-basics-and-project-management-processes-2022-01-17/tree/main/3%20savait%C4%97/3.4/assigments/elements-recreation>

Papildomi šaltiniai

-   CSS savybių sąrašas <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference>
