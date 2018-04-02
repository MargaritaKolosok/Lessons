using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace Properties
{
    class MyClass
    {

        // закрытое строковое поле ссылочного типа

        private string field = null;

        public void SetField(string value) { // Method setter

           field = value;

        }

        public string GetField() { // getter

            return field;

        }

    }


    class Program
    {
        static void Main(string[] args)

        {

            MyClass instance = new MyClass();

            instance.SetField("Hello World!");

            string @string = instance.GetField();

            Console.WriteLine(@string);
            Console.ReadKey();

        }
    }
}
