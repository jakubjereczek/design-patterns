interface WorkoutPlan {
  exercises: string[];
  meals: string[];
  schedules: [string, string][];
}

export interface AdvancedWorkoutPlan extends WorkoutPlan {
  level: 'advanced';
  mentor: string;
}

export interface SimpleWorkoutPlan extends WorkoutPlan {
  level: 'easy';
}