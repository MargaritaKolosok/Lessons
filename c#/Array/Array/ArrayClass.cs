using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Array
{
    class ArrayClass
    {
        static void ChangeArray(string[] arr)
        {
            arr = (arr.Reverse()).ToArray();
            foreach (var i in arr)
            {
                Console.WriteLine(arr[i]);

            }
            
        }
    }
}
