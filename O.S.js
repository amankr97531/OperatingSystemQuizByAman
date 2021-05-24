 const quizDB = [
 {
question:"Q1:The operating system is the most common type of …… Software",
a:" Communication",
b:" Application",
c:" System",
d:" Word processing software",
ans: "ans3"
},

{
question:"Q2: When you open my computer on desktop you see the information of",
a:" Hard disk",
b:" CD",
c:" Removable disk",
d:" All of the above",
ans: "ans4"
},

{
question:"Q3:Press the ….button to have the window fill the entire screen",
a:" Close",
b:" Maximize",
c:" Minimize",
d:" none of the above",
ans: "ans2"
},

{
question:"Q4:The box on …. that allows you to choose where to go and is located below the standard toolbar",
a:" System menu",
b:" Address bar",
c:" Menu bar",
d:" None of these",
ans: "ans2"
},

{
question:"Q5:A…. is a set of computer instructions that carry out a task on the computer",
a:" Program",
b:" Database",
c:" Memory files",
d:" none of the above",
ans: "ans1"
},

{
question:"Q6: Which of the following is not a mode in starting Windows",

a:" Command Prompt",
b:" Safe Mode",
c:" Normal Mode",
d:" Turbo Mode",
ans: "ans4"
},

{
question:"Q7: ______ is used in operating system to separate mechanism from policy",
a:" Single level implementation",
b:" Two level implementation",
c:" Multi level implementation",
d:" None",
ans: "ans2"
},

{
question:"Q8:Which Operating System doesn’t support long file names",
a:" OS/2",
b:" Windows 95",
c:" MS-DOS",
d:" Windows NT",
ans: "ans3"
},

{
question:"Q9:What program runs first after computer is booted and loading GUI",
a:" Desktop Manager",
b:" File Manager",
c:" Windows Explorer",
d:" Authentication",
ans: "ans4"
},

{
question:"Q10:To delete a file without allowing it to store in recycle bin", 
a:" Press Delete key",
b:" Press Shift + Delete key",
c:" Press Ctrl + Delete key",
d:" Press Alt + Delete key",
ans: "ans2"
},

{
question:"Q11:____ is the operating systems File and folder Manager",
a:" Windows Explorer",
b:" Windows Control Panel",
c:" My Computer",
d:" My Documents",
ans: "ans1"
},

{
question:"Q12:The SJF algorithm executes first the job",
a:" that last entered the queue",
b:" that first entered the queue",
c:" that has been in the queue the longest",
d:" with the least processor needs",
ans: "ans4"
},

{
question:"Q13:First-in-First-Out (FIFO) scheduling is",
a:" Non Preemptive Scheduling",
b:" Preemptive Scheduling",
c:" Fair Share Scheduling",
d:" Deadline Scheduling",
ans: "ans1"
},

{
question:"Q14:The FIFO algorithm",
a:" executes first the job that last entered the queue",
b:" executes first the job that first entered the queue",
c:" execute first the job that has been in the queue the longest",
d:" executes first the job with the least processor needs",
ans: "ans2"
},

{
question:"Q15:Process is",
a:" program in High level language kept on disk",
b:" contents of main memory",
c:" a program in execution",
d:" a job in secondary memory",
ans: "ans3"
}

];
		 
		 const question = document.querySelector('.question');
		 const option1 = document.querySelector('#option1');
		 const option2 = document.querySelector('#option2');
		 const option3 = document.querySelector('#option3');
		 const option4 = document.querySelector('#option4');
		 const submit = document.querySelector('#submit');
		 
		 const answers = document.querySelectorAll('.answer');
		 
		 const showScore = document.querySelector('#showScore');
		 
		 
		 let questionCount = 0;
		 let score = 0;
		 
		 const loadQuestion = () => {
			 
		 const questionList = quizDB[questionCount];
		 
			 question.innerText = questionList.question;
			 
			 option1.innerText = questionList.a;
			 option2.innerText = questionList.b;
			 option3.innerText = questionList.c;
			 option4.innerText = questionList.d;
		 }
		 
		 loadQuestion();
		 
		 const getCheckAnswer = () => {
			let answer;
			
			answers.forEach((curAnsElem) => {
		    if(curAnsElem.checked){
				answer= curAnsElem.id;
			}
		});
		
		return answer;
	 };
	 
	 
	 const deselectAll = () => {
		 answers.forEach((curAnsElem) => curAnsElem.checked = false);
	 }
	 
		 submit.addEventListener('click', () => {
			const checkedAnswer = getCheckAnswer(); 
			console.log(checkedAnswer);
			
			if(checkedAnswer== quizDB[questionCount].ans){
				score++;
			};
		
		     questionCount++;
			 
			 deselectAll();
			if(questionCount < quizDB.length){
				loadQuestion();
			}
			else{
				
				showScore.innerHTML = `
				<h3> Your scored ${score}/${quizDB.length}👍 </h3>
				<button class="btn" onclick="location.reload()"> Play Again</button>
				`;
				
				showScore.classList.remove('scoreArea');
			}
			
		 });