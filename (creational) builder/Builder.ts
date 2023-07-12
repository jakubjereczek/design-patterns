import { AdvancedWorkoutPlan, SimpleWorkoutPlan } from './Product';

export interface Builder {
  reset(): void;
  addExercise(payload: string): void;
  addMeal(payload: string): void;
  addSchedule(payload: [string, string]): void;
  assignMentor?(payload: string): void;
  getResult(): unknown;
}

export class AdvancedWorkoutPlanBuilder implements Builder {
  private workoutPlan: AdvancedWorkoutPlan;

  reset(): void {
    this.workoutPlan = {
      exercises: [],
      meals: [],
      schedules: [],
      level: 'advanced',
      mentor: ''
    };
  }


  addExercise(payload: string): void {
    this.workoutPlan.exercises.push(payload);
  }

  addMeal(payload: string): void {
    this.workoutPlan.meals.push(payload);
  }

  addSchedule(payload): void {
    this.workoutPlan.schedules.push(payload);
  }

  assignMentor(payload: string): void {
    this.workoutPlan.mentor = payload;
  }

  getResult(): AdvancedWorkoutPlan {
    return this.workoutPlan;
  }
}

export class SimpleWorkoutPlanBuilder implements Builder {
  private workoutPlan: SimpleWorkoutPlan;

  reset(): void {
    this.workoutPlan = {
      exercises: [],
      meals: [],
      schedules: [],
      level: 'easy',
    };
  }

  addExercise(payload: string): void {
    if (this.workoutPlan.exercises.length > 3) {
      throw new Error('You have reached your exercises limit for the simple plan.')
    }
    this.workoutPlan.exercises.push(payload);
  }

  addMeal(payload: string): void {
    if (this.workoutPlan.exercises.length > 3) {
      throw new Error('You have reached your meals limit for the simple plan.')
    }
    this.workoutPlan.meals.push(payload);
  }

  addSchedule(payload): void {
    if (this.workoutPlan.exercises.length > 2) {
      throw new Error('You have reached your schedules limit for the simple plan.')
    }
    this.workoutPlan.schedules.push(payload);
  }

  getResult(): SimpleWorkoutPlan {
    return this.workoutPlan;
  }
}