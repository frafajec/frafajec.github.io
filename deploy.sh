#!/bin/bash

# Check if current branch is master
# Proceed to build, remove!
if [ "$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')" == "develop" ]
then
    echo ""
    echo "-- Building production version --"
    yarn install
    yarn build

    # Copy from build to deploy folder
    echo ""
    echo "-- Preparing deploymeny --"
    mkdir "deploy"
    echo "Copying build"
    cp -R build/. deploy/
    echo "Copying readme"
    cp "README.md" deploy/
    echo "Copying configs"
    cp ".gitignore" deploy/

    # Pushing deploy contents as a new deploy
    echo ""
    echo "-- Commit deploy --"
    git add .
    git commit -am "Deploy commit"
    git push origin develop

    echo ""
    echo "-- Pull on master --"
    git checkout master
    git checkout develop -- deploy/

    echo ""
    echo "-- Configuring --"
    cp -R deploy/ .
    rm -R deploy/

    echo ""
    echo "-- Commiting --"
    git add .
    git commit -am "Deploy commit"

else
    echo ""
    echo "-- ERROR --"
    echo "You can only deploy from develop to master!"
fi