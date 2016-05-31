using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessLogic.DataFactory;
using BusinessLogic.Models;
using BusinessLogic.Repository;

namespace BusinessLogic.Repository
{
   public class Repository<T>:IRepository<T> where T:class,IEntity,new()
   {
       private List<T> _dataStore;

       public Repository(IDataFactory<T> dataFactory)
       {
           _dataStore = dataFactory.Collection;
       }

       public List<T> Items => _dataStore.ToList();

       public List<T> GetAll()
       {
           return Items;
       }

       public T GetById(int id)
       {
           return _dataStore.SingleOrDefault(x => x.Id == id);
       }

       public void Add(T entity)
       {
         _dataStore.Add(entity);
       }

       public void Delete(T entity)
       {
           _dataStore.Remove(entity);
       }
    }
}
