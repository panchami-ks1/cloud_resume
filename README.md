
# AWS Cloud Resume Challenge

Welcome to my **AWS Cloud Resume Challenge** project! This project is part of the Cloud Resume Challenge, where I applied various AWS services to build and host my resume on the cloud. The goal is to showcase my cloud skills by constructing a fully cloud-native personal resume website.

## Project Overview

The Cloud Resume Challenge involved using both front-end and back-end AWS services, integrating key cloud concepts such as Infrastructure as Code (IaC), serverless computing, and CI/CD pipelines.

## Features

- **Static Website Hosting:** The resume is hosted on Amazon S3 as a static website, served through Amazon CloudFront for improved performance and security.
- **HTTPS Support:** The website is secured with an SSL certificate from AWS Certificate Manager (ACM) and delivered via CloudFront.
- **Custom Domain:** The website is accessible using a custom domain registered through Amazon Route 53.
- **Visitor Counter:** A serverless visitor counter function powered by AWS Lambda and backed by a DynamoDB table.
- **CI/CD Pipeline:** AWS CodePipeline and CodeBuild automatically deploy updates to the website.
- **Infrastructure as Code (IaC):** AWS CloudFormation is used to define and deploy the infrastructure components.

## Technologies Used

- **AWS S3:** Static website hosting
- **AWS CloudFront:** Content delivery network with SSL encryption
- **AWS Route 53:** Domain name management
- **AWS Lambda:** Serverless function to track website visitors
- **Amazon DynamoDB:** NoSQL database for storing visitor count
- **AWS IAM:** Managed permissions for resources
- **AWS CloudFormation:** Infrastructure as Code to automate deployment
- **AWS CodePipeline & CodeBuild:** CI/CD tools for automated website deployment
- **HTML/CSS:** Front-end resume design

## Architecture

The architecture includes the following components:

1. **Frontend**:
   - The static website is hosted on Amazon S3 and delivered via CloudFront.
   - An SSL certificate from ACM secures the connection, and a custom domain is set up with Route 53.

2. **Backend**:
   - An API Gateway triggers an AWS Lambda function that updates and retrieves the visitor count stored in DynamoDB.

3. **CI/CD Pipeline**:
   - The project uses CodePipeline and CodeBuild for continuous integration and deployment, automating the process of updating the website.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/panchami-ks1/cloud_resume.git
   cd folder_name
   ```

2. **Deploy the Frontend:**
   - Upload the resume's HTML/CSS files to the S3 bucket configured for static website hosting.
   - Set up CloudFront and link it to your S3 bucket for content delivery.

3. **Deploy the Backend:**
   - Create a DynamoDB table to store the visitor count.
   - Deploy the Lambda function using CloudFormation to interact with DynamoDB.
   - Configure an API Gateway endpoint to invoke the Lambda function.

4. **Configure CI/CD:**
   - Use the provided CloudFormation templates to set up AWS CodePipeline and CodeBuild for continuous integration and deployment.

5. **Set Up Domain & HTTPS:**
   - Register your domain in Route 53 and configure CloudFront with an SSL certificate from ACM for secure HTTPS access.

