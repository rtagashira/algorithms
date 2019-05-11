// GoDaddy makes a lot of different top-level domains available to its customers. A top-level domain is one that goes directly after the last dot ('.') in the domain name, for example .com in example.com. To help the users choose from available domains, GoDaddy is introducing a new feature that shows the type of the chosen top-level domain. You have to implement this feature.
// To begin with, you want to write a function that labels the domains as "commercial", "organization", "network" or "information" for .com, .org, .net or .info respectively.
// For the given list of domains return the list of their labels.

function domainType(arr) {
  return arr.map(x=>x.split('.'))
            .map(x=>{
              if(x[x.length-1] === 'org') return 'organization'
              if(x[x.length-1] === 'com') return 'commercial'
              if(x[x.length-1] === 'net') return 'network'
              if(x[x.length-1] === 'info') return 'information'
            })
}

function domainType(arr) {
  return arr.map(x=>{
              if(x.match(/org$/)) return 'organization'
              if(x.match(/com$/)) return 'commercial'
              if(x.match(/net$/)) return 'network'
              if(x.match(/info$/)) return 'information'
            })            
}

console.log(domainType(["en.wiki.org", "codesignal.com", "happy.net", "code.info"]))
                                                                                      //["organization", "commercial", "network", "information"] 