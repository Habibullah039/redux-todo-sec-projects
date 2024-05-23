import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import AddTodoModal from "./AddTodoModal";


type TTodoCardProps = {

    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
    priority : string ;
};

const TodoCard = ({ title, description, id, isCompleted , priority }: TTodoCardProps) => {

    const dispatch = useAppDispatch();

    const toggleState = () => {

        dispatch(toggleComplete(id));
    }

    

    return (
        <div className="bg-white rounded-md p-3 flex justify-between items-center border">
            <input onChange={toggleState} type="checkbox" name="complete" id="complete" />
            <p className="font-semibold flex-1 ml-3">{title}</p>
            <div className="fles-1 flex items-center gap-2 m-7">
                <div className={`size-3 rounded-full 

                    ${priority === "High" ? 'bg-red-600' : 'null'}
                    ${priority === "Low" ? 'bg-yellow-500' : 'null'}
                    ${priority === "Medium" ? 'bg-green-600' : 'null'}`}

                ></div>
                <p>{priority}</p>
            </div>
            <div className="flex-[1]">
                {
                    isCompleted ? (
                        <p className="text-green-500">Done</p>
                    ) : (

                        <p className="text-red-700">Pending</p>
                    )
                }
            </div>
            <p className="fles-[1] mr-5 pr-5">{description}</p>
            
            <div className="space-x-3 flex">

                <Button className="bg-red-500">
                    <svg
                        onClick={() => dispatch(removeTodo(id))}
                        className="size-5"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">

                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        ></path>

                    </svg>
                </Button>

                <div>
                    <AddTodoModal
                        todo={{ id, title, description }} 
                    />
                </div>
              
            </div>

        </div>
    );
};

export default TodoCard;





// [
//     {
//       "name": "John Doe",
//       "title": "Software Engineer",
//       "description": "Experienced software engineer with expertise",
//       "isCompleted" : false,
//       "priority" : "Medium"
//     },
//     {
//       "name": "Alice Smith",
//       "title": "Marketing Manager",
//       "description": "Creative marketing manager with a passion for ",
//       "isCompleted" : false,
//       "priority" : "Low"
//     },
//     {
//       "name": "Michael Johnson",
//       "title": "Data Scientist",
//       "description": "Data scientist specializing in machine learning",
//       "isCompleted" : false,
//       "priority" : "High"
//     },
//     {
//       "name": "Emily Brown",
//       "title": "Graphic Designer",
//       "description": "Talented graphic designer with a keen eye for",
//       "isCompleted" : false,
//       "priority" : "Medium"
//     },
//     {
//       "name": "David Wilson",
//       "title": "Financial Analyst",
//       "description": "Detail-oriented financial analyst with expertise" ,
//       "isCompleted" : false,
//       "priority" : "Low"
//     },
//     {
//       "name": "Sarah Lee",
//       "title": "Human Resources Manager",
//       "description": "Dedicated human resources manager with a focus on " ,
//       "isCompleted" : false,
//       "priority" : "High"
//     },
//     {
//       "name": "Matthew Taylor",
//       "title": "Product Manager",
//       "description": "Product manager with a track record of successfully" ,
//       "isCompleted" : false,
//       "priority" : "Medium"
//     }

// ]