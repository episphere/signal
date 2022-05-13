console.log(`signal.js loaded`)

function signal(data){
    this.date=Date()
    this.data=data
    this.getSignatures=signal.getSignatures
    this.mutationSpec=signal.mutationSpec
}

signal.getSignatures = async function(url='https://dupvtd2n0i0i4.cloudfront.net/a8cb6009a2aa4144fd53d5187ee498aeb2e24196?query=query%20referenceCancerSignaturesCount(%24mutationType%3A%20Int%2C%20%24search%3A%20String%2C%20%24qc%3A%20String%2C%20%24tag%3A%20Int%2C%20%24study%3A%20Int)%20%7B%0A%20%20referenceCancerSignaturesCount(%0A%20%20%20%20study%3A%20%24study%0A%20%20%20%20mutationType%3A%20%24mutationType%0A%20%20%20%20search%3A%20%24search%0A%20%20%20%20qc%3A%20%24qc%0A%20%20%20%20tag%3A%20%24tag%0A%20%20)%0A%7D%0A&operationName=referenceCancerSignaturesCount&variables=%7B%22mutationType%22%3A1%2C%22search%22%3Anull%2C%22qc%22%3A%22green%22%2C%22tag%22%3Anull%2C%22study%22%3A6%7D'){
    return (await fetch(url)).json()
}

signal.mutationSpec = async function(id=1){
    url=`https://druu1v1sq18l8.cloudfront.net/85123cda2af47da0975c92f7f31141ad/src/components/FullSignatureChart/mutationSpec.query.js?id=${id}`
    return (await fetch(url)).json()
}