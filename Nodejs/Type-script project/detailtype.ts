// const differenceBetweenClassAndInterface=()=>{

//     // object types

//     let num:{x:number; y:number}={x:1,y:4};
//     console.log(num);


//     // optional properties
//     let num1:{x:number; y?:number}={x:1};// u can give y value or not because its optional
//     console.log(num1);

//     // interface 
//     // an interface declaration is another way to name an object type:

//     interface Point{
//         x:number;
//         y:number;
//     }

//     let p1:Point={x:100, y:100};
//     let p1_New:Point;


//     //type alias
//     type MyPoint={
//         x:number;
//         y:number;
//     }

//    let p2:MyPoint={x:100,y:100};


//    //difference between type alias and interface
//    //u can redeclare interface but not type alias.

   
//    const typeInDetail=()=>{

//     //union types
//     let id:number|string=2;
//     let x: string[] |string=["@","e"];
//    };

//    //maped types
//    type onlyBoolsAndHorses={
//     [key:string]:boolean|"Horse";
//    };


//    const conforms:onlyBoolsAndHorses={
//     del:true,
//     rodney:false,
//     x:"Horse",
//     3:"E"// not allowed key should be string
//     //

//     };


// }

const classCheck=()=>{
    //case1, not work in latest versions, initialization is mandatory
    // class Point{
    //     //x:number;
    //     //y:number;
    //     x:number=0;
    //     y:number=0;
    // }
    // const pt = new Point();
    // //pt.x=1;
    // //pt.y=2;
    // console.log(pt);
    // //no error,either you assing value or not 
    // ///end case1


    // // case2

    // class Point1{
    //     x=0;
    //     y=0;
    // }
    // const pt1=new Point1();
    // pt1.x=1;
    // pt.x=2;
    // console.log(pt1);

    // //case 3

    // class point2{
    //     x:number;
    //     constructor(n:number){
    //         this.x=n;
    //     }
    // }
    // const pt2=new point2(3);
    // console.log(pt2);

    //End 3

    //case 4 getters/setters

    class Students{
        _tag_name:String="";
        __standard:Number=0;

        get tagName(): String{
            return this._tag_name;
        }
        set tagName(value:String){
            this._tag_name ="#"+value;
        }
        get standard():Number{
            return this.__standard;
        }
        set standard(value:Number){
            this.__standard=value;
        }
    }

    let azhar =new Students();
    azhar.tagName="Azhar";
    azhar.standard=7;
    console.log("Azhar",azhar);

}
classCheck();