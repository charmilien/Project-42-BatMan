class Boy{
    constructor()
    {
        this.body=Bodies.circle(300,200,100,{isStatic: true});
        this.radis=200
        this.image=loadAnimation("Images/Walking Frame/walking_1.png","Images/Walking Frame/walking_2.png","Images/Walking Frame/walking_3.png","Images/Walking Frame/walking_4.png","Images/Walking Frame/walking_5.png","Images/Walking Frame/walking_6.png","Images/Walking Frame/walking_7.png","Images/Walking Frame/walking_8.png")
        World.add(world,this.body) 
    }

    display()
    {
        animation(this.image,this.body.position.x,this.body.position.y+195)
    }

}