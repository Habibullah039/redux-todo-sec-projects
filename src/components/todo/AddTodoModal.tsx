import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddTodosMutation } from "@/redux/api/api";
import { updateTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { FormEvent, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Todo = {
  id: string;
  title: string;
  description: string;
};

interface AddTodoModalProps {
  todo?: Todo;
}

const AddTodoModal = ({ todo }: AddTodoModalProps) => {
  const [task, setTask] = useState(todo ? todo.title : "");
  // const [task, setTask] = useState('');
  const [description, setDescription] = useState(todo ? todo.description : "");
  const dispatch = useAppDispatch();
  const [priority, setPriority] = useState("");
  // console.log(priority);

  const [addTodo, { data, isLoading, isSuccess, isError }] =
    useAddTodosMutation();

  console.log({ data, isLoading, isSuccess, isError });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (todo) {
      dispatch(
        updateTodo({
          id: todo.id,
          title: task,
          description,
        })
      );
    } else {
      const randomString = Math.random().toString(36).substring(2, 7);

      const taskDetails = {
        id: randomString,
        title: task,
        isCompleted: false,
        description,
        priority,
      };

      // dispatch(addTodo(taskDetails));
      addTodo(taskDetails);

      console.log("inside modal", taskDetails);
    }
  };

  return (
    <>
      {todo ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary-gradient text-xl font-semibold">
              <svg
                className="size-5"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                ></path>
              </svg>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={onSubmit}>
              <DialogHeader>
                <DialogTitle>Update Your information</DialogTitle>
                <DialogDescription>
                  Update Your information that you want to finish.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="task" className="text-right">
                    Update information
                  </Label>
                  <Input
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    id="task"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Update Description
                  </Label>
                  <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="description"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Update</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary-gradient text-xl font-semibold">
              Add Todo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={onSubmit}>
              <DialogHeader>
                <DialogTitle>Add Your Information</DialogTitle>
                <DialogDescription>
                  Add Your Information that you want to finish.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="task" className="text-right">
                    Information
                  </Label>
                  <Input
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    id="task"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="description"
                    className="col-span-3"
                    required
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Priority
                  </Label>
                  <Select onValueChange={(value) => setPriority(value)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default AddTodoModal;
