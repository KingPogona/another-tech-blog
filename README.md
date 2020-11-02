# another-tech-blog

    

## Table of Contents 


* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
    
    

## Description 

This is a simple tech blog website.



## Installation

To install and use this app will require having Node.js and mySQL installed on your machine.To install this project, first navigate to or create the folder you will clone the project into. Then clone the project from https://github.com/KingPogona/another-tech-blog by clicking the code button and then copy the address. Next go to your terminal and make sure you are in the folder you want to clone the project to. Type git clone and then paste the url you just copied then hit return. Now type 'npm install' and hit return to download dependencies. Alternatively, you can you GitHub desktop or you can download the zip from the same address and unzip it to the desired folder. 

This project will require a database to use. After installing, run the schema.sql file in the db folder by running “source db/schema.sql” in the mySQL shell.

This project also uses a file .env to store your personal mySQL data and keep it private by having git ignore it and keep it local to your machine. you will need to create a .env file in your root folder for the project then copy the text below and paste it into the .env file. Finally enter your mySQL credentials and save the file and the project should be ready to run.


DB_NAME='techBlogDB'
DB_USER=‘YOUR USER NAME HERE’
DB_PW=‘YOUR PASSWORD HERE’
    

    
## Usage 

After cloning the project, navigate to the root folder 'another-tech-blog' in your terminal. Next, type “node index" followed by hitting enter. This will run the program and start the server. To interact with it you can then visit the site and sign up, create posts, and comment on posts.


    
## Credits

* KingPogona - [https://github.com/KingPogona](https://github.com/KingPogona)
    


## Questions

If you have any questions please feel free to contact me at aacpogona@me.com.