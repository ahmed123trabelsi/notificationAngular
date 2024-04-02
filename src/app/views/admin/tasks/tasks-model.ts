import { ProjectMdel } from "../projects/project-mdel";
import { TypeStatutTache } from "./type-statut-tache";

export class TasksModel {
    _id?:string
    NomTask!: string;
    description?: string;
    startDate?: string; // Assuming you want to store dates as strings
    FinishDate?: string; // Assuming you want to store dates as strings
    statut?:TypeStatutTache;
    projectId!: string;
    priority?: string;
    employeeAffected?: string;
}
