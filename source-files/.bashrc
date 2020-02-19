#!/usr/bin/env bash

# This is a script used for local computing and make some of the reduntant tasks easier to execute

echo -n "Welcome to Unix. Today is "; date "+%A, %B %d, %Y. Time is %I:%M %p.";
# echo -n "Uptime: "; uptime;

# Export PATH for NVM using Brew
# export NVM_DIR=~/.nvm
# source $(brew --prefix nvm)/nvm.sh

# Export PATH for Variable VV
# Clone the github repository in Home directory of your machine: https://github.com/bradp/vv.git
# Copy the vv file to ~/Vagrant/
# Remove directory with cloned repository
# export PATH="$PATH:`pwd`/Vagrant/vv"
#Link: https://gist.github.com/DanHerbert/9520689
# export PATH="$HOME/.npm-packages/bin:$PATH"

# Configure Command Prompt
# export PS1="\W > "

# Configure HISTORY with variables
# Default value: 500
# export HISTSIZE=10000
# Set History's file size
# export HISTFILESIZE=1000000
# Set time format
# export HISTTIMEFORMAT='%b %d, %I:%M%p '
# Ignore repeated items
# export HISTCONTROL=ignoreboth
# Ignore certain commands
# export HISTIGNORE="history:pwd:exit:df:ls"

# Aliases for default commands
alias ls='ls -ahlG'
# alias less='less -MN'
# alias up='cd ..'
# alias h='history'
# alias mv='mv -i'
# alias cp='cp -i'
# alias rm='rm -i'
# alias df='df -h'
# alias du='du -h'
# alias grep='grep --color=auto'
alias mkdir='mkdir -p'
# alias google='open http://www.google.com'
# alias sc='screencapture -i'

# Aliases for Vagrant
# alias vv='./vv'
# alias vu='vagrant up'
# alias vup='vagrant up --provision'
# alias vp='vagrant provision'
# alias vssh='vagrant ssh'
# alias vd='vagrant destroy'
# alias vs='vagrant suspend'
# alias vh='vagrant halt'
# alias vr='vagrant resume'
# alias vrd='vagrant reload'
# alias vrdp='vagrant reload --provision'
# alias vbox='vagrant box update && vagrant box prune'

# Aliases for Git
# alias gs='git status'
# alias gi='git init'
# alias ga='git add'
# alias gaa='git add .'
# alias gc='git commit -m'
# alias gp='git push -u origin'
# alias grh='git reset --hard'
# alias gl='git log'
# alias guser='git config --global user.name'
# alias gemail='git config --global user.email'
# alias gf='git fetch'
# alias gco='git checkout'
# alias gm='git merge'

# Special case Aliases
# alias showhiddenfiles='echo "Hidden files have been turned on."; defaults write com.apple.finder AppleShowAllFiles YES; killall Finder /System/Library/CoreServices/Finder.app'
# alias hidehiddenfiles='echo "Hidden files have been turned off."; defaults write com.apple.finder AppleShowAllFiles NO; killall Finder /System/Library/CoreServices/Finder.app'

# Debian Aliases
alias u='sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade && sudo apt-get autoremove && sudo apt-get autoclean'
# alias apt='sudo apt'
# alias apti='sudo apt install'
# alias aptr='sudo apt remove'

# SSH Aliases
# alias scp='scp -l 8192'

# Local Updates
# alias un='sudo npm i -g npm@latest browser-sync yarn'

# z.sh : https://github.com/rupa/z | Copy z.sh file to the home directory
# . ~/z.sh

# Show git branch name in Ubuntu
force_color_prompt=yes
color_prompt=yes
parse_git_branch() {
 git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
if [ "$color_prompt" = yes ]; then
 PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[01;31m\]$(parse_git_branch)\[\033[00m\]\$ '
else
 PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w$(parse_git_branch)\$ '
fi
unset color_prompt force_color_prompt

# Colors hacks | https://askubuntu.com/questions/517677/how-do-i-get-a-colored-bash
force_color_prompt=yes
PS1='\[\033[1;36m\]\u\[\033[1;31m\]@\[\033[1;32m\]\h:\[\033[1;35m\]\w\[\033[1;31m\]\$\[\033[0m\]'