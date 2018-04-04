using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties_005
{
    class Constants {

        private double pi = 3.14D;
        private double e = 2.71D;

        public double Pi {
            // Свойство только для записи
            set {
                pi = value;
            }

        }

        public double E {
            // Свойство только для считывания
            get {
                return e;
            }


        }

     

    }
    class Program
    {
        static void Main(string[] args)
        {

            Constants constants = new Constants();
            constants.Pi = 3.14989898989;
            // lack of get accessor error
            //  Console.WriteLine(constants.Pi); 
            
            // property is read only error
            // constants.E = 2.87878778787;
            Console.WriteLine("e = {0}", constants.E);

            Console.ReadKey();
        }
    }
}
