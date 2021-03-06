"use strict";

/**
 * A basic polygon class. Good for hitboxes and collisions
 * 
 */

class Rectangle {
    
    // Top left point: {'x': x, 'y' y}
    constructor(topLeftPoint, width, height) {
        this.x = topLeftPoint.x;
        this.y = topLeftPoint.y;
        this.width = width;
        this.height = height;
        this.shape = "Rectangle";
    }


    /** 
     * Returns true iff the point is inside the rectangle
     * point: {'x': x, 'y': x}
     */
    containsPoint(point) {
        if (point.x > this.getMaxX()) return false;
        if (point.x < this.getMinX()) return false;
        if (point.y > this.getMaxY()) return false;
        if (point.y < this.getMinY()) return false;
        return true;
    }

    /**
     * Return this Rectangle as a polygon
     */
    toPolygon() {
        var points = [];
        points[0] = {x: this.x,              y: this.y};
        points[1] = {x: this.x,              y: this.y + this.height};
        points[2] = {x: this.x + this.width, y: this.y + this.height};
        points[3] = {x: this.x + this.width, y: this.y};
        var polygon = new Polygon(points, this.shape);
        return polygon;
    }

    

    /* The following functions return the max/min X/Y values of the rectangle */
    getMaxX() {return this.x + this.width;}
    getMaxY() {return this.y + this.height;}
    getMinX() {return this.x;}
    getMinY() {return this.y;}

}
