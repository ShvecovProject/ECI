using System.Collections.Generic;
using BusinessLogic.Models;

namespace BusinessLogic.Repository
{
    public interface IRepository<T> where T : class, IEntity, new()
    {
        List<T> Items { get; }
        List<T> GetAll();
        T GetById(int id);
        void Add(T entity);
        void Delete(T entity);
    }
}
