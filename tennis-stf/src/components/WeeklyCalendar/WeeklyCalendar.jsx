import React from "react";

const WeeklyCalendar = () => {
    return (
        <section className="weekly-calendar ">

        </section>
    )
}

export default WeeklyCalendar;


//Layout Idea for this

/*
    | MON | TIS | ONS | TOR | FRE | LÖR | SÖN |
  8 |X Z O|     |     |     |     |     |     |
  9 |X Z O|     |     |     |     |     |     |
 10 |X H B|     |     |     |     |     |     |
 11 |X H B|     |     |     |     |     |     |
 12 |X Y B|     |     |     |     |     |     |
 13 |X Y B|     |     |     |     |     |     |
 14 |  B  |     |     |     |     |     |     |
etc
x = lång bokning, court 1
BASICALLY
Vi splittar varje i så många grids-kolumner vi behöver (4 + 2 för varje kolumn
    i det här fallet) - Varje kolumn är auto
    Varje översta är ett span 4 block och bestämmer bredden på hela 
    EN Alternativ idé skulle vara att göra varje kolumn till en grid och ha en topp-grid / flex för att hantera det
    Varje timme är en row och 4 bred, använd border för att... ge border :P
    Om saker är fyllda lägger vi till en fill-klass på de så att de får färg
*/
