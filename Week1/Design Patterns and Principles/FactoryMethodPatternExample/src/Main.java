public class Main {
    public static void main(String[] args) {
        DocumentFactoryClass obj = new DocumentFactoryClass();
        Document word = obj.createDocument("worddocument");
        word.open();
    }
}