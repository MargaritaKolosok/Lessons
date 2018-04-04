using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Constructors_001
{
    class Program
    {
        static void Main(string[] args)
        {
            Point pointA = new Point();

            Console.WriteLine("X={0}, Y={1}", pointA.X, pointA.Y);

            Console.WriteLine(new string('-', 50));

            Point pointB = new Point(100, 200);
            Console.WriteLine("X={0}, Y={1}", pointB.X, pointB.Y);

            Console.ReadKey();

        }
    }
}
