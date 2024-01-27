//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { TasksEntity } from "./db/Tasks.entity";
import { UsersEntity } from "./db/Users.entity";
import { ProjectsEntity } from "./db/Projects.entity";
import { CommentsEntity } from "./db/Comments.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, TasksEntity, UsersEntity, ProjectsEntity, CommentsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Tasks":[{"Title":"Generated Task 1","Description":"Generated Description 1","DueDate":"2022-01-01","Status":"Active"},{"Title":"Generated Task 2","Description":"Generated Description 2","DueDate":"2022-01-02","Status":"Completed"},{"Title":"Generated Task 3","Description":"Generated Description 3","DueDate":"2022-01-03","Status":"Pending"}],"Users":[{"Name":"Generated User 1","Email":"user1@example.com","TasksAssigned":5,"Role":"Manager"},{"Name":"Generated User 2","Email":"user2@example.com","TasksAssigned":3,"Role":"Staff"},{"Name":"Generated User 3","Email":"user3@example.com","TasksAssigned":7,"Role":"Admin"}],"Projects":[{"Title":"Generated Project 1","Description":"Generated Description 1","Deadline":"2022-02-01","AssignedTasks":10},{"Title":"Generated Project 2","Description":"Generated Description 2","Deadline":"2022-03-01","AssignedTasks":5},{"Title":"Generated Project 3","Description":"Generated Description 3","Deadline":"2022-04-01","AssignedTasks":7}],"Comments":[{"Content":"Generated comment 1","Author":"Generated author 1","Task":"Generated task 1","Timestamp":"2022-01-01 12:00:00"},{"Content":"Generated comment 2","Author":"Generated author 2","Task":"Generated task 2","Timestamp":"2022-01-01 13:00:00"},{"Content":"Generated comment 3","Author":"Generated author 3","Task":"Generated task 3","Timestamp":"2022-01-01 14:00:00"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("TasksEntity", data.Tasks);
await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("ProjectsEntity", data.Projects);
await this.SeedResource("CommentsEntity", data.Comments); 
      await this.SeedResource("SettingsEntity", {
        settingname: "isSeeded",
        settingvalue: "true",
      });
    }else{
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository("SettingsEntity");
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: "isSeeded",
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table '+resourceName);
    await repo.upsert(resourceData, ["id"]);
  }
}

