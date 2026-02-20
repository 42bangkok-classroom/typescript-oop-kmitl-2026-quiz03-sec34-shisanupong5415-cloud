export class OnlineCourse {
  public courseName : string
  public maxStudents : number
  private enrolledStudents : number
  private isOpen : boolean

  constructor(courseName: string , maxStudent: number ,) {
    this.courseName = courseName;
    this.maxStudents = maxStudent;
    this.enrolledStudents = 0;
    this.isOpen = true;
  }

  enroll(): boolean {
    
  }
}
