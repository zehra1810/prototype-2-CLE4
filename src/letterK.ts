//IMPORT
import * as PIXI from "pixi.js";
import { Game } from "./game";

//ENEMY CLASS
export class LetterK extends PIXI.Sprite {

    //GLOBALS
    private game: Game;
    public speed: number = 4;

    //CONSTRUCTOR
    constructor(texture: PIXI.Texture, game: Game) {
        super(texture);
        this.game = game;
        this.pivot.set(0.5)

        this.speed = 1.5;
        this.x = 100
        this.y = -700

        this.scale.set(0.30, 0.30);

    }

    //ANIMATION
  public update() {
    this.y += this.speed
  
      this.keepInScreen();
    }

    //KEEP IN SCREEN
  private keepInScreen() {
    if (this.getBounds().top > this.game.pixi.screen.bottom) {
      this.y = -this.getBounds().height;
    }
  }
}