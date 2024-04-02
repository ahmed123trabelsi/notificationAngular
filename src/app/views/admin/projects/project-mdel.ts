import { TasksModel } from "../tasks/tasks-model";
import { TypeStatutProjet } from "./type-statut-projet";

export class ProjectMdel {
    _id!:string;
    NomProject!: string;
  description?: string;
  StartDate?: string;
  FinishDate?: string;
  statut?: TypeStatutProjet;
  projectUrl?: string;
  tasks?: TasksModel[];
  NomChefProjet?: string;
  priority?: string;
}
