class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.catapult1= loadImage("sprites/sling1.png");
        this.catapult2= loadImage("sprites/sling2.png");
        this.rubberband= loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            push();

            if (pointA.x>220){
                strokeWeight(3);
                stroke(89, 26, 26);
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y-40);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y-40);
                image(this.rubberband,pointA.x+20,pointA.y-20,15,30);
            }
            else{

                strokeWeight(8);
                stroke(35, 12, 12);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y-40);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y-40);
                image(this.rubberband,pointA.x-30,pointA.y-20,15,30);
            }
            pop();
        }

        image(this.catapult1,200,20);
        image(this.catapult2,170,20);
        
        


    }
    
}