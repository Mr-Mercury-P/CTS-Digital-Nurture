public class DocumentFactoryClass extends DocumentFactory
{
    public Document createDocument(String str)
    {
        if(str.equalsIgnoreCase("ExcelDocument"))
        {
            return new ExcelDocument();
        }
        if(str.equalsIgnoreCase("PdfDocument"))
        {
            return new PdfDocument();
        }
        if(str.equalsIgnoreCase("WordDocument"))
        {
            return new WordDocument();
        }
        return null;
    }
}
