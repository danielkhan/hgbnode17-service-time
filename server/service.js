'use strict';

const express = require('express');
const service = express();

module.exports = (config) => {
    const log = config.log();
    service.get('/service/:location', (req, res) => {
        log.info(`New request for ${req.params.location}`);
        return res.json({result: req.params.location});
    });
    return service;
};