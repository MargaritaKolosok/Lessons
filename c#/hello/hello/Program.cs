using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hello
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Put your name:");
            string name = Console.ReadLine();

            Console.WriteLine("How long have you been sleep last night?");

            int hoursOfSleep = int.Parse(Console.ReadLine());



            Console.WriteLine("Hello " + name);
            if (hoursOfSleep >= 8)
            {

                Console.WriteLine("You are well rested");
            }
            else {
                Console.WriteLine("You need more sleep");
            }
            
            Console.ReadKey();
        }
    }
}
