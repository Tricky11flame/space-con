<><div class="fixed -z-50 object-fill w-[100%] overflow-hidden top-0 left-0"><img src="assest/bg-img.png" alt="" class="h-[100vh] w-[100%]"/></div>
    <div class="absolute -z-40 h-[100vh] w-[100%] bg-black opacity-20 top-0 left-0"></div>

    <div class="bg-spaceCon-secondary my-12 mx-auto pt-2 pb-4 text-9xl font-spaceCon">OUR TEAM</div>

    <div class="container relative flex flex-col justify-center align-middle items-center w-[100%] m-auto">

        <div class="bg-spaceCon-primary w-[50%] my-12 mx-auto pt-2 pb-4 rounded-3xl text-6xl font-spaceCon">
        3rd Year
        </div>
        <div class="list-3 flex flex-wrap justify-center align-middle gap-8 gap-y-16 mx-auto w-[100%]"></div>

        <div class="bg-spaceCon-primary w-[50%] my-12 mx-auto pt-2 pb-4 rounded-3xl text-6xl font-spaceCon">
            <p class="text-heading-2">2nd Years</p>
        </div>
        <div class="list-2 flex flex-wrap justify-center align-middle gap-x-8 gap-y-16 mx-auto"></div>

        <div class="bg-spaceCon-primary w-[50%] my-12 mx-auto pt-2 pb-4 rounded-3xl text-6xl font-spaceCon">
            <p class="text-heading-1">1st Years</p>
        </div>
        <div class="list-1 flex flex-wrap justify-center align-middle gap-x-8 gap-y-16 mx-auto"></div>

        <div class="box-border"></div>

    </div>
    </>


const teamArray = [
    // 1st Year Names 
    ['Aditya Balaji', 'Aviral Gaur', 'Ashu', 'Manasvi Kapoor', 'Sanya', 'Gautam Bajaj', 'Manav', 'Aakash', 'Saksham Chopra', 'Animesh', 'Tarun', 'Harshit Chauhan', 'Shaambhavee', 'Pushkar', 'Vansh'],
    // 2nd Year Names
    ['Kartikay', 'Aman', 'Ayush Kumar', 'AyushMaan Bari', 'Priyanshi', 'Vashist', 'Mayukh Chakraborty', 'Kirti', 'Komal', 'Divye Bajaj', 'Shresht Sharma', 'Ayush', 'Omkar', 'Meenakshi Sinha'],
    // 3rd Year Names
    ['Ayush Jha', 'Kritika Choudhary', 'Paridhi Gupta', 'Manasvi', 'Siddhart Goenka', 'Ananay Kaushik', 'Yashum Bajaj', 'Devanshi Sharma', 'Garima Dua', 'Pranav Kanwar', 'Vatsal Srivastava', 'Nimanyu Raj Agrawal', 'Siddhart Garg'],
    // 4th Year Names
    ];
    
    
    for (let i = 1; (i - 1) < teamArray.length; i++) {
    
        for (let j = 0; j < teamArray[i-1].length; j++) {
    
            let dynamicDiv = document.createElement("div");
            dynamicDiv.classList.add(`dynamic-div-${j}`, 'flex', 'flex-col',"transition","ease-in-out","duration-300", "hover:scale-110");
    
            let imageElement = document.createElement("img");
            imageElement.classList.add("w-[25rem]","rounded-t-2xl");
            imageElement.src = "https://media1.tenor.com/m/Jc9jT66AJRwAAAAd/chipi-chipi-chapa-chapa.gif";
    
            let nameDiv = document.createElement("div");
            nameDiv.innerHTML = teamArray[i-1][j];
            nameDiv.classList.add("bg-spaceCon-quartinary","text-spaceCon-primary","w-[25rem]", "font-bold", "font-spaceCon","uppercase", "text-2xl","py-3","rounded-b-2xl");
    
            document.querySelector(`.list-${i}`).append(dynamicDiv);
            document.querySelector(`.dynamic-div-${j}`).append(imageElement);
            document.querySelector(`.dynamic-div-${j}`).append(nameDiv);
    
        };
    
    }
    