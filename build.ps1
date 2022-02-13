#Stop the program when an error occurs, hopefully :)
$ErrorActionPreference = "Stop"
#First build frontend libraries
Set-Location frontend\typemaster
#Install node libraries
npm install
#Remove previous build files, if they exist
bash -c 'rm -rf .next dist'
#Create new frontend build files
npm run export
#Move to the backend directory
Set-Location ..\..\backend
#Delete previous embedded build files
bash -c 'rm -rf nextHandler/dist'
#Create a new build dir
bash -c 'mkdir nextHandler/dist'
#Copy new build files into build dir
bash -c 'cp -rf ../frontend/typemaster/dist ./nextHandler'
#Install go dependencies
go mod download
#Build go executable
go build -o main.exe 
#Execute go executable
.\main