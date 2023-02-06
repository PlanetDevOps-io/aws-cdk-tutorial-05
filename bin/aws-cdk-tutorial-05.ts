#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkTutorial05Stack } from '../lib/aws-cdk-tutorial-05-stack';

const app = new cdk.App();

new AwsCdkTutorial05Stack(app, 'AwsCdkTutorial05Stack', {
});