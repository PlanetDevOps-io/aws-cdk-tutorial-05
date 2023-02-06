import random
import boto3
import os

sqs = boto3.client("sqs")
queue_url = os.environ["QUEUE_URL"]

def handler(event, context):
    random_item = str(random.randint(0,100))
    sqs.send_message(QueueUrl=queue_url, MessageBody=random_item)
    return f"Successfully added {random_item} to the queue."
