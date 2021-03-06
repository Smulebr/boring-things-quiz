export default class infoBoxObj {
    constructor(){
        this.xc = 0;
        this.yc = 0;
        this.w = 0;
        this.h = 0;

        this.resetButton = new infoButton(255);
        this.resetButton.setText('Reset');

        // Add the buttons to the class because we want to update them together
        this.number1 = new infoButton(255);
        this.number2 = new infoButton(255);
        this.mainNumber = new infoButton(255);

    }
    // Update values based on the size of the object to the right (calculator)
    update(x,y,w,h){
        this.xc = x-w/6;
        this.yc = y;
        this.w = w/3;
        this.h = h/2;

        // Position of buttons in infopanel is based in sizes of the panel. Can be optimized...
        this.resetButton.update(this.xc,this.yc+this.h/4,this.w/2,this.h/8);
        this.number1.update(this.xc,this.yc-this.h/4,this.w/2,this.h/8);
        this.number2.update(this.xc,this.yc-(this.h/3),this.w/2,this.h/8);
        this.mainNumber.update(this.xc,this.yc-(this.h/2),this.w/2,this.h/8);
    }
    show(){
        noStroke();
        fill(0);
        rectMode(CENTER)
        rect(this.xc, this.yc, this.w,this.h);
        this.resetButton.show();
        this.number1.show();
        this.number2.show();
        this.mainNumber.show();
    }
    getResetButton(){
        return this.resetButton;
    }
    getNumberButton(n){
        if (n == 1){
            return this.number1;
        }
        else{
            return null;
        }
    }
}