using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties_02
{
    class MyClass {
        private string field = null;

        public string Field {

            set {

                // value is a key word.

                field = value; // setter. 
            }

            get {

                return field; // getter

            }


        }
    }

    class Program
    {
        static void Main(string[] args)
        {

            MyClass instance = new MyClass();

            instance.Field = "Hello World!!!!!!";

            Console.WriteLine(instance.Field);

            Console.ReadLine();

        }
    }
}
