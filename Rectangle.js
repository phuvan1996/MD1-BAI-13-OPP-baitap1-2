class Rectangle {
    width;
    height;
    perimeter;
    area;


    constructor(width, height, perimeter, area) {
        this.width = width;
        this.height = height;
        this.perimeter = perimeter;
        this.area = area;
    }

    setWidth(width){
        this.width=width;
    }
    getWidth(){
        return this.width;
    }
    setHeight(height){
        this.height=height;
    }
    getHeight(){
        return this.height;
    }
    setRadius(perimeter){
        this.radius=perimeter;
    }
    getPerimeter(){
        return (this.width+this.height)*2
    }
    setArea(area){
        this.area=area;
    }
    getArea(){
        return this.height*this.width
    }
};

