#First build frontend libraries
cd frontend
#Install node libraries
npm install
#Remove previous build files, if they exist
rm -rf .next dist
#Create new frontend build files
npm run export
#Move to the backend directory
cd ../backend
#Delete previous embedded build files
rm -rf nextHandler/dist
#Create a new build dir
mkdir nextHandler/dist
#Copy new build files into build dir
cp -rf ../frontend/dist ./nextHandler
#Install go dependencies
go mod download
#Build go executable
go build -o main.exe
#Execute go executable
./main