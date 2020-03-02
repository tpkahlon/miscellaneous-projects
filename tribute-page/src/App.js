import React from "react";
import "./App.scss";
import Iframe from "react-iframe";
import Particles from "react-particles-js";
import { FaRegHandPointRight } from "react-icons/fa";
import { MdLabelOutline } from "react-icons/md";

const App = () => {
  return (
    <>
      <header className="header">
        <section className="text">
          <h1 className="h1">Hey, Baby!</h1>
          <h2 className="h2">I am Johnny Bravo, the one-man army!</h2>
        </section>
      </header>
      <main className="main">
        <blockquote
          className="blockquote"
          cite="https://en.wikipedia.org/wiki/Johnny_Bravo"
        >
          <span>
            "When Johnny Bravo first came out, I don't think a lot of people
            didn't have high hopes for it, and I think it was really cool that
            prove exactly what kind of character he was. No one really thought
            it was going to go anywhere. Not only has it gone somewhere, it's
            actually still around, it's very iconic now, 15, 16 years later."
          </span>
          <cite className="cite">
            <strong>Writer/Director:</strong>{" "}
            <a
              href="https://en.wikipedia.org/wiki/Butch_Hartman"
              target="_blank"
              rel="noopener noreferrer"
            >
              Butch Hartman
            </a>
          </cite>
        </blockquote>
        <hr />
        <article>
          <div class="d-flex">
            <FaRegHandPointRight />
            <h2>SEASONS</h2>
          </div>
          <a
            className="btn btn-default btn-primary"
            href="https://www.musichq.net/tv/johnny-bravo-38218"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch All Seasons
          </a>
        </article>
        <hr />
        <article>
          <div class="d-flex">
            <FaRegHandPointRight />
            <h2>VALENTINE DAY SPECIAL</h2>
          </div>
          <Iframe
            url="https://www.youtube.com/embed/f8oT4JCkbS4"
            width="100%"
            height="450px"
            display="initial"
            position="relative"
          />
        </article>
        <hr />
        <article>
          <div class="d-flex">
            <FaRegHandPointRight />
            <h2>DIALOGUES</h2>
          </div>
          <Iframe
            url="https://www.soundboard.com/sb/johnny_bravo_clips"
            width="100%"
            height="450px"
            display="initial"
            position="relative"
          />
        </article>
        <hr />
        <article>
          <div class="d-flex">
            <FaRegHandPointRight />
            <h2>HISTORY</h2>
          </div>
          <p>
            Johnny Bravo is an American animated television series created by
            Van Partible for Cartoon Network, and the second of the network's
            Cartoon Cartoons, which aired from July 14, 1997, to August 27,
            2004. The series centers on the title character, a
            sunglasses-wearing, muscular young man who tries to get women to
            date him, though he is usually unsuccessful. He ends up in bizarre
            situations and predicaments, often accompanied by celebrity guest
            characters such as Donny Osmond or Adam West. Throughout its run,
            the show was known for its adult humor and pop culture references.
            Johnny himself is loosely based on Elvis Presley.
          </p>
          <p>
            Partible pitched the series to Hanna-Barbera's animation showcase
            What a Cartoon!, basing it on his senior thesis project he produced
            while attending Loyola Marymount University. A pilot short aired on
            Cartoon Network in 1995. The series was renewed for a second season
            in 1999, during which Partible left and the show was retooled under
            the direction of Kirk Tingblad. In 2003, Partible returned for the
            series' fourth season, restoring it to its original format and
            style. A total of four seasons and 67 episodes have aired. The first
            three seasons were produced by Hanna-Barbera Cartoons, and the
            fourth season was produced by Cartoon Network Studios.
          </p>
          <p>
            Johnny Bravo was nominated for four Annie Awards, one YoungStar
            Award, and two Golden Reel Awards. The series is notable for helping
            launch the careers of several animators, including Seth MacFarlane
            and Butch Hartman. Spin-off media include comic books, DVD and VHS
            releases, collectible toys, and video games.
          </p>
        </article>
        <article>
          <div class="d-flex">
            <FaRegHandPointRight />
            <h2>PREMISE</h2>
          </div>
          <p>
            The series centers on Johnny Bravo (voiced by Jeff Bennett), a
            sunglasses-wearing, muscular, conceited narcissist and dimwitted
            self-proclaimed womanizer with a pompadour and an Elvis
            Presley-esque voice, apparently of Italian heritage, who lives in
            Aron City (a nod to Presley's middle name). Episodes typically
            revolve around him trying to get a woman to go on a date with him,
            though his advances are usually rejected and result in the woman in
            question harming him in a comedic way. Johnny's companions are Bunny
            "Momma" Bravo (Brenda Vaccaro), his lively, caring, extroverted,
            equally dimwitted mother; and Little Suzy (Mae Whitman), a talkative
            and intelligent little girl from the neighborhood who likes to annoy
            Johnny, although he rarely remembers her name.
          </p>
          <p>
            Recurring characters include Carl Chryniszzswics (Tom Kenny), an
            eccentric and timid nerd who idolizes Johnny despite being bossed
            around by him; Pops (Larry Drake), the unscrupulous owner of the
            local diner who provides advice to Johnny, along with food made from
            atypical ingredients; Master Hamma (Brian Tochi), a Japanese martial
            arts instructor who teaches Johnny; Donny Osmond (himself), a cheery
            and optimistic teen idol who irritates Johnny; and Jungle Boy (Cody
            Dorkin), a jungle-dwelling feral child with super strength and the
            ability to speak to animals.
          </p>
          <p>
            Much of the series' humor is derived from celebrity guest star
            appearances and references to popular culture. For example; one
            first season episode is based around homages to The Twilight Zone,
            and in another episode, one of the Village People can be seen in the
            background. The series has had numerous guest stars, including Adam
            West, Shaquille O'Neal, Seth Green and the previously mentioned
            Donny Osmond. In the first season, creator Van Partible intended for
            the show's middle segment to be a form of "Johnny Bravo Meets...", a
            parody of The New Scooby-Doo Movies, which would feature appearances
            from popular 1970s icons, but guest stars were used informally after
            the second season began. Many Hanna-Barbera characters had cameo
            appearances in the series, including the cast of Scooby-Doo, Speed
            Buggy, Jabberjaw, Fred Flintstone, Yogi Bear, The Blue Falcon, Black
            Widow and Huckleberry Hound.
          </p>
          <p>
            Adult humor is a frequent presence. In one episode, when Suzy calls
            Johnny to ask if he wants to come over, Johnny nonchalantly tells
            her to "[call] back in 15 years when [she is] a co-ed.", and in
            another, when Johnny is hit by a tranquilizer dart and is informed
            he has only "30 seconds of consciousness left" and to "use it
            wisely", he immediately pulls out a Girlie Magazine.
          </p>
          <p>
            In regard to the adult humor, Hartman stated "...being concerned
            with the content of the episodes wasn't our main focus", and creator
            Partible remembers that "No one was really watching Cartoon Network
            [...] As far as content, they were pretty lenient on all the kind of
            things that were going on."
          </p>
        </article>
        <article>
          <div class="d-flex">
            <FaRegHandPointRight />
            <h2>PRODUCTION</h2>
          </div>
          <div className="d-flex mb-3">
            <MdLabelOutline />
            <h3>DEVELOPMENT</h3>
          </div>
          <p>
            While attending Loyola Marymount University, Van Partible produced
            his senior thesis project Mess O' Blues (1993), an animated short
            film about an Elvis Presley impersonator. Partible's animation
            professor showed the film to a friend who worked for Hanna-Barbera,
            and the studio loved the film. They asked Partible to develop it
            into a pitch for a seven-minute short, prompting him to sell the
            project to Hanna-Barbera.
          </p>
          <p>
            For the new short, Partible revised his main character from Mess O'
            Blues, renaming him "Johnny Bravo" and making him "this '50s iconic
            James Dean-looking character that talked like Elvis." Voice actor
            Jeff Bennett was cast as Johnny, based solely on his young, hyped
            Elvis impression. Partible, with a small team of animators, animated
            the short themselves in-house at Hanna-Barbera using digital ink and
            paint.
          </p>
          <p>
            The short, titled Johnny Bravo, was aired on Cartoon Network's
            animation showcase, World Premiere Toons, on March 26, 1995. Two
            more shorts followed: Jungle Boy in "Mr. Monkeyman" and Johnny Bravo
            and the Amazon Women.
          </p>
          <p>
            The name Johnny Bravo derived from creator Van Partible's middle
            name, Giovanni Bravo, as Giovanni is an Italian name for John or
            Johnny, or possibly from an alias given to Greg Brady in The Brady
            Bunch episode “Adios Johnny Bravo”.
          </p>
          <section>
            <div className="d-flex my-3">
              <MdLabelOutline />
              <h3>ORIGINAL SEASONS</h3>
            </div>
            <p>
              The popularity of the shorts led to Cartoon Network commissioning
              a first season of Johnny Bravo, consisting of 13 episodes. The
              crew of the first season consisted of several writers, animators,
              and directors from World Premiere Toons, including Seth
              MacFarlane, Butch Hartman, Steve Marmel, and John McIntyre.
              Veteran animator Joseph Barbera also served as a creative
              consultant and mentor for the first season. Partible stated in a
              1997 interview the goal of the series was to have "animation
              reminiscent of the old Hanna-Barbera cartoons".
            </p>
            <p>
              Johnny Bravo premiered on July 14, 1997, and the first season
              completed production in December of that year.
            </p>
          </section>
          <section>
            <div className="d-flex my-3">
              <MdLabelOutline />
              <h3>RETOOL</h3>
            </div>
            <p>
              After the first season, Johnny Bravo was put on hiatus, until it
              was picked up for an unexpected second season in 1999. Van
              Partible left production and Kirk Tingblad took over as director,
              leading to a major retooling in the show's visual style, tone,
              humor, and characters. The show retained this format for the third
              season.
            </p>
            <p>
              The series sat in limbo once again until it was renewed for a
              fourth season in 2003, which aired in 2004. The final season of
              the series returned to the humor of the original shorts and first
              season of the series, although the Jungle Boy character from the
              first season never returned.
            </p>
          </section>
        </article>
        <article>
          <div class="d-flex">
            <FaRegHandPointRight />
            <h2>EPISODES</h2>
          </div>
          <table className="table table-striped table-bordered table-hover table-responsive">
            <tbody>
              <tr>
                <th>Season</th>
                <th>Episodes</th>
                <th>First aired</th>
                <th>Last aired</th>
                <th>Network</th>
              </tr>
              <tr>
                <td>Pilots</td>
                <td>3</td>
                <td>March&nbsp;26,&nbsp;1995</td>
                <td>January&nbsp;1,&nbsp;1997</td>
                <td>Cartoon Network</td>
              </tr>
              <tr>
                <td>1</td>
                <td>13</td>
                <td>July&nbsp;14,&nbsp;1997</td>
                <td>December&nbsp;15,&nbsp;1997</td>
                <td>Cartoon Network</td>
              </tr>
              <tr>
                <td>2</td>
                <td>22</td>
                <td>July&nbsp;2,&nbsp;1999</td>
                <td>January&nbsp;28,&nbsp;2000</td>
                <td>Cartoon Network</td>
              </tr>
              <tr>
                <td>3</td>
                <td>17</td>
                <td>August&nbsp;11,&nbsp;2000</td>
                <td>June&nbsp;14,&nbsp;2002</td>
                <td>Cartoon Network</td>
              </tr>
              <tr>
                <td>4</td>
                <td>13</td>
                <td>February&nbsp;20,&nbsp;2004</td>
                <td>August&nbsp;27,&nbsp;2004</td>
                <td>Cartoon Network</td>
              </tr>
              <tr>
                <td>Specials</td>
                <td>2</td>
                <td>December&nbsp;7,&nbsp;2001</td>
                <td>February&nbsp;14,&nbsp;2004</td>
                <td>Cartoon Network</td>
              </tr>
              <tr>
                <td colSpan="2">India special</td>
                <td colSpan="2">June&nbsp;28,&nbsp;2009</td>
                <td>Cartoon Network (IND)</td>
              </tr>
              <tr>
                <td colSpan="2">Television film</td>
                <td colSpan="2">November&nbsp;4,&nbsp;2011</td>
                <td>Cartoon Network (IND)</td>
              </tr>
            </tbody>
          </table>
        </article>
        <article>
          <div class="d-flex">
            <FaRegHandPointRight />
            <h2>RECEPTION</h2>
          </div>
          <div className="d-flex mb-3">
            <MdLabelOutline />
            <h3>CRITICAL RECEPTION</h3>
          </div>
          <p>
            In 2009, IGN ranked Johnny Bravo No. 71 for its Top 100 Animated
            Series list.
          </p>
          <section>
            <div className="d-flex my-3">
              <MdLabelOutline />
              <h3>LEGACY AND INFLUENCE</h3>
            </div>
            <p>
              After the series ended in 2004, the No. 5 Kellogg's Chevrolet was
              given a special paint scheme with Johnny Bravo on the hood. It was
              driven by Kyle Busch in the 2005 Sharpie 500 NASCAR race.
            </p>
            <p>
              The title character is considered "iconic", and his catchphrases
              are relatively common in popular culture.
            </p>
            <p>
              The show's creative team went on to create many successful
              television series throughout the 1990s and 2000s, including writer
              Seth MacFarlane, creator of the popular animated series Family
              Guy. Shortly after the series' first season was completed,
              writer/director Butch Hartman left to work on Nickelodeon's Oh
              Yeah! Cartoons, from which those shorts spun off his own success,
              The Fairly OddParents. Steve Marmel, writer for Johnny Bravo, has
              been a producer and writer for The Fairly OddParents since its
              premiere in 2001. In addition to Johnny Bravo, director John
              McIntyre directed episodes of several other Cartoon Cartoons, and
              more recently served as a supervising director on Cartoon
              Network's original series The Marvelous Misadventures of Flapjack.
            </p>
          </section>
        </article>
        <article>
          <div class="d-flex">
            <FaRegHandPointRight />
            <h2>SPIN-OFFS</h2>
          </div>
          <div className="d-flex mb-3">
            <MdLabelOutline />
            <h3>JBVO: YOUR ALL REQUEST CARTOON SHOW</h3>
          </div>
          <p>
            JBVO: Your All Request Cartoon Show is a short-lived programming
            block that aired Sundays on Cartoon Network from April 2, 2000, to
            summer of 2001. It was hosted by Johnny Bravo, along with some
            infrequent guest stars such as Chicken (from Cow and Chicken).
            Callers would write into the show via mail or through the Cartoon
            Network website to call the show and request a cartoon from Cartoon
            Network's cartoon library, which would then be played, with an
            exception of half-hour-long shows. Notably, one caller of the show
            named Jennifer requested an episode of Dragon Ball Z. Being that it
            was a half-hour long, Johnny regretfully had to fast-forward through
            the entire episode with Johnny providing only expositional
            commentary. Afterward, Johnny apologized to the caller for the
            inconvenience.
          </p>
          <p>
            After the series ended, a spin-off of JBVO named Toon FM was
            launched in Europe. The series had a few unique changes, such as a
            Godzilla presenting the weather.
          </p>
          <p>
            There was also a similar spin-off of the JBVO concept itself
            entitled Viva Las Bravo, a summer block that aired from 2005 to 2006
            on certain European variants of Cartoon Network. Every day Johnny
            would announce three cartoons, with the one getting the highest
            votes via email or on CartoonNetworkHQ.net would be shown for two
            hours the next day. He would also constantly appear in commercial
            breaks, cracking jokes or answering humorous emails and phone calls.
          </p>
        </article>
        <article>
          <div class="d-flex">
            <FaRegHandPointRight />
            <h2>MEDIA</h2>
          </div>
          <section>
            <div className="d-flex mb-3">
              <MdLabelOutline />
              <h3>COMICS</h3>
            </div>
            <p>
              In February 2013, IDW Publishing announced a partnership with
              Cartoon Network to produce comics based on its properties. Johnny
              Bravo was one of the titles announced to be published.
            </p>
          </section>
          <section>
            <div className="d-flex my-3">
              <MdLabelOutline />
              <h3>VIDEO GAMES</h3>
            </div>
            <p>
              A video game titled Johnny Bravo In The Hukka Mega Mighty Ultra
              Extreme Date-O-Rama! was released on June 9, 2009 for the Nintendo
              DS and PlayStation 2. The PlayStation 2 version was released
              exclusively in Europe and Australia by Blast Entertainment, while
              the DS version was released in North America by MumboJumbo.
            </p>
            <p>
              Characters from Johnny Bravo are featured in the Cartoon Network
              games Cartoon Network: Block Party, Cartoon Network Racing,
              Cartoon Network Speedway, and Cartoon Network Universe:
              FusionFall.
            </p>
          </section>
          <section>
            <div className="d-flex my-3">
              <MdLabelOutline />
              <h3>CANCELLED FILM</h3>
            </div>
            <p>
              It was reported in 2002 that Warner Bros. had secured the rights
              for a live-action Johnny Bravo feature film as a potential
              starring vehicle for Dwayne "The Rock" Johnson". However, no
              further developments regarding this project have been announced
              since.
            </p>
          </section>
        </article>
      </main>
      <footer className="footer">
        <Particles
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%"
          }}
          className="parent"
          canvasClassName="child"
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 300
                }
              },
              color: {
                value: "#000000"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 5,
                  color: "#204572"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.4419296542689612,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ff0000",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
        />
        <span className="message">Long Live Johnny Bravo!</span>
        <span className="author">
          Weaved with <span className="heartbeat">❤</span> by&nbsp;
          <a
            href="https://github.com/tpkahlon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tej Kahlon
          </a>
        </span>
      </footer>
    </>
  );
};

export default App;
