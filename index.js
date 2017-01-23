'use strict'

const urlParser = require('url')

function mergeRelative(host, baseChanks, relativeChanks) {
  let resultChanks = []
  let result = ''
  
  if( baseChanks[baseChanks.length - 1].indexOf('.') > -1 )
    delete(baseChanks[baseChanks.length - 1])
  
  for(let i of baseChanks)
    if( i )
      resultChanks.push(i)
  
  for(let i in relativeChanks)
    if( relativeChanks[i] == '..' )
      delete(resultChanks[resultChanks.length - 1 - i])
    else
      resultChanks.push(relativeChanks[i])
  
  for( let i of resultChanks )
    if( typeof(i) != 'undefined' )
      result += '/' + i
  
  return host + result  
}

function urlCalc(curUrl, navTo) {
  const basePath = urlParser.parse(curUrl)
  let baseChanks = basePath.path.split('/')
  const relativeChanks = navTo.split('/')
  
  const host = basePath.protocol + '//' + basePath.hostname
  
  if( navTo.indexOf(host) > -1 )
    return navTo
  
  if( relativeChanks[0] != '' )
    return mergeRelative(host, baseChanks, relativeChanks)
  else
    return host + navTo
}


module.exports = urlCalc 
