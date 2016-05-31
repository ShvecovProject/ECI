using System.Collections.Generic;
using BusinessLogic.Models;

namespace BusinessLogic.DataFactory
{
   public interface IDataFactory<T> where T:class, IEntity,new()
    {
        List<T> Collection { get; } 
    }
}
