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

            string sleepValue = Console.ReadLine();
            int hoursOfSleep;

            if (int.TryParse(sleepValue, out hoursOfSleep)) {
                
                Console.WriteLine("Hello " + name);
                if (hoursOfSleep >= 8)
                {

                    Console.WriteLine("You are well rested");
                }
                else
                {
                    Console.WriteLine("You need more sleep");
                }
            } else {
                
                Console.WriteLine("The value is Not a number");
                
            }

            Console.ReadKey();
        }
    }
}
