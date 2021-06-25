
class Bob {
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction:0,
            density:0.8
        }
        
        this.body = Bodies.circle(x,y,r, options);
        this.r = r

        World.add(world, this.body);
    }
    display(){
        
        ellipseMode(RADIUS);

        fill("magenta");

        circle(this.body.position.x, this.body.position.y, this.r);

    }       
};