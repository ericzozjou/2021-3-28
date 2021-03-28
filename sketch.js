//let nb;
//let nb2;
//let nb3;
let nbarray = [];

// 初始內容
function setup() {
  createCanvas(600, 600, WEBGL); // 決定 使用 3D 方式進行渲染
  for(let i=0;i<15;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(50,-height/2+(height/5)*i,0,50));
  }
  
  //nb = new myBox(50,50,0,50);
  //nb2 = new myBox(-50,150,0,25);
  //nb3 = new myBox(-150,100,0,50);
}
function draw() {
  background(80);
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    /*
    if (mouseIsPressed){
      fill(0,255,0);
    }else{
      fill(255,0,0);
    }
    */
    v.display();
  })
  noFill();
  push();
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      rotateZ(frameCount * 0.03);
      stroke(100, 104, 200);  
      sphere(800, 3, 3);
      
    pop();
  noFill();
  push();
      rotateX(frameCount * 0.02);
      rotateY(frameCount * 0.02);
      rotateZ(frameCount * 0.01);
      stroke(100, 104, 200);
      sphere(800, 3, 3); 
      
    pop();
  noFill();
  push();
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.02);
      rotateZ(frameCount * 0.02);
      stroke(100, 104, 200);
      sphere(800, 3, 3);
      
    pop();
}
// 自訂一個類別物件
class myBox{
  


    constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
    this.my = 1;
    // 隨機產生物件顏色
    this.cc = color(random(255),128,random(255));
    // 衛星的中心xyz = 物件，衛星的大小 < 物件， 衛星的距離自訂
    this.stela = new stela(this.x-5,this.y-10,this.z,this.size*0.25,this.size);
    this.stela2 = new stela2(this.x,this.y,this.z,this.size*0.25,this.size*3);
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    push();
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        this.mx = this.mx+0.5;
        this.my = this.my+0.5;
        this.cc = color(random(255),128,random(255));
        }
      this.stela.display();
      this.stela2.display();
      rotateX(millis() / 1000);
      rotateY(millis() / 1000);
      fill(this.cc);
      ellipsoid(30, 40, 40, 12, 2);
      //box(this.size);
    pop();
    this.move();
  }
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
    if (this.y>width/2){this.my = -1*this.my;}
    if (this.y<-width/2){this.my = -1*this.my;}  
    this.y = this.y + this.my;
  }
}
// 衛星
class stela{
  constructor(x,y,z,size,cdx){
    //衛星的旋轉中心
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    // 衛星距離旋轉中心的x距離
    this.cdx=cdx;
    // 隨機產生物件顏色
    this.cc = color(random(255),0,0);
  }
  display(){
    push();
      rotateZ(frameCount*0.01);
      translate(this.cdx,1,1);  
    stroke(this.cc);
      noFill();
      sphere(this.size);
    pop();
  }
}
class stela2{
  constructor(x,y,z,size,cf){ //stela rotate center
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    // stela rotate distance
    this.cf = cf-20;
    this.cc = color(30,144-1 * random(255),255-2 * random(255)); // random color
  }
  display(){ //stela buildup
    push();
      noStroke();
      rotateZ(frameCount*0.02);
      rotateY(frameCount*0.04);
      translate(this.cf,0,0);  
      stroke(this.cc);
      noFill();
      //stela2 = box
      cylinder(10, 20, 16, 5);
    pop();
  }
}