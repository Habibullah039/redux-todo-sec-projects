// import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // const {todos} = useAppSelector((state) => state.todos);

  const { data: todos, isLoading } = useGetTodosQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
                    <p>There is no task pending</p>
                </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
