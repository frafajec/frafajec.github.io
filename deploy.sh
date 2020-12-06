#!/bin/sh

# Check if current branch is master
# Proceed to build, remove!
if [ "$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')" == "develop" ]
then
    echo ""
    echo "-- Building production version --"
    yarn install
    yarn export

    # Copy from build to deploy folder
    echo ""
    echo "-- Preparing deploymeny --"
    mkdir "deploy"
    echo "Copying build"
    cp -R out/. deploy/
    echo "Copying readme"
    cp "README.md" deploy/
    echo "Copying configs"
    cp ".gitignore" deploy/
    echo "Replace file imports"
    sed -i '' 's/\/favicon/favicon/g' deploy/index.html
    sed -i '' 's/\/_next/_next/g' deploy/index.html
    sed -i '' 's/\/fonts/fonts/g' deploy/index.html
    echo "Replace css content"
    for entry in ./deploy/_next/static/css/*                               ✔
    do
      sed -i '' 's/\/fonts/fonts/g' $entry
    done

    # Pushing deploy contents as a new deploy
    echo ""
    echo "-- Commit deploy --"
    git add .
    git_update_hash=`git rev-parse --short HEAD`
    git commit -am "Deploy latest develop ${git_update_hash}"
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
    git_develop_hash=`git rev-parse --short develop`
    git commit -am "Deploy develop ${git_develop_hash}"
    git push origin master

else
    echo ""
    echo "-- ERROR --"
    echo "You can only deploy from develop to master!"
fi
