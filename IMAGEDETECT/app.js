const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const { computerVision } = require('./index')

const app = express();
app.use(bodyParser.json());

const port = 8000;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Final Project",
            description: " APIs created project",
            contact: {
                name: "Akshitha Rao Chitneni",
                email: "achitnen@uncc.edu"
            },
            servers: ["http://0.0.0.0:8000"]
        }
    },
    apis: ["app.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/**
 * @swagger
 * /api/v1/image:
 *    post:
 *     summary: Analyze an image to get its description, detected objects, and related tags.
 *     description: Analyzes the input image and provides a description of the image, objects detected in the image, and related tags.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: image
 *         description: Input Image URL
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             image:
 *               type: string
 *
 *     responses:
 *       200:
 *         description: Result of image analysis for the input image.
 *       400:
 *         description: Invalid input. The image must be a valid URL.
 *       500:
 *         description: Internal server error. Please try again.
 */
app.post('/api/v1/image', (req, res) => {
    if (req.body.image) {
        computerVision(req.body.image)
            .then(result => {
                res.status(200).send(result);
            })
            .catch(err => res.status(500).send(err))

    }
    else {
        res.status(400).send("Invalid request")
    }
})

app.listen(port, () => {
    console.log("Server running at " + port);
})