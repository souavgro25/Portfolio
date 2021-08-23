import Project from "./Project";
// import Project2 from "./Project2";
import esport from "../Images/esport.jpeg";
import game from "../Images/game2.jpeg";
import covid from "../Images/covid.png";
import netflix from "../Images/netflix.png";
import pokemon from "../Images/Pokemon.png";
function Work() {
  return (
    <div id="Work">
      <p className="text-3xl text-gray-200 font-bold ml-5 md:ml-40 lg:ml-60 mb-20 mt-20">
        Some Thing i 've build
      </p>
      <div className="flex flex-col gap-y-28">
        <Project
          image={netflix}
          tech={["react js", "js", "TMDB API"]}
          name="Netflix-clone"
          desc="A movie app which look like netflix it gives information about movies separting them in their categories"
          git="https://github.com/souavgro25/netflix-clone"
          link="https://netflix-clone-36e73.web.app/"
        />

        <Project
          image={covid}
          tech={["react", "js", "material ui", "react charts", "covid API"]}
          name="covid-19_info_app"
          desc="A Portfolio website for esport team who organises esport tornament"
          link="https://covid-19-info-app-99293.web.app/"
          git="https://github.com/souavgro25/covid19-info-app"
        />
        <Project
          image={pokemon}
          tech={["react", "js", "tailwind css", "Poke API"]}
          name="Pokemon Info-app"
          desc="A Pokemon info-app which display information about pokemons by taking data from the pokemon api "
          link="https://happy-heyrovsky-2afe8b.netlify.app/"
          git="https://github.com/souavgro25/Pokemon_App"
        />

        <Project
          image={game}
          tech={["react js", "js", "tailwind css"]}
          name="Game App Interface"
          desc="A game app interface which provides information of gamer stats like
          their play time games played etc, and provides info about new games"
          git="https://github.com/souavgro25/Game-Interface"
          link="https://affectionate-neumann-d7c983.netlify.app/"
        />
        <Project
          image={esport}
          tech={["react", "js", "tailwind css"]}
          name="Esport Website "
          desc="A Portfolio website for esport team who organises esport tornament"
          git="https://github.com/souavgro25/Esporto"
          link="https://agitated-poincare-237188.netlify.app/"
        />
      </div>
    </div>
  );
}

export default Work;
