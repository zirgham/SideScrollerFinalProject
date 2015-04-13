﻿/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 

module objects {
    // CLOUD CLASS
    export class Cloud extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("cloud");
            this.sound = "thunder";
            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y += this._dy;
            this.x -= this._dx;

            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            /*
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) - 2;
            */

            this.x = 1000 + this.width;
            this.y = Math.floor(Math.random() * 400);
            this._dx = Math.floor(Math.random() * 5) + 5;
            
            this._dy = Math.floor(Math.random() * 5) - 2;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
            /*
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
            */
        }

    }

}  