using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties_006
{
    class Point
    {
        private int x, y;

        public int X
        {
            get { return x; }
        }

        public int Y
        {
            get { return y; }

        }
        // Конструктор по умолчанию, инициализирующий поля значениями по умолчанию
        public Point()
        {
            Console.WriteLine("Конструктор по умолчанию!");
        }

        // Пользовательский конструктор, инициализирующий поля значениями заданными пользователем

        public Point(int x, int y)
        {
            Console.WriteLine("Пользовательский конструктор");
            this.x = x;
            this.y = y;
        }

    }
}
