using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties_04
{
    class MyClass {

        private string field = null;

        public string Field {

            set {
                if (value == "fool")
                {
                    Console.WriteLine("Wrong value entered, Try again!");
                }
                else {

                    field = value;
                    
                }
            }

            get {

                if (field == null)
                    return "There is no data in field";
                else if (field == "hello world")
                    return field.ToUpper() + '!';
                else
                    return field;


            }

        }

    }


    class Program
    {
        static void Main(string[] args)
        {
            MyClass instance = new MyClass();

            instance.Field = "fool";
            Console.WriteLine(instance.Field);

            Console.WriteLine(new string('-', 50));

            instance.Field = "hello world";
            Console.WriteLine(instance.Field);

            Console.ReadKey();


        }
    }
}
