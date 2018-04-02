using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace batterfly
{
    class Butterfly
    {
        public string name;

        public void fly() {
            Console.WriteLine(name + " can fly");
            Console.ReadKey();
        }
    }
}
