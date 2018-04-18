using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties_006
{
    class Program
    {
        static void Main(string[] args)
        {
         //   Point pointA = new Point();
         //   Console.WriteLine("PointA.X = {0}, PointA.Y = {1}", pointA.X, pointA.Y);

            Console.WriteLine(new string('-', 30));

            Point pointB = new Point("A");
            Console.WriteLine("PointB.X = {0}, PointB.Y = {1}", pointB.X, pointB.Y);

            Console.ReadKey();

        }
    }
}
