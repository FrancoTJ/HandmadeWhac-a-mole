let players = [];

class Player {
  constructor(name) {
    this.ranking = players.length + 1;
    this.name = name;
    this.bestScore = 0;
  }
}

class Stage {
  //Registra los datos de partida actual
  constructor(attempts, playerName) {
    this.playerName = playerName; //Jugador actual
    this.points = 0; //Puntos totales de la partida
    this.time = 0; //Segundos disponibles
    this.timeoutsMoles = [];
  }
}
