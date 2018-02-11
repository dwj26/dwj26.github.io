# dwj26.github.io
blog

This repository is for all code to rebuild site as fully customisable and away from WordPress.

The site is built using Jekyll to serve html as static pages https://jekyllrb.com/

Install Node.js https://nodejs.org/en/ latest LTS
Install Yarn https://yarnpkg.com/lang/en/docs/install/

Install Github desktop and clone into folder

Follow instruction here to install Bootstrap. https://simpleit.rocks/how-to-add-bootstrap-4-to-jekyll-the-right-way/

Install Visual Code

# => For Ubuntu
Git clone Repo

Install Atom - 
sudo add-apt-repository ppa:webupd8team/atom
sudo apt-get update
sudo apt-get install atom

Open a Project in Atom on the cloned Repository
Link Atom with Github - github.atom.io/login

Check you have gem -v
Check you have ruby -v

=======

sudo gem install jekyll
if you get an error follow these steps https://github.com/geerlingguy/ansible-role-ruby/issues/42

navigate to the right folder
Then go to Build Section


# => For windows 8
Intall Jekyll:
Installation via ChocolateyPermalink
A quick way to install Jekyll using Chocolatey is to follow the installation instructions by David Burela:

Install a package manager for Windows called Chocolatey
Install Ruby via Chocolatey: choco install ruby -y

You must also install the Ruby DevKit along with Ruby.:
https://rubyinstaller.org/downloads/
install the DevKit in c:/DevKit
then open command prompt and navigate to c:/Devkit
cd C:\DevKit
ruby dk.rb init
ruby dk.rb install
devkitvars.bat

Reopen a command prompt and install Jekyll: gem install jekyll
Updates in the infrastructure of Ruby may cause SSL errors when attempting to use gem install with versions of the RubyGems package older than 2.6. (The RubyGems package installed via the Chocolatey tool is version 2.3) If you have installed an older version, you can update the RubyGems package using the directions here.
https://jekyllrb.com/docs/windows/


# => Build

In terminal:
jekyll build
 The current folder will be generated into ./_site

jekyll serve
 A development server will run at http://localhost:4000/
Auto-regeneration: enabled. Use `--no-watch` to disable.
