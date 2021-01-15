const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;

var engine,world;
var boy, drops=[];
var rain, thunder,thsprite;

function preload(){
    rain=loadSound("Images/thunderbolt/rain.wav")
    thunder=loadSound("Images/thunderbolt/thunder.wav")

    th1=loadImage("Images/thunderbolt/1.png")
    th2=loadImage("Images/thunderbolt/2.png")
    th3=loadImage("Images/thunderbolt/3.png")
    th4=loadImage("Images/thunderbolt/4.png")
}

function setup()
{
    createCanvas(1200,580)
    engine=Engine.create();
    world=engine.world;
    boy=new Boy()
    rain.play()

        if(frameCount % 30 ===0)
        {
            for(var i=0;i<100;i++)
            {
                drops.push(new Drops())
            }
        }
        console.log(boy)
}

function draw()
{
    background(0)
    Engine.update(engine)
    boy.display();
    thunders()
        for(var i=0;i<drops.length;i++)
        {
            drops[i].showRainDrops()
            drops[i].repeatDrops()
        }  
    drawSprites();
}   

function thunders()
{
    if(frameCount % 150===0)
    {
        thsprite=createSprite(random(600,1100),random(30,60),100,100)
        var rand=Math.round(random(1,4))
                switch(rand)
                {
                case 1 : thsprite.addImage(th1)
                break;
                case 2 : thsprite.addImage(th2)
                break;
                case 3 : thsprite.addImage(th3)
                break;
                case 4 : thsprite.addImage(th4)
                break;
                default : break;
                }
        thsprite.lifetime=60
        thsprite.scale=0.5
        console.log("thunder")
        thunder.play()
              
    } 
}