import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal} from '../App'

interface CourseGoalListProps {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((g) => (
        <li>
          <CourseGoal id={g.id} title={g.title} onDelete={onDeleteGoal}>
            <p>{g.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
