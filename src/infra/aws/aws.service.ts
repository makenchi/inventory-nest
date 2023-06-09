import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

interface PresignedResult {
    url: string;
    id: string;
}

@Injectable() 
export class AWSService {
    
    public s3: AWS.S3;

    constructor() {
        let endpoint = process.env.AWS_ENDPOINT;
        AWS.config.update({
            credentials: {
                accessKeyId: 'foo',
                secretAccessKey: 'foo',
            },
            region: 'us-east-1'
        })
        
        if(endpoint) {
            endpoint = '192.168.15.86';
            this.s3 = new AWS.S3({ endpoint });
        }
    }

    async getPresignedUrl(): Promise<PresignedResult> {
        const id = uuidv4();

        const command = await this.s3.getSignedUrlPromise('putObject', {
            Bucket: 'demo-ar-clothes',
            Key: 'tmp/uploads/'+id+'.jpg',
            Expires: 10 * 60 // Expires in 10 minutes
        });

        return {
            id,
            url: command,
        }
    }
}   