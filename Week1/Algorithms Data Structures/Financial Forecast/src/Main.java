public class Main {
    public static double help(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }

        return (1 + rate) * help(presentValue, rate, years - 1);
    }

    public static void main(String[] args)
    {
        double p = 1000;
        double r = 0.055;
        int n = 20;
        double ans = help(p, r, n);
        System.out.println("Future Value after " + n + " years = " + ans);
    }
}
