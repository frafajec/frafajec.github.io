#!/bin/sh

# Check if current branch is master
# Proceed to build, remove!
if [ "$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')" == "master" ]
then
    echo ""
    echo "-- Building production version --"
    rm -rf deploy
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
    echo "Remove _ from files and folders"
    rm -rf ./deploy/next
    mkdir ./deploy/next
    mv ./deploy/_next/* ./deploy/next
    rm -rf _next
    rmdir _next
    echo "Replace file imports"
    sed -i '' 's/\/favicon/favicon/g' deploy/index.html
    sed -i '' 's/\/_next/next/g' deploy/index.html
    sed -i '' 's/\/fonts/fonts/g' deploy/index.html
    echo "Replace css content"
    for entry in ./deploy/next/static/css/*                               ✔
    do
      sed -i '' 's/\/fonts/fonts/g' $entry
    done
    # echo "---------"
    # echo "Replace js private names"
    # cp deploy/index.html index_fake.html
    # ./node_modules/.bin/prettier index_fake.html -w
    # while read line; do
    #   if [[ $line =~ \"(next\/static\/.*\/_.*\.js)\" ]];
    #   then
    #     echo ${BASH_REMATCH[1]}
    #     outfilespec=$(echo ${BASH_REMATCH[1]} | sed s/_//g )
    #     echo $outfilespec
    #     sed -i "s/${BASH_REMATCH[1]}/$outfilespec/g" deploy/index.html
    #     awk "{gsub(/${BASH_REMATCH[1]}/,"$outfilespec");}" deploy/index.html

    #     mv "deploy/${BASH_REMATCH[1]}" "deploy/$outfilespec"
    #     echo "---"
    #   fi
    # done < index_fake.html

    exit 1

    # Pushing deploy contents as a new deploy
    echo ""
    echo "-- Commit deploy --"
    git add .
    git_update_hash=`git rev-parse --short HEAD`
    git commit -am "Deploy latest ${git_update_hash}"
    git push origin master

    echo ""
    echo "-- Pull on master --"
    git checkout deploy
    git checkout master -- deploy/

    echo ""
    echo "-- Configuring --"
    cp -R deploy/ .
    rm -R deploy/

    echo ""
    echo "-- Commiting --"
    git add .
    git_develop_hash=`git rev-parse --short develop`
    git commit -am "Deploy develop ${git_develop_hash}"
    git push origin deploy

else
    echo ""
    echo "-- ERROR --"
    echo "You can only deploy from master to deploy branch!"
fi
