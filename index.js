var recipes={}

function updateObjectWithKeyAndValue(obj,key,value) {
  return Object.assign({},obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj,key) {
  //var obj2 = obj
  //delete obj2[key]
  //return obj2
  
  return Object.assign({},)
  
}