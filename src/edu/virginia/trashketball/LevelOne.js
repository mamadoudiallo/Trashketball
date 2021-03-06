/**
 * BasicLevelObjects.js
 * Contains methods for creating the walls of the basic level
 */

"use strict";

class LevelOne extends Level {

    /**
     * Loads this level onto the gameInstance
     * gameInstance is the object calling this method
     */
    static load(gameInstance) {
        var wallNode = this.makeWallLayer();
        var ball = makeBall();
        var trash = makeTrash();
        var player = makePlayer();
        var background = this.makeBackground();

        gameInstance.currentLevel = LevelOne;

        gameInstance.background = background;
        gameInstance.walls  = wallNode.children;
        gameInstance.trash  = trash;
        gameInstance.balls  = [ball];
        gameInstance.balls[0].startingPosition = false;
        gameInstance.player = player;


        gameInstance.root.addChild(background);
        gameInstance.root.addChild(wallNode);
        gameInstance.root.addChild(player);
        gameInstance.root.addChild(ball);
        gameInstance.root.addChild(trash);
        
        gameInstance.score = 0;
        gameInstance.timeLeft = 60000;
        gameInstance.addRock = 10000;
        gameInstance.timer = this.makeTimer(gameInstance.timeLeft);
        gameInstance.scoreNode = this.makeScoreNode();

        var life = new Sprite("RockCount", "Ball.png");
        life.setScale({x:0.3, y:0.3});
        life.setPosition({x: 50, y: 60});
        gameInstance.root.addChild(life);
        gameInstance.root.addChild(gameInstance.timer);
        gameInstance.root.addChild(gameInstance.scoreNode);
    }



    /**
     * Create and return the timer
     */
    static makeTimer(startTime) {
        var timer = new TimerNode("Timer", "");
        var startTime = startTime;
        var timeStep = 10 * 1000;
        timer.setToStart(startTime, timeStep);
        timer.position = {x:50, y:50};
        timer.fontColor = "white";
        return timer;
    }


    /**
     * Create and return the score node
     */
    static makeScoreNode() {
        var score = new TextNode("Score", "x 0");
        score.position = {x:100, y:95};
        score.fontColor = "white";
        return score;
    }  

    /**
     * Creates and returns parent node of all walls
     * wallLayer is just an empty parent node, with walls as its children
     */
    static makeWallLayer() {
        var wallLayer = new DisplayObjectNode("WallLayer", "");
        var walls = this.makeWalls();

        for (var i = walls.length - 1; i >= 0; i--) {
            wallLayer.addChild(walls[i]);
        }

        return wallLayer;
    }

    /**
     * Creates and returns array of all walls of the level
     */
    static makeWalls() {

        var ground    = this.makeGround();
        var leftWall  = this.makeLeftWall();
        var rightWall = this.makeRightWall();
        var ceiling = this.makeCeiling();

        var walls = [ground, leftWall, rightWall, ceiling];
        return walls;
    }


    /**
     * Creates and returns the ground
     */
    static makeGround() {

        // var ground = new Sprite("Ground", "ground.png");
        var ground = new Sprite("Ground", "ground.png");

        ground.setPosition({x: 0, y: 550});
        //ground.setPivotPoint({x: 168, y: 24});
        //ground.setScaleX(3);

        ground.showHitbox = SHOW_HITBOXES;
        ground.hitbox = new Rectangle({x: 0, y: 10}, 1000, 50);

        return ground;
    }

    /**
     * Creates and returns the left wall
     */
    static makeLeftWall() {

        var leftWall = new Sprite("LeftWall", "woodwallleftb.jpg");

        //leftWall.setRotation(-1 * Math.PI / 2.0);
        leftWall.setPosition({x: 0, y: 50});
        //leftWall.setPivotPoint({x: 25, y: 300});

        leftWall.hitbox = new Rectangle({x:0, y:0}, 50, 600);
        leftWall.showHitbox = SHOW_HITBOXES;

        return leftWall;
    }



    /**
     * Creates and returns the right wall
     */
    static makeRightWall() {

        var rightWall = new Sprite("RightWall", "woodwallrightb.jpg");

        //rightWall.setRotation(1 * Math.PI / 2.0);
        rightWall.setPosition({x: 950, y: 50});
        //rightWall.setPivotPoint({x: 476.5, y: 300});

        rightWall.hitbox = new Rectangle({x:0, y:0}, 50, 600);
        rightWall.showHitbox = SHOW_HITBOXES;

        return rightWall;
    }

    /**
     * Creates and returns the ceiling
     */
    static makeCeiling() {

        var ceiling = new Sprite("Ceiling", "woodceiling2.jpg");

        //ceiling.setRotation(Math.PI);
        ceiling.setPosition({x: 0, y: 0});
        //ceiling.setPivotPoint({x: 476.5, y: 300});

        ceiling.hitbox =  new Rectangle({x:0, y:0}, 1000, 50);
        ceiling.showHitbox = SHOW_HITBOXES;

        return ceiling;
    }


    /**
     * Creates and returns the background
     */
    static makeBackground() {

        var background = new DisplayObjectNode("Background", "EmptyBleachers.png");

        background.setPosition({x: 0, y: 0});
        background.setPivotPoint({x: 0, y: 0});

        return background;
    }

}

