import {
  AdvancedWorkoutPlanBuilder,
  Builder,
  SimpleWorkoutPlanBuilder,
} from './Builder';

export class Director {
  constructor(private builder: Builder) {}

  public build() {
    this.builder.reset();
    if (this.builder instanceof AdvancedWorkoutPlanBuilder) {
      this.builder.addExercise('Push-ups');
      this.builder.addExercise('Squats');
      this.builder.addExercise('Deadlifts');
      this.builder.addMeal('Breakfast: Oatmeal');
      this.builder.addMeal('Lunch: Grilled Chicken Salad');
      this.builder.addMeal('Dinner: Salmon with Vegetables');
      this.builder.addSchedule(['Monday', 'Cardio']);
      this.builder.addSchedule(['Wednesday', 'Strength Training']);
      this.builder.addSchedule(['Friday', 'Yoga']);
      this.builder.assignMentor('John Doe')
    } else if (this.build instanceof SimpleWorkoutPlanBuilder) {
      this.builder.addExercise('Push-ups');
      this.builder.addExercise('Squats');
      this.builder.addSchedule(['Wednesday', 'Strength Training']);
    } else {
      throw new Error('Unsupported Builder')
    }
  }
}
