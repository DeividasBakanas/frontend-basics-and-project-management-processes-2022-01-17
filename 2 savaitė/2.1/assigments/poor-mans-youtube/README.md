# Poor man's Youtube / Spotify

## Užduoties tikslas

Sukurti šį kursą apimančių vaizdo įrašų galerijos puslapį, kuriame būtų galima peržiūrėti vaizdo įrašo ištrauką bei pasileisti garso įrašą (jeigu norima turinį klausyti kaip tinklalaidę - podcast).

## Funkciniai reikalavimai

-   Vartotojas mato visų įrašų galeriją
-   Galerijoje vartotojas mato tokią įrašo informacija:
    -   Temą
    -   Nuotrauką, kurią paspaudus nukreipiama į įrašo puslapį
    -   Pavadinimą
    -   Autorių (su nuoroda į autoriaus Youtube kanalą)
    -   Įkėlimo datą
-   Įrašo puslapyje vartotojas:
    -   Gali peržiūrėti įrašo ištrauką
    -   Gali perklausyti įrašo ištrauką
    -   Mato pavadinimą
    -   Mato autorių (su nuoroda į autoriaus Youtube kanalą)
    -   Mato įkėlimo datą
    -   Mato aprašymą originalo kalba
    -   Nuorodą į pilną vaizdo įrašą Youtube platformoje
    -   Gali grįžti atgal į galeriją
-   Vaizdo įrašą ir garso įrašą vartotojas gali pamatyti tik išskleidęs tam skirtas sekcijas **Vaizdo įrašas** ir **Podcast versija**
-   Vaizdo ir garso įrašai privalo turėti turinio valdymo galimybę

## Nefunkciniai reikalavimai

-   Nuotraukos galėrijoje turi būti prisitaikančios prie skirtingo ekrano dydžio - esant skirtingiems ekrano dydžiams užkraunamas skirtingo dydžio paveikslėlis.

| Įrašas | Dydis iki kurio rodoma nuotrauka | Rodoma nuotrauka             |
| ------ | -------------------------------- | ---------------------------- |
| HTML   | 900px                            | `./thumbnails/html-144p.jpg` |
| HTML   | 1800px                           | `./thumbnails/html-480p.jpg` |
| HTML   | 2000px                           | `./thumbnails/html-992p.jpg` |
| CSS    | 900px                            | `./thumbnails/css-144p.jpg`  |
| CSS    | 1800px                           | `./thumbnails/css-480p.jpg`  |
| CSS    | 2000px                           | `./thumbnails/css-992p.jpg`  |
| Git    | 900px                            | `./thumbnails/git-144p.jpg`  |
| Git    | 1800px                           | `./thumbnails/git-480p.jpg`  |
| Git    | 2000px                           | `./thumbnails/git-992p.jpg`  |

-   Jeigu naršyklė neturi galimybės palaikyti skirtingų paveikslėlių skirtingiems dydžiams, turi būti rodoma tam tikra nuotrauka:

| Įrašas | Fallback nuotrauka            |
| ------ | ----------------------------- |
| HTML   | `./thumbnails/html-1080p.jpg` |
| CSS    | `./thumbnails/css-1080p.jpg`  |
| Git    | `./thumbnails/git-1080p.jpg`  |

-   Jeigu nuotraukos nepavyko užkrauti dėl kitų priežasčių, privalo būti pateiktas alternatyvus tekstas.
-   Laikui vaizduoti naudoti semantinį elementą `time`.

## Pradiniai duomenys

### Vaizdo įrašai

| Įrašas | Nuoroda                              | MIME tipas  |
| ------ | ------------------------------------ | ----------- |
| HTML   | `./videos/HTML-crash-course-cut.mp4` | `video/mp4` |
| CSS    | `./videos/CSS-crash-course-cut.mp4`  | `video/mp4` |
| Git    | `./videos/git-crash-course.mp4`      | `video/mp4` |

### Garso įrašai

| Įrašas | Nuoroda                              | MIME tipas   |
| ------ | ------------------------------------ | ------------ |
| HTML   | `./audios/HTML-crash-course-cut.mp3` | `audio/mpeg` |
| CSS    | `./audios/CSS-crash-course-cut.mp3`  | `audio/mpeg` |
| Git    | `./audios/git-crash-course.mp3`      | `audio/mpeg` |

### Turinys

#### HTML

**Tema:** HTML įvadinis kursas

**Pavadinimas:** HTML Crash Course For Absolute Beginners

**Autorius:** Traversy Media

**Autoriaus nuoroda:** <https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA>

**Įkėlimo data:** Jul 17, 2017

**Aprašymas originalo kalba:** In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners. If you are interested in learning HTML but know nothing, then you are in the right place. We will be creating a cheat sheet with all of the common HTML5 tags, attributes, semantic markup, etc. We will not be focusing on CSS in this video. The CSS crash course will be released shortly after.

**Nuoroda į pilną įrašą Youtube:** <https://www.youtube.com/watch?v=UB1O30fR-EE>

#### CSS

**Tema:** CSS įvadinis kursas

**Pavadinimas:** CSS Crash Course For Absolute Beginners

**Autorius:** Traversy Media

**Autoriaus nuoroda:** <https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA>

**Įkėlimo data:** Jul 19, 2017

**Aprašymas originalo kalba:** In this video I will cram as much as possible about CSS. We will be looking at styles, selectors, declarations, etc. We will build a CSS cheat sheet that you can keep as a resource and we will also create a basic website layout. We are using CSS3 but mostly the basics. I will be creating an advanced CSS course with animations, etc. I do have a Flexbox in 20 minutes video as well if you want to learn flexbox.

**Nuoroda į pilną įrašą Youtube:** <https://www.youtube.com/watch?v=yfoY53QXEnI&ab_channel=TraversyMedia>

#### Git

**Tema:** Git įvadinis kursas

**Pavadinimas:** Git & GitHub Crash Course For Beginners

**Autorius:** Traversy Media

**Autoriaus nuoroda:** <https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA>

**Įkėlimo data:** Feb 5, 2017

**Aprašymas originalo kalba:** In this Git tutorial we will talk about what exactly Git is and we will look at and work with all of the basic and most important commands such as add, commit, status, push and more. This tutorial is very beginner friendly.

**Nuoroda į pilną įrašą Youtube:** <https://www.youtube.com/watch?v=SWYqp7iY_Tc&ab_channel=TraversyMedia>

## Rezultatų pavyzdžiai

| Puslapis            | Nuotraukos nuoroda     |
| ------------------- | ---------------------- |
| Galerija            | `./samples/galery.png` |
| HTML įrašo puslapis | `./samples/html.png`   |
| CSS įrašo puslapis  | `./samples/css.png`    |
| Git įrašo puslapis  | `./samples/git.png`    |
