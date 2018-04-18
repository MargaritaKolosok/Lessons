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
        private string name;

        public int X
        {
            get { return x; }
        }

        public int Y
        {
            get { return y; }

        }
        public string Name
        {
            get { return name; }
        }

        // Конструктор по умолчанию, инициализирующий поля значениями по умолчанию
        //  public Point()
        //   {
        //       Console.WriteLine("Конструктор по умолчанию!");
        //    }

        // Пользовательский конструктор, инициализирующий поля значениями заданными пользователем

        public Point(int x, int y)
        {
            Console.WriteLine("Users constructor");
            this.x = x;
            this.y = y;
        }

        public Point(string name)
            : this(300, 200)
        {
            Console.WriteLine("Constructor with one parameter!");
            this.name = name;
        }
        

    }
}
