class paper
{
 contructor(x,y,r)
 {



    paper=createSprite(100,150,50,50)
    paper.shapeColor=blue;
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2


}
    this.x=x
    this.y=y
    this.r=rthis.bodies=Bodies.circle(this.x,this.y,this.r/2,options)
    World.add(world,this.body);


}
display()
{

    var paperpos=this.body.position;

    push()
    translate(paperpos.x,paperpos.y);
    strokeWeight(3);
    fill(255,0,255)
    elipse(0,0,this.r,this.r);
    pop()

}
}