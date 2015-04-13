﻿/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 

/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

/// <reference path="../objects/scoreboard.ts" />

module states {
    // MENU STATE CLASS
    export class Menu {
        // Game Objects 
        public game: createjs.Container;
        public ocean: objects.Ocean;
        public mailPilotLabel: objects.Label;
        public playButton: objects.Button;
        public instructionsButton: objects.Button;

        public play: boolean = false;
        public instructions: boolean = false;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            

            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //Game Logo
            var logo = new createjs.Bitmap("assets/images/logo.png");
            logo.x = 350;
            logo.y = 30;
            this.game.addChild(logo);

            /*
            this.mailPilotLabel = new objects.Label(500, 60, "MAIL PILOT");
            this.mailPilotLabel.font = "60px Consolas";
            this.mailPilotLabel.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel);
            */

            //Play Button
            this.playButton = new objects.Button(600, 360, "playButton");
            this.playButton.on("click", this.playClicked, this);
            this.game.addChild(this.playButton);

            //Instructions Button
            this.instructionsButton = new objects.Button(350, 360, "instructionsLogo");
            this.instructionsButton.on("click", this.instructionsClicked, this);
            this.game.addChild(this.instructionsButton);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        public playClicked() {
            this.play = true;
        }

        public instructionsClicked() {
            this.instructions = true;
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {

            this.ocean.update();

            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }

            if (this.instructions) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.INSTRUCTIONS_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage

        } // Update Method

    } // Menu Class


} // States Module