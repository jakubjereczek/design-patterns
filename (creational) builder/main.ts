import {
  AdvancedWorkoutPlanBuilder,
  SimpleWorkoutPlanBuilder,
} from './Builder';
import { Director } from './Director';

const builder = new AdvancedWorkoutPlanBuilder();
const builder2 = new SimpleWorkoutPlanBuilder();

new Director(builder).build();
const plan = builder.getResult(); // AdvancedWorkoutPlan

new Director(builder2).build();
const plan2 = builder2.getResult(); // SimpleWorkoutPlan
