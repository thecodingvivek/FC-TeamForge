<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div class="main">
    <div class="main-body">
      <div class="formation-div">
        <div
          v-if="this.formationquery != null && this.formationquery.length > 0"
          class="formation-title"
        >
          Select Formation
        </div>
        <div v-else class="formation-title">
          At Least 7 Players must be selected
        </div>
        <div class="formation-list">
          <div v-for="formation in formationquery">
            <div class="available-formation" style="color: black">
              <input
                type="radio"
                :value="formation"
                name="Formations"
                v-model="selectedFormation"
              />
              <label for="{{ formation }}">{{ formation }}</label>
            </div>
          </div>
          <div
            class="generate"
            v-if="this.formationquery != null && this.formationquery.length > 0"
            @click="formTeams()"
          >
            Form Teams
          </div>
        </div>
      </div>
      <div class="output-frame">
        <div class="team-formation"></div>
        <div class="team-formation"></div>
      </div>
    </div>
    <div class="side-body">
      <div class="available-players" v-if="isphone == false">
        <input
          type="search"
          class="search"
          v-model="searchValue"
          placeholder="Search"
          @input="searchPlayer(searchValue)"
        />
        <div class="filter-class">
          <div class="filter-text"><p>Filter</p></div>
          <div v-for="position in positionFilter">
            <div class="position" @click="getByPosition(position)">
              {{ position }}
            </div>
          </div>
        </div>
        <div class="result-body">
          <div v-for="player in playerquery">
            <div class="player-query" @click="selectPlayer(player, 0)">
              <!--To add selectPlayer method for toggle between upper box and lower box-->
              {{ player }}
            </div>
          </div>
        </div>
        <div class="mid-section">
          <div class="avail-text">
            <p>Selected Players</p>
            <div class="playercount">{{ playercount }}</div>
          </div>
          <div class="submit" @click="getFormations()">
            <i class="fas fa-check"></i>
          </div>
        </div>
        <div class="available-body">
          <div v-for="player in selectedplayers">
            <div class="selected-player" @click="selectPlayer(player, 1)">
              {{ player }}
            </div>
          </div>
        </div>
      </div>

      <div class="button-div" v-if="isphone == false">
        <div
          class="addPlayer"
          @mouseover="showAddPlayerText(true)"
          @mouseout="showAddPlayerText(false)"
        >
          <router-link to="/newplayer" class="link-newplayer">
            <i class="fas fa-plus"></i>
          </router-link>
          <div class="hoverText" :class="{ show: isAddPlayerHovered }">
            <p>Add New</p>
            <p>Player</p>
          </div>
        </div>
        <div
          class="viewDatabase"
          @mouseover="showViewDatabaseText(true)"
          @mouseout="showViewDatabaseText(false)"
        >
          <router-link to="/database" class="link-database">
            <i class="fas fa-database"></i>
          </router-link>
          <div class="hoverText" :class="{ show: isViewDatabaseHovered }">
            <p>View</p>
            <p>Database</p>
          </div>
        </div>
      </div>
      <div class="button-div" v-if="isphone == true">
        <div class="selectPlayers">
          <div style="font-size: 8px; text-align: center">
            Select<br />Players
          </div>
          <router-link to="/selectPlayers" class="link-selectplayers">
            <i class="fas fa-user" style="text-align: center"></i>
          </router-link>
        </div>
        <div class="addPlayer">
          <div style="font-size: 8px; text-align: center">Add<br />Player</div>
          <router-link to="/newplayer" class="link-newplayer">
            <i class="fas fa-plus"></i>
          </router-link>
        </div>
        <div class="viewDatabase">
          <div style="font-size: 8px; text-align: center">
            View<br />Databse
          </div>
          <router-link to="/database" class="link-database">
            <i class="fas fa-database"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isAddPlayerHovered: false,
      isViewDatabaseHovered: false,
      positionFilter: ["A", "M", "D", "G"],
      playerquery: [],
      selectedplayers: [],
      selectedFormation: "",
      playercount: 0,
      searchValue: "",
      isphone: false,
      formationquery: null,
      positions: {
        Goalkeeper: ["GK"],
        Defender: ["RB", "LB", "CB"],
        Midfielder: ["CDM", "RM", "LM", "CM", "CAM"],
        Attacker: ["RW", "LW", "CF", "ST"],
      },
      showTeam: true,
      team1: {},
      team2: {},
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkOrientation);
    this.checkOrientation();
  },
  methods: {
    showAddPlayerText(state) {
      this.isAddPlayerHovered = state;
    },
    showViewDatabaseText(state) {
      this.isViewDatabaseHovered = state;
    },
    searchPlayer() {
      const parameter = {
        str: this.searchValue,
        present_players: this.selectedplayers,
      };
      this.playerquery = [];
      axios
        .get("http://localhost:5000/api/search_player", { params: parameter })
        .then((response) => {
          console.log(response.data);
          response.data.forEach((element) => {
            this.playerquery.push(element.name);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkOrientation() {
      if (
        window.matchMedia("(max-width: 700px) and (orientation: portrait)")
          .matches
      ) {
        this.isphone = true;
      } else {
        this.isphone = false;
      }
    },
    getFormations() {
      axios
        .get("http://localhost:5000/api/formations", {
          params: { no_p: this.playercount, selected_p: this.selectedplayers },
        })
        .then((res) => {
          this.formationquery = res.data;
          console.log(this.formationquery);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getByPosition(category) {
      console.log(this.selectedFormation);
      let cat;
      this.playerquery = [];
      if (category == "A") cat = "Attacker";
      else if (category == "M") cat = "MidFielder";
      else if (category == "D") cat = "Defender";
      else if (category == "G") cat = "GoalKeeper";
      axios
        .get("http://localhost:5000/api/player_by_category", {
          params: { category: cat, present_players: this.selectedplayers },
        })
        .then((r) => {
          r.data.forEach((element) => {
            this.playerquery.push(element.name);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectPlayer(p, flag) {
      if (flag == 0) {
        this.selectedplayers.push(p);
        this.playerquery = this.playerquery.filter((item) => item !== p);
      } else if (flag == 1) {
        this.selectedplayers = this.selectedplayers.filter(
          (item) => item !== p
        );
        this.playerquery.push(p);
      }
      this.checkselectedplength();
    },
    checkselectedplength() {
      if (this.selectedplayers == null || this.selectedplayers == undefined)
        this.playercount = 0;
      else this.playercount = this.selectedplayers.length;
    },
    formTeams() {
      this.showTeam = true;
      console.log(this.selectedFormation);
      console.log(this.selectedplayers)
      const catl = this.selectedFormation.split("-");
      const formationToSend = {
        "Goalkeeper":catl[0],
        "Defender":catl[1],
        "Midfielder":catl[2],
        "Attacker":catl[3]
      }

    },
  },
};
</script>

<style>
@import url("./static/App.css");
</style>
