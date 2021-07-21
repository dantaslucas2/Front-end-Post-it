import aws from 'aws-sdk'

const region = "us-west-1"
const bucketName = "front-test-law"
const accessKeyId = ""
const secretAccessKey = ""

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: '4'
}) 

