class Drops
{
    constructor()
    {
        this.body=Bodies.circle(random(10,1190),random(0,500),4,{restitution: 0.01,friction:0.0001 })
        this.radius=5;
        World.add(world,this.body)
        this.image=loadImage("Images/thunderbolt/rainDrop.png")
    }

    showRainDrops()
    {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,10,15)
    }

    repeatDrops()
    {
        if(this.body.position.y>height)
        {
            Matter.Body.setPosition(this.body,{x:random(10,1190),y:-1})
        }
    }

}