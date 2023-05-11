# ITIS-SystemIntegrationProject
 I have Used  the [Analyze Image API](https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview-image-analysis?tabs=3-2) in this project

Contemporary methods to interpret photos and returning data are accessible through the Computer Vision API. It can be used to, amid other things, find all the faces in an image or recognize whether an image contains mature content. Additional features include identifying image content, anticipating dominant and accent colors, and describing photographs utilizing full English words. In addition, it has the ability to cleverly create thumbnails for huge photographs to display them effective.

Based on the content of the image, this procedure extracts a wide range of visual elements.

# Working of API

JSON will be provided as a successful answer. If the request was a failure, a message and error code will be sent in the response to assist you figure out what went wrong.

o extract a wide range of visual characteristics out of various images, we are using the Computer Vision Image Analysis service. It can decide whether an image contains explicit content, whether the subject is male or female, find certain products or brands, or look for human faces, for example. Typically, image analysis can identify human faces in a picture and generate rectangular coordinates for each one. Actually, the Analyze Image API provides a face detection feature.

# Image Recognition

Computer vision methods known as object recognition are used to identify objects in images and movies.

Images that match the following criteria are used for image analysis: Any one of the following file types—JPEG, PNG, GIF, or BMP—must be used for the image. The image file must not exceed four megabytes (MB). The image must be more than 50 x 50 pixels in size and less than 16,000 x 16,000 pixels in size.

# Try Out
Temporarily the API is hosted in one of the droplets in Digital Ocean, to run some tests and checkout the functionality
# Server EndPoint
http://167.71.175.220:8000/
# API EndPoint
[http://167.71.175.220:8000/](http://167.71.175.220:8000/api/v1/image)

# Request Headers:

'Content-Type': 'application/json'

# Possible Responses
200 -	OK

400	-Input Validation Failed

500	-Internal Server Error

# Setup


1.Set the Key and Endpoint to the enviroment variables with variable names as COGNITIVE_SERVICE_KEY and COGNITIVE_END_POINT

2.Make sure you have installed node, if not download and install the latest version of node

3.Clone the repository to local machine

4.Open terminal and run the command "npm i"

5.To run the server locally use following command "node app.js"

6.Test the server with the following endpoint "http://localhost:8000/"

7.For swagger docs, use the following endpoint "http://localhost:8000/docs"


# Example
![image](https://github.com/achitnen/ITIS-SystemIntegrationProject/assets/123344473/00d1196f-6ab4-43ea-9aca-40de2f256d3a)

# Request Body
{
"image":"https://www.verywellfamily.com/thmb/fd4eFa4Z75HANMJ0JPrnm0e3jsI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grandfather-and-grandson-reading-at-lake-555799527-5ac7c84143a1030036c1b221.jpg"
}

# Response Body

{

    "description": {
        "tags": [
            "man",
            "outdoor",
            "person"
        ],
        "captions": [
            {
                "text": "a man and a child sitting on a bench by a lake",
                "confidence": 0.5236660838127136
            }
        ]
    },
    "objects": [
        {
            "rectangle": {
                "x": 124,
                "y": 77,
                "w": 167,
                "h": 346
            },
            "object": "person",
            "confidence": 0.763
        }
    ],
    "requestId": "6e15608f-e8dc-476a-a051-5578a3fd081b",
    "metadata": {
        "width": 750,
        "height": 500,
        "format": "webp"
    },
    "modelVersion": "2021-05-01"
}


