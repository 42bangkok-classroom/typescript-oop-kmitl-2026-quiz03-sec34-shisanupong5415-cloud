export class OnlineCourse {
  public courseName : string
  public maxStudents : number
  private enrolledStudents : number
  private isOpen : boolean

  constructor(courseName: string , maxStudent: number , enrolledStudents: number = 0 ,isOpen: boolean = true) {
        this.courseName = courseName;
this.maxStudents = maxStudent;


  }
}
