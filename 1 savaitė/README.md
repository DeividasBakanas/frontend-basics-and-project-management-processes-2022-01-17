# 1 savaitė

## 1.1 Intro paskaita

Temos

-   Apie kurso dalį.
-   Apie ką yra Front-end?
-   Reikalingi įgūdžiai
-   Bazinės technologijos
-   HTML įvadas (elemento struktūra, dokumento struktūra)

Pagrininiai šaltiniai

-   Getting started with the Web <https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web>
-   HTML introduction <https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started>

-   Visas HTML elementų sąrašas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element>
-   Globalūs elemento atributai <https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes>
-   Loginio tipo elementai <https://meiert.com/en/blog/boolean-attributes-of-html/>
-   Tušti elementai <https://developer.mozilla.org/en-US/docs/Glossary/Empty_element>

-   VS Code <https://code.visualstudio.com>
-   Photopea paveikslėlių redagavimui <https://www.photopea.com/>

Papildomi šaltiniai

-   The first 20 hours -- how to learn anything <https://www.youtube.com/watch?v=5MgBikgcWnY&ab_channel=TEDxTalks>
-   How the Web works <https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works>
-   6 Skills to Become a Front-End Developer <https://dev.to/ozakaran/6-skills-to-become-a-front-end-developer-5782>
-   Trumpai apie standartizavimą: <https://www.tutorialspoint.com/Who-s-Who-in-the-Internet-Standards-World>
-   Apie HTTP evoliuciją: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP>
-   OSI modelis: <https://www.youtube.com/watch?v=7IS7gigunyI>

## 1.2

Temos

-   Paskaitų repozitorijos apžvalga
    -   Turinio struktūra
    -   Paskaitos struktūra
    -   Klaviatūros trumpiniai
    -   Kaip Google'inti?
-   Visual Studio Code apžvalga
    -   Failo / aplanko projekto sukūrimas
    -   Pagrindinės zonos
    -   User preferences vs. Workspace preferences
    -   Text wrap / Auto closing ir kiti nustatymai
-   Kaip pasirinkti naršyklę, kuria atidaromi HTML?
-   Statinė kodo analizė (HTMLHint Visual Studio Code plėtinys)
-   HTML validavimas
-   HTML koduotės
-   HTML entities - specialių simbolių naudojimas
-   Namų darbas (keyboard shortcuts + HTMLHint)

Pagrindiniai šaltiniai

-   Repozitorijos URL <https://github.com/DeividasBakanas/frontend-basics-and-project-management-processes-2022-01-17>
-   HTMLHint extension <https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint>
-   HTML validatorius <https://validator.w3.org/>
-   HTML Charset <https://www.w3schools.com/html/html_charset.asp>
-   HTML Specialūs simboliai <https://www.w3schools.com/html/html_entities.asp>

Papildomi šaltiniai

-   `What does <meta http-equiv="X-UA-Compatible" content="IE=edge"> do?` <https://stackoverflow.com/a/6771584>
-   `Responsive Web Design - The Viewport` <https://www.w3schools.com/css/css_rwd_viewport.asp>
-   `Don’t be fooled by w3schools, UTF-8 is not the default HTML5 charset` <https://brouken.com/2016/07/dont-be-fooled-by-w3schools-utf-8-is-not-the-default-html5-charset/>
-   Characters definitions <https://www.compart.com/en/unicode>

## 1.3

Temos

-   Tuščių simbolių (whitespace) traktavimas HTML, pre elementas
-   Non-breaking Space (nepertraukiamas tarpas)
-   `br` elementas
-   Kodo komentarai
-   Blokiniai ir inline elementai

    -   Savybės
    -   Blokinių elementų pavyzdžiai (p, blockquote, div)
    -   Inline elementų pavyzdžiai (em, strong, br, q, span)

-   HTML antraštės
-   HTML sąrašai
    -   Ordered list - surikiuotas sąrašas
    -   Unordered list - nerikiuotas sąrašas
    -   Definition list - apibrėžimų sąrašas
-   Nuorodos internete (puslapių, HTML failų, paveikslėlių, ...)
-   Nuorodos elementas a
    -   Nuorodos į kitą dokumentą
    -   Papildomas nuorodų funkcionalumas (email, phone links)
    -   Nuorodos į elementą
    -   URL percent encoding - simbolių kodavimas nuorodų adresuose
-   Namų darbas
    -   [Bazinė struktūra](./1.3/assigments/basic-structure/basic-structure.md)
    -   [Savaitės valgiaraštis](./1.3/assigments/weekly-menu/weekly-menu.md)

Pagrindiniai šaltiniai

-   Getting started with HTML <https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started>
-   HTML text fundamentals <https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals>
-   Headings <https://www.w3schools.com/html/html_headings.asp>
-   Links <https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks>
-   HTML comments <https://www.w3schools.com/html/html_comments.asp>

Papildomi šaltiniai

-   Table of keyboard shortcuts for different OSes <https://en.wikipedia.org/wiki/Table_of_keyboard_shortcuts>

## 1.4

Temos

-   Paveikslėlių tipai - rastrinė grafika
    -   Lossless arba lossy
    -   Taškinių paveikslėlių glaudinimas
    -   Ar lossless geriau už lossy?
    -   Rastrinių formatų palyginimas
-   Paveikslėlių tipai - vektorinė grafika
    -   svg elementas
-   Vektorinė grafika prieš taškinę (rastrinę)
-   Paveikslėliai HTML dokumente
    -   img elementas
    -   alt atributas - alternatyvus tekstas
    -   paveikslėlių Base64 kodavimas
    -   loading atributas - lazy loading (web.dev)
    -   srcset atributas - paveikslėlio pritaikymas skirtingoms sąlygoms
    -   picture elementas - skirtingas paveikslėlis skirtingomis sąlygomis
-   Paveikslėlių problemos interneto puslapiuose
-   Kaip optimaliai naudoti paveikslėlius?
    -   Paveikslėlių optimizavimas - TinyPNG
    -   img elemento loading atributas
    -   img elemento src atributas
    -   picture elementas

Pagrindiniai šaltiniai

-   Rastrinė (taškinė) <https://lt.wikipedia.org/wiki/Ta%C5%A1kin%C4%97_grafika>
-   Vektorinė (taškinė) <https://flamingoforest.eu/paslaugos/vektorine-grafika/>
-   WebP paveikslėlių formatas <https://developers.google.com/speed/webp>
-   Formatų palyginimas <https://www.shareus.com/windows/image-formats-comparison-webp-vs-jpg-vs-png.html>
-   Rastrinių (taškinių) paveikslėlių optimizavimas - TinyPNG <https://tinypng.com/>
-   img elementas <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img>
-   Data URI <https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs>
-   srcset pavyzdžiai <https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_different_sizes>, <https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_same_size_different_resolutions>
-   **picture** elementas <https://www.w3schools.com/tags/tag_picture.asp>, <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture>

Papildomi šaltiniai

-   JPEG glaudinimas detaliau <https://www.youtube.com/watch?v=Ba89cI9eIg8>
-   JPG ir WebP dydžio palyginimas <https://www.keycdn.com/support/jpg-to-webp>
-   Animuoto PNG palaikymas <https://caniuse.com/apng>
-   Paveikslėlio konvertavimas į Base64 <https://www.base64-image.de/>
-   MIME types <https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types>
-   Base64 standartas <https://datatracker.ietf.org/doc/html/rfc4648>
