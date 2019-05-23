#!/usr/bin/env node
blue=`tput setaf 4`
green=`tput setaf 2`
reset=`tput sgr0`

check_dep() {
  echo "${blue}Checking unused dependcies please wait...${reset}";

  for dep in $(jq -r '.dependencies | keys | .[]' package.json); do
    if ! grep "from\ .*$dep.*\|require\(.*$dep.*\)" -Rq --exclude-dir="node_modules" .; then
      echo "You can probably remove "${green}"$dep"${reset}"";
    fi
  done
}

main(){
  check_dep
}
main
