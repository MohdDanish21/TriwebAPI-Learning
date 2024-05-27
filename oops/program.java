class Abc{
    public static int area(int l, int b){
        return l*b;
    }
    public static int volume(int l, int b, int h){
        return l*b*h;
    }
    public static void main(String[] args){
        System.out.println("hello world");
        System.out.println("area="+area(5,4));
        System.out.println("volume="+volume(4,5,6));
    }
}