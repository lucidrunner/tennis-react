import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

const Home = () => {
  return (
    <section className="home page-container">
      <section className="index-articles">
        <article id="about" className="info-block index-article bordered">
          <article>
            <h2>Om Klubben</h2>
            <p>
              Klubben bildades som JTK, Jönköpings Tennis Klubb 1903 och är en
              av landets äldsta klubbar. En av de stora initiativtagarna till
              klubben var syskonen Hay som dessutom var huvudägare i vad som
              allmänt kallades för Tändsticksfabriken. Även i Huskvarna fanns
              intresse för sporten och 1924 bildades HTS, Huskvarna Tennis
              Sällskap. 1981 flyttade båda klubbarna sin verksamhet till
              Rosenlundsbackarna och en gemensam idrottshall – Racketcentrum
              Ekonomiska Förening. 1991 slog klubbarna samman till Huskvarna
              Jönköping Tennisklubb, för att främja tennisens utveckling i
              Jönköpings Kommun Efter två årsmöten, varav ett extra, bestämde
              klubben att från och med mars 2011 göra ett namnbyte och återgår
              till ursprungsnamnet Jönköpings Tennisklubb (JTK).
            </p>
          </article>
        </article>

        <article id="courts" className="info-block index-article bordered">
          <article>
            <h2>Våra Banor</h2>
            <p>
              Det huvudsakliga målet för vuxenträning är att ge
              tennisintresserade vuxna möjlighet att lära sig tennisspelet, allt
              efter egen förmåga och intresse. I vuxenträningen kommer du att
              lära dig och förbättra de olika tennisslagen samt lära dig
              spelregler i singel- och dubbelspel. Varje person ska få möjlighet
              att under ett träningspass få individuell instruktion utifrån sina
              behov. Vuxentennisens grupper indelas i största möjliga mån för
              att vara så jämspelta som möjligt. Till vuxentennis hör även
              lunchtennis och frukosttennis.
            </p>
          </article>
          <p>
            <Link to="/banor#booking">Boka Banor</Link>
          </p>
        </article>

        <article id="equipment" className="info-block index-article bordered">
          <article>
            <h2>Våra Lokaler</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quae quis ducimus animi eius. Enim, porro, nemo vero laboriosam
              modi labore dolore numquam commodi nisi obcaecati harum suscipit
              cumque sit! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consequuntur modi praesentium quisquam, nemo voluptate quam
              autem libero accusantium reprehenderit odio necessitatibus quis
              nesciunt soluta dolor laudantium harum nostrum iusto placeat.
            </p>
            <p>
              Vi erbjuder även bastu - då exercitationem voluptatum sunt fugiat
              perferendis enim cum molestias veritatis quas consequuntur ut ex,
              sed hic facilis nostrum vel? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </article>

          <div>
            <p className="link-text">
              Boka Omklädningsrum:
              <span style={{ display: "inline-block", paddingLeft: "5px" }}>
                <Link to="/omkl/booking/herr" state={{ room: "herr" }}>
                  {" "}
                  Herr
                </Link>{" "}
                |
                <Link
                  to="/omkl/booking/dam"
                  state={{ room: "dam" }}
                  style={{ paddingLeft: "5px" }}
                >
                  Dam
                </Link>
              </span>
            </p>
            <p>
              <Link to="/bastu#booking">Boka Bastu</Link>
            </p>
          </div>
        </article>
      </section>

      <section className="side-column">
        <article id="events" className="info-block bordered">
          <article>
            <h2>Events</h2>
            <p>8/11 - Föreläsning</p>
            <p>9/11 - Föreläsning</p>
            <p>Fredag v. 45 - After Work</p>
          </article>
        </article>
        <article id="news" className="info-block bordered">
          <h2>Nyheter</h2>
          <article className="side-column-article">
            <h3>Klubben öppnar för säsongen!</h3>
            <p>
              Den 20e mars öppnar vi återigen portarna. Yadda yadda etc etc.
            </p>
          </article>
          <article className="side-column-article">
            <h3>Klubben stänger för säsongen!</h3>
            <p>
              Efter en lång säsong stänger vi återigen portarna idag, den 21
              mars. Yadda yadda etc etc.
            </p>
          </article>
        </article>
        <article id="bookings" className="info-block bordered daily-bookings">
          <h2>Daglig bokningar</h2>
          <p>Coming soon</p>
        </article>
      </section>
    </section>
  );
};

export default Home;
