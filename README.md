# 📚 Bookmarker Mini

## Syfte
Syftet med projektet är att skapa en enkel webbapplikation som låter användaren spara, visa och ta bort bokmärken(titel + URL).  
Målet är att öva på versionshantering (Git/GitHub), brancher, pull requests och att arbeta enligt agila principer.

---

## Hur det fungerar
Användaren kan:
- Lägga till ett bokmärke genom att skriva in titel och URL.  
- Visa alla sparade bokmärken i en lista.  
- Klicka på en länk för att öppna den i en ny flik.  
- Ta bort ett bokmärke med knappen **"Ta bort"**.  

Alla bokmärken sparas lokalt i webbläsarens **LocalStorage**, vilket gör att de finns kvar även efter att sidan laddas om.

---

## Teknologier
- **HTML5** – struktur av sidan  
- **CSS3** – styling och responsiv design  
- **JavaScript (ES6)** – logik för att spara, rendera och ta bort bokmärken  
- **LocalStorage** – lagring av data i webbläsaren  

---

## Hur man kör
1. Klona projektet till din dator:
   ```bash
   git clone https://github.com/arezooshahgaldi-lang/Bookmarker-Exam.git

   Trello:https://trello.com/invite/b/68f5130e72f7a4113e81c7b3/ATTIcb9fd5cf42023e4b2ca2465096c0c46fA641D9D0/bookmarker-mini-arezoo

## Roll i projektet
Jag har arbetat individuellt med projektet och implementerat följande user stories:
Varje user story har utvecklats i en separat branch med pull requests enligt Git-flöde.

US1: Visa boklista .Lade till funktion för att användaren kan ange boktitel, författarens namn, och URL.
Us1 Trello: https://trello.com/c/R9R5WXRT/8-1-som-en-anv%C3%A4ndare-vill-jag-kunna-l%C3%A4gga-till-ett-bokm%C3%A4rke-som-inneh%C3%A5ller-titel-f%C3%B6rfattarens-namn-och-url-s%C3%A5-att-jag-l%C3%A4tt-kan-kom

Git branch för detta user story: `feature/us1-author-bookNames-links`
https://github.com/arezooshahgaldi-lang/Bookmarker-Exam/pull/2#issue-3581155319


US2: Spara nya bokmärken i localStorage.Lade till en funktion som visar en lista med alla mina bokmärken.
https://trello.com/c/QR7OI3yV/9-2-som-en-anv%C3%A4ndare-vill-jag-kunna-se-en-lista-med-alla-mina-bokm%C3%A4rken-s%C3%A5-att-jag-enkelt-kan-hitta-dem
Git branch för detta user story:`feature/us2-booklist`
https://github.com/arezooshahgaldi-lang/Bookmarker-Exam/pull/4#issue-3581584545



US3: Öppna länkar i ny flik vid klick.Lade till funktionalitet för att länkar i bokmärken öppnas i en ny flik.
https://trello.com/c/tEkXgHWo/10-3-anv%C3%A4ndaren-ska-kunna-klicka-p%C3%A5-ett-bokm%C3%A4rke-i-listan-och-l%C3%A4nken-ska-%C3%B6ppnas-i-en-ny-flik
Git branch för detta user story:`feature/us3-open-newTab-click`
https://github.com/arezooshahgaldi-lang/Bookmarker-Exam/pull/5#issue-3581638661



US4: Ta bort bokmärken med en knapp.Lade till en knapp för att ta bort ett bokmärke från listan.
https://trello.com/c/JhCgNf2o/11-4-det-ska-finnas-en-knapp-eller-ikon-f%C3%B6r-att-ta-bort-ett-bokm%C3%A4rke

Git branch för detta user story:`feature/us4-delete-bookmark`
https://github.com/arezooshahgaldi-lang/Bookmarker-Exam/pull/6#issue-3581749014



🔍 **Reflektion**

Det här projektet hjälpte mig att förstå:

- hur Git-flödet fungerar i praktiken (branch, commit, PR, merge)

- hur man arbetar iterativt med små, fokuserade ändringar

- hur LocalStorage kan användas för att hantera data i en enkel webbapp

- vikten av tydliga commit-meddelanden och PR-beskrivningar

Jag lärde mig också hur man skapar en responsiv design och använder JavaScript för att dynamiskt uppdatera innehåll på sidan.

## Framtida förbätringar:

Möjlighet att redigera ett bokmärke.

Sortera bokmärken alfabetiskt.

Lägga till sökfält för att hitta bokmärken snabbare.