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

US1: Visa boklista med titel och länk.

US2: Spara nya bokmärken i localStorage.

US3: Öppna länkar i ny flik vid klick.

US4: Ta bort bokmärken med en knapp.

Varje user story har utvecklats i en separat branch med pull requests enligt Git-flöde.

"Jag gjorde en commit i fel branch och när jag bytte till rätt branch så märkte jag att ändringen inte följde med. För att få med den ändringen använde jag cherry-pick för att plocka över committen till den nya branchen."

🔍 Reflektion

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