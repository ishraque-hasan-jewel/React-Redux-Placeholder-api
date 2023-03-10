import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);

  console.log(isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <div>
      <h2>Todos App</h2>
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id}>
                <h4>id:{todo.id}</h4>
                <p>title:{todo.title}</p>
                <p>body:{todo.body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};
export default Todos;