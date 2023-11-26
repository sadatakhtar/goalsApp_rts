import React, { type ReactNode } from "react";

interface CourseGoalProps {
  id: number;
  title: string;
  //   description: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

function CourseGoal({ title, id, children, onDelete }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

export default CourseGoal;

// ALTERNATIVE METHOD BELOW (FC)

// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
