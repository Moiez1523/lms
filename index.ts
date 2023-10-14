
import inquirer from "inquirer"; // importing inquirer for user input.

// Main array storing data in it.
var LMSData: Object[]=[];

// Class definition
class LMS{
    StudentData={
        Name: "name",
        id: 0,
    };
    courseData={
    course1: "AI Fundamentals",
    course2: "Web3.0 Basics",
    course3: "DATABASE MySql,SQl",
    course4: "Full Stack Development",
    course5: "BackEnd Development",
    course6: "FrontEnd Development"
}
// num: number=this.StudentData.id;
// numToString:string = this.num.toString();
constructor(name:string,id:number){
    this.StudentData.Name = name, this.StudentData.id=id;
    console.log(`Student Name: ${this.StudentData.Name},Student ID: ${this.StudentData.id}`);
}
courseSelection(courseSelection:string){
    if(courseSelection=="AI Fundamentals"){
        console.log(`Selected Course: ${this.courseData.course1}`);
    }
    else if(courseSelection=="Web3.0 Basics"){
        console.log(`Selected Course: ${this.courseData.course2}`);    
    }
    else if(courseSelection=="DATABASE MySql,SQl"){
        console.log(`Selected Course: ${this.courseData.course3}`);    
    }
    else if(courseSelection=="Full Stack Development"){
        console.log(`Selected Course: ${this.courseData.course4}`);    
    }
    else if(courseSelection=="BackEnd Development"){
        console.log(`Selected Course: ${this.courseData.course5}`);    
    }
    else if(courseSelection=="FrontEnd Development"){
        console.log(`Selected Course: ${this.courseData.course6}`);    
    }
}

}

let loop= true;
var Object={
    username:'',
    id:0,
    course:'',
    feeStatus:0
}

    const userData = await inquirer.prompt([{
        type: 'input',
        name: 'username',
        message: 'Enter your name: '
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter your ID: "
    }])

    const userCourse = await inquirer.prompt({
        type: "list",
        name: 'courseList',
        message: 'Chose course: ',
        choices: ["AI Fundamentals","Web3.0 Basics","DATABASE MySql,SQl","Full Stack Development","BackEnd Development","FrontEnd Development"]
    })

    const courseSelection:String = userCourse.courseList;
     Object.username = userData.username;
     Object.id = parseInt(userData.id);
     Object.course = userCourse.courseList;

     if(courseSelection=="AI Fundamentals"){
        Object.feeStatus = 5000;
     }
     else if(courseSelection=="Web3.0 Basics"){
        Object.feeStatus = 4000;
     }
     else if(courseSelection=="DATABASE MySql,SQl"){
        Object.feeStatus = 3000;
     }
     else if(courseSelection=="Full Stack Development"){
        Object.feeStatus = 70000;
     }
     else if(courseSelection=="BackEnd Development"){
        Object.feeStatus = 5000;
     }
     else if(courseSelection=="FrontEnd Development"){
        Object.feeStatus = 4000;
     }
  
const Student1 = new LMS(userData.username,parseInt(userData.id));
Student1.courseSelection(userCourse.courseList);

// pushing values in the main array. 
LMSData.push(Object);
console.log(LMSData);

