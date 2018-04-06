using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Constructors_001
{
    class Point
    { 
        // fields
        private int x = 8, y = 8;

        // Properties

        public int X {

            get { return x; }

        }

        public int Y {

            get { return y;  }

        }
        // Конструктор по умолчанию, инициализирует поля значениями по умолчанию
        public Point() {
            Console.WriteLine("Конструктор по умолчанию!");
        }

        // Пользовательский конструктор, инициализирует поля значениями задаными пользователем

        public Point(int x, int y) {

            Console.WriteLine("Пользовательский конструктор!");

            this.x = x;
            this.y = y;

        }


    }
}
