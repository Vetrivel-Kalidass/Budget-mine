# Budget-mine
A budget application to handle all your expenses, notes, to-do list built with Angular + Ionic

# Installation
1. Run the following in the command line terminal to install the Ionic CLI (ionic), native-run, used to run native binaries on devices and simulators/emulators, and cordova-res, used to generate native app icons and splash screens:

    npm install -g @ionic/cli native-run cordova-res

    note: Mac or linux user like me, add sudo to front of the command
    
2. Clone the repository by clicking the above green "clone" button

3. Now navigate to application folder in terminal, enter below command to install dependancies packages
  
    npm install or npm i
    
4. All done let's start the application and go to your browser "localhost:8100"
  
    ionic serve
    
# Build on Ios and android

1. If you’re still running ionic serve in the terminal, cancel it. Complete a fresh build of your Ionic project, fixing any errors that it reports:
    
    ionic build
    
2. Next, create both the iOS and Android projects:

    ionic cap add ios
    
    ionic cap add android
    
    note: Both android and ios folders at the root of the project are created. These are entirely standalone native projects that should be considered part of your Ionic app (i.e., check them into source control, edit them using their native tooling, etc.).
    
    tip1: Both android and ios folders at the root of the project are created. These are entirely standalone native projects that should be considered part of your Ionic app (i.e., check them into source control, edit them using their native tooling, etc.).
    
    ionic cap copy
    
    tip2: After making updates to the native portion of the code (such as adding a new plugin), use the sync command:
    
    ionic cap sync

3. iOS Deployment:
    
    ionic cap open ios

4. Android Deployment:

    ionic cap open android
    

for more information visit: https://ionicframework.com/docs
    


